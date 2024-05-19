import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";

const SideNavBar = ({ expand, handleClick }) => {
  const router = useRouter();
  const path = usePathname();
  console.log(path);
  return (
    <Box
      style={`h-[auto] min-h-screen bg-dark ${
        expand ? "basis-1/5 border-r-2" : "basis-0"
      } p-3`}
    >
      <Flex
        style={`text-white cursor-pointer sticky top-[14px] ${
          expand ? `justify-end` : ""
        }`}
        onClick={handleClick}
      >
        <GiHamburgerMenu />
      </Flex>
      <Flex
        style={`${
          expand ? "flex" : "hidden"
        } flex-col gap-3 sticky top-[30px] pt-4`}
      >
        {[{ link: "/", icon: <IoIosHome /> }].map((_) => {
          return (
            <Flex
              style={`bg-sky-400/100 p-2 cursor-pointer ${
                path === _.link ? "opacity-100" : "opacity-75"
              } hover:opacity-100 justify-center w-full text-white text-2xl`}
              onClick={() => {
                router.push(_.link);
              }}
            >
              <IoIosHome />
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
};

export default SideNavBar;
