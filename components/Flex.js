import React from "react";

const Flex = ({ style = "", children, ...rest }) => {
  return (
    <div className={`flex ${style}`} {...rest}>
      {children}
    </div>
  );
};

export default Flex;
