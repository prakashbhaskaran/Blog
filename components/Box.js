import React from "react";

const Box = ({ children, style, ...rest }) => {
  return (
    <div className={style} {...rest}>
      {children}
    </div>
  );
};

export default Box;
