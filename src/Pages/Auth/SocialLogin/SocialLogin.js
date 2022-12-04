import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { Button } from "react-bootstrap";
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
      <Button onClick={handleGoogleLogin} variant="outline-primary">
        <FaGoogle></FaGoogle>Login with Google
      </Button>{" "}
      <Button onClick={handleGithubLogin} variant="outline-secondary">
        {" "}
        <FaGithub></FaGithub> Login with Github
      </Button>
    </div>
  );
};

export default SocialLogin;
