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
    githubLogin(githubProvider).then((result) => {
      const user = result.user;
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
