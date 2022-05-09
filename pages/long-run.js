import Head from "next/head";
import Link from "next/link";
import longrun from "../data/longrun.json";
export default function LongRun() {
  return (
    <div className="container bg-dark">
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
        <meta property="og:url" content="https://p64-fitnessblog.netlify.app" />
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
        <script type="text/javascript" language="javascript">
          var aax_size='728x90'; var aax_pubname = 'longrun0b-21'; var
          aax_src='302';
        </script>
        <script
          type="text/javascript"
          language="javascript"
          src="http://c.amazon-adsystem.com/aax2/assoc.js"
        ></script>
      </Head>

      <main className="py-5 px-2">
        <h1 className="text-center text-light">
          10 Things I wish I knew before started long distance running
        </h1>
        <div className="d-flex flex-column align-items-center flex-lg-row mt-5 gap-4">
          <div className="image-container w-100 w-lg-50">
            <img
              src="https://images.unsplash.com/photo-1610969524483-2898ee78a41d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Long Running"
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-100 w-lg-50">
            <div className="d-flex flex-column align-items-center">
              <h3 className="text-info">Key points:</h3>
              <ol>
                {longrun.map((item, index) => {
                  return (
                    <li className="fs-4 text-white" key={index}>
                      {item.title}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {longrun.map((item, index) => {
            return (
              <div key={index} className="py-2">
                <h2 className="text-info">{item.title}:</h2>
                <p className="fs-4 text-white">{item.content}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
