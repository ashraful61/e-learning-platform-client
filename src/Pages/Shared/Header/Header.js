import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {
      }).catch((error) => {
      });
  }
  return (
    <div>
      header:
      {user?.uid ? (
        <>
          {user?.email}
          <span onClick={handleLogOut}>LogOut</span>
        </>
      ) : (
        <span>LogIn</span>
      )}
    </div>
  );
};

export default Header;
