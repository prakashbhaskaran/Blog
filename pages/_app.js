import Head from "next/head";
import "../styles/globals.css";
import "../styles/app.css";
import NextTopLoader from "nextjs-toploader";
import Box from "../components/Box";
import { useState } from "react";
import Flex from "../components/Flex";
import SideNavBar from "../components/page-components/SideNavBar";

export default function MyApp({ Component, pageProps }) {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };
  return (
    <Box>
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <NextTopLoader showSpinner={false} easing="ease" />
      <Flex>
        <SideNavBar expand={expand} handleClick={handleClick} />
        <Box
          style={`pl-2 pt-2 transition-all ${
            expand ? "basis-4/5" : "basis-full"
          }`}
        >
          <Component {...pageProps} />
        </Box>
      </Flex>
    </Box>
  );
}
