import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogin = () => {
    githubLogin(githubProvider).then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
      console.log(user);
    });
  };

  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn mb-5">
        <FaGoogle></FaGoogle> &nbsp; Login with Google
      </button> <br/>

      <button onClick={handleGithubLogin} className="btn">
        {" "}
        <FaGithub></FaGithub> &nbsp; Login with Github
      </button>
    </div>
  );
};

export default SocialLogin;
