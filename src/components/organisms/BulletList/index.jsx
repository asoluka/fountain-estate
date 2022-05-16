import React from "react";

const BulletList = ({ type, data }) => {
  return (
    <ul style={{ listStyleType: type }}>
      {data.map((elem, idx) => (
        <li className="mb-2" key={idx}>
          {elem}
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
