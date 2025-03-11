import React, { useContext } from "react";
import { UserAuthContext } from "./context API/UserAuthProvider";

export default function UserProfile() {
  const { user, login, logout } = useContext(UserAuthContext);
  return (
    <div>
      {user ? (
        <div>
          <p>Welcom, {user.name}!</p>
          <p>Email, {user.email}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please Login</p>
          <button onClick={login}>Login</button>
        </div>
      )}
    </div>
  );
}
