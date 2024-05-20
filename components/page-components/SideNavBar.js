import React from "react";
import Box from "../Box";
import Flex from "../Flex";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import links from "../../data/links.json";

const SideNavBar = ({ expand, handleClick }) => {
  const router = useRouter();
  const path = usePathname();
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
        <div
          className={`group flex flex-col gap-2 rounded-lg bg-black p-5 ${
            path === "/" ? "text-sky-400" : "text-white"
          }`}
          tabindex="1"
          onClick={() => {
            router.push("/");
          }}
        >
          <div class="flex cursor-pointer items-center justify-between">
            <span> Home </span>
          </div>
        </div>
        <div
          class={`group flex flex-col gap-2 rounded-lg bg-black p-5 ${
            links.map((_) => _.link).includes(path)
              ? "text-sky-400"
              : "text-white"
          }`}
          tabindex="1"
        >
          <div class="flex cursor-pointer items-center justify-between">
            <span> Blogs </span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
              class="h-2 w-3 transition-all duration-500 group-focus:-rotate-180"
            />
          </div>
          <div class="invisible h-auto max-h-0 items-center opacity-0 transition-all group-focus:visible group-focus:max-h-screen group-focus:opacity-100 group-focus:duration-1000">
            {links.map((_, index) => {
              return (
                <Box
                  style={`${
                    path === _.link ? "text-sky-400" : "text-white"
                  } cursor-pointer hover:text-sky-400/50`}
                  onClick={() => {
                    router.push(_.link);
                  }}
                  key={index}
                >
                  {_.title}
                </Box>
              );
            })}
          </div>
        </div>
      </Flex>
    </Box>
  );
};

export default SideNavBar;
