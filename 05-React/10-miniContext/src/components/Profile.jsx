import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="profile">No user Found</div>;

  return (
    <div className="profile">
      <span>Username: {user.username},</span>
      <span>Password(Revealing secret information): {user.password} </span>
    </div>
  );
}

export default Profile;
