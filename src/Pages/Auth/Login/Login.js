import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const [error, setError] = useState("");
  const { emailLogin, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    emailLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        // if(user.emailVerified){
        navigate(from, { replace: true });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Login Successful",
        });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-2/5 mx-auto pt-6">
      <h3 className="text-4xl">Login here</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter your email</span>
          </label>
          <label className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </label>
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Enter your password</span>
          </label>
          <label className="input-group">
            <input
              type="password"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              name="password"
              required
            />
          </label>
        </div>
        <button className="btn btn-outline btn-primary w-3/6">Login</button>
      </form>
      <p>{error}</p>
      <p className="my-5">
        <small>
          Don't have an account ? Please{" "}
          <Link style={{ "textDecoration": "underline" }} to="/register">
            Register
          </Link>
        </small>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
