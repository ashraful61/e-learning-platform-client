import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const SocialLogin = () => {

  const { googleLogin, githubLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleGithubLogin = () => {
    githubLogin(githubProvider)
    .then(result => {
        const user = result.user;
        console.log(user)
    })
  }

  return (
    <div>

        <FaGoogle></FaGoogle>Login with Google


        <FaGithub></FaGithub> Login with Github

    </div>
  );
};

export default SocialLogin;
