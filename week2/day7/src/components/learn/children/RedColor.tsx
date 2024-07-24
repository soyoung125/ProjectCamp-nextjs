import React from "react";

const RedColor = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div style={{ color: "red" }}>{children}</div>
    </>
  );
};
export default RedColor;
