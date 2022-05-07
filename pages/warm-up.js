import Head from "next/head";
import React from "react";
import warmup from "../data/warmup.json";
const warmUp = () => {
  return (
    <div className="container">
      <Head>
        <title>Warm up guidance</title>
      </Head>
      <main className="py-5 px-2">
        <h1 className="text-center text-light">Warm up guidance</h1>
        <div className="d-flex flex-column align-items-center flex-lg-row mt-5 gap-4">
          <div className="image-container w-100 w-lg-50">
            <img
              src="https://images.unsplash.com/photo-1615303736576-075722ab0da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Long Running"
              height="100%"
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-100 w-lg-50">
            <div className="d-flex flex-column align-items-center">
              <h3 className="text-info">Key points:</h3>
              <ol className="mt-2">
                {warmup.map((item, index) => {
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
        <div className="mt-5"></div>
      </main>
    </div>
  );
};

export default warmUp;
