import React from "react";

const Username = ({ username }) => {
  return (
    <div className="username-post mx-3 d-flex">
      <p className="username-show mt-3">@{username}</p>
    </div>
  );
};

export default Username;
