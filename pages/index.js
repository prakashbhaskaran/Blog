import Head from "next/head";
import links from "../data/links.json";
import MasterCTA from "../components/page-components/MasterCTA";
import Flex from "../components/Flex";
import { GiFeather } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fitness Blog</title>
      </Head>
      <h1 className="text-white uppercase text-40">Fitness Blog</h1>
      <main className="mt-2">
        <Flex style={"flex-col gap-4"}>
          {links.map((_) => {
            return (
              <MasterCTA
                title={_.title}
                link={_.link}
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
