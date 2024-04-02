import React from "react";

const Flex = ({ style, children }) => {
  return <div className={`d-flex ${style}`}>{children}</div>;
};

export default Flex;
