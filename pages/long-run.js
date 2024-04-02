import Head from "next/head";
import longrun from "../data/longrun.json";
import Flex from "../components/Flex";
export default function LongRun() {
  return (
    <div>
      <Head>
        <title>Long Distance Running</title>
        <meta
          name="title"
          content="10 Things I wish I knew before started long distance running"
        />
        <meta name="description" content="Tips for long distance running " />
        <meta name="keywords" content="Long distance running | Marathon" />

        {/*Open Graph/ Facebook*/}
        <meta property="og:site_name" content="Fitness Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog64.vercel.app" />
        <meta property="og:title" content="Long distance running" />
        <meta
          property="og:description"
          content="10 Things I wish I knew before started long distance running"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1645822937278-5e84025713f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />

        {/*Twitter*/}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://p64-fitnessblog.netlify.app"
        />
        <meta property="twitter:title" content="Long distance running" />
        <meta
          property="twitter:description"
          content="10 Things I wish I knew before started long distance running"
        />
        <meta
          property="twitter:image"
          content="https://images.unsplash.com/photo-1645822937278-5e84025713f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </Head>

      <main>
        <h1 className="text-center text-light text-[40px]">
          10 Things I wish I knew before started long distance running
        </h1>
        <Flex style="flex-column justify-center align-items-center flex-lg-row mt-5 gap-4">
          <div className="w-full xl:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1610969524483-2898ee78a41d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Long Running"
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
        </Flex>
        <div className="mt-5">
          {longrun.map((item, index) => {
            return (
              <div key={index} className="py-2">
                <h2 className="text-info text-[28px]">{item.title}:</h2>
                <p className="text-[28px] text-white">{item.content}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
