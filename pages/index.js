import Head from "next/head";
import links from "../data/links.json";
import MasterCTA from "../components/page-components/MasterCTA";
import Flex from "../components/Flex";
import { GiFeather } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fitness Blogs</title>
      </Head>
      <h1 className="text-white uppercase text-2xl">Fitness Blogs</h1>
      <main className="mt-2">
        <Flex style={"flex-col gap-4"}>
          {links.map((_, index) => {
            return (
              <MasterCTA
                title={_.title}
                link={_.link}
                key={index}
                icon={
                  <div className="text-white text-40">
                    <GiFeather />
                  </div>
                }
              />
            );
          })}
        </Flex>
      </main>
    </div>
  );
}
