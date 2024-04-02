import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="vh-100">
      <Head>
        <title>Fitness Blog</title>
      </Head>
      <main>
        <div>
          <Link className="no-underline" href="/long-run">
            <div className="text-green-400 text-3xl hover:text-white">
              10 Things I wish I knew before started long distance running.
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
