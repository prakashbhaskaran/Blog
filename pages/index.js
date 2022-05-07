import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Fitness Blog</title>
      </Head>
      <main className="py-5">
        <h1 className="text-info">Fitness Blogs</h1>
        <div className="py-5">
          <Link href="/long-run">
            <a className="main-list fs-3 text-decoration-none text-light">
              10 Things I wish I knew before started long distance running.
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
