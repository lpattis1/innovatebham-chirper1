import React from "react";

const Date = ({ date }) => {
  // moment().calendar();

  return (
    <>
      <p className="current-time">{date}</p>
    </>
  );
};

export default Date;
