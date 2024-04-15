import React from "react";

export const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: ".5rem" }}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};
