import Head from "next/head";
import improveperformance from "../data/improveperformance.json";
import MasterTemplate from "../components/page-components/MasterTemplate";

export default function RunInjury() {
  return (
    <div>
      <Head>
        <title>Improve Running Performance</title>
        <meta name="title" content="How to improve your running performance?" />
        <meta name="description" content="Tips for long distance running " />
        <meta name="keywords" content="Improve Running Performance" />

        {/*Open Graph/ Facebook*/}
        <meta property="og:site_name" content="Fitness Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://blog64.vercel.app" />
        <meta property="og:title" content="Long distance running" />
        <meta
          property="og:description"
          content="How to improve your running performance?"
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

      <MasterTemplate
        title="How to Improve Your Running Performance?"
        list={improveperformance}
        image={
          "https://images.unsplash.com/photo-1682367905664-e36b30f15b19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D"
        }
        imageAlt="Improve Running Performance"
      />
    </div>
  );
}
