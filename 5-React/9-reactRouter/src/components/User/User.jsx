import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <>
      <h1 className="m-4 p-3 bg-orange-500 text-white text-center rounded-lg text-3xl w-1/2 mx-auto">
        User: {userId}
      </h1>
    </>
  );
}

export default User;
