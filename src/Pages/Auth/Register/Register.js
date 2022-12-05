import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                Swal.fire({
                    icon:'success',
                    title:"Success",
                    text:'Registration Successful.Email verification link has been sent to your email. Please verify your email address'
                })
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    return (
        <div className="w-2/5 mx-auto pt-6">
        <h3 className="text-4xl">Register here</h3>
        <form onSubmit={handleSubmit}>

        <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                name="name"
                required
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Enter your photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Enter your photo URL"
                className="input input-bordered w-full"
                name="photoURL"
                required
              />
            </label>
          </div>

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
          <button className="btn btn-outline btn-primary w-3/6">Register</button>
        </form>
        <p>{error}</p>
        <p className="my-5">
          <small>
            Already have an account ? Please{" "}
            <Link style={{ "textDecoration": "underline" }} to="/login">
              Login
            </Link>
          </small>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Register;