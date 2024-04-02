import React from "react";

const Flex = ({ style, children }) => {
  return <div className={`flex ${style}`}>{children}</div>;
};

export default Flex;
