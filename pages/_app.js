import Head from "next/head";
import "../styles/globals.css";
import "../styles/app.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosHome } from "react-icons/io";

export default function MyApp({ Component, pageProps }) {
  const pathname = usePathname();
  return (
    <div className="p-4">
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
      {pathname !== "/" && (
        <Link href={"/"} className="text-white text-2xl">
          <IoIosHome />
        </Link>
      )}
      <div className="mt-2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
