import Link from "next/link";
import React from "react";
import Flex from "../Flex";

const MasterCTA = ({ title, link, icon }) => {
  return (
    <div>
      <Link className="no-underline" href={link}>
        <Flex style={"gap-2"}>
          {icon}
          <div className="text-sky-400/100 text-3xl hover:text-white">
            {title}
          </div>
        </Flex>
      </Link>
    </div>
  );
};

export default MasterCTA;
