import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  // ===== Standard useEffect Method =====
  //   const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/taahir980")
  //       .then((res) => res.json())
  //       .then((resData) => {
  //         setData(resData);
  //       });
  //   }, []);

  const data = useLoaderData();

  return (
    <div className="bg-gray-500 w-1/2 rounded-xl mx-auto p-2 text-white text-2xl m-4">
      <img className="rounded-full" src={data.avatar_url} alt="" width={200} />
      <div className="m-4">
        <span className="bg-orange-400 p-2 rounded-xl mx-2">
          Github User: {data.name}
        </span>
        <span className="bg-orange-400 p-2 rounded-xl mx-2">
          No. of repos: {data.public_repos}
        </span>
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/taahir-khhan");
  return response.json();
};
