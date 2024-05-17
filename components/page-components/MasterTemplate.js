import React from "react";
import Flex from "../Flex";
import Image from "next/image";

const MasterTemplate = ({
  title = "title",
  image,
  imageAlt = "No Alt",
  list = [],
}) => {
  return (
    <main>
      <h1 className="text-center text-white text-[40px]">{title}</h1>
      {image && (
        <Flex style={"justify-center mt-4"}>
          <Image
            src={image}
            alt={imageAlt}
            height={500}
            width={500}
            style={{ objectFit: "cover" }}
          />
        </Flex>
      )}
      <div className="mt-5">
        {list.map((item, index) => {
          return (
            <div key={index} className="py-2">
              <h2 className="text-sky-400/100 text-[28px]">{item.title}</h2>
              <p className="text-[28px] text-white">{item.content}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default MasterTemplate;
