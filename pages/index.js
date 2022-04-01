import Head from "next/head";
import Image from "next/image";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>ParagonFGC - Coming Soon</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen select-none">
        <div className="mb-2">
          <Image src="/logo.svg" alt="paragon logomark" width={144} height={144} />
        </div>
        <h1 className="mb-6 text-3xl font-bold">Coming Soon</h1>
      </main>
    </>
  );
};

export default HomePage;
