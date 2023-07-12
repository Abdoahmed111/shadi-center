import Head from "next/head";
import Header from "~/components/sections/Header";
import Services from "~/components/sections/services";
import Navbar from "~/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>مركز شادي للطب البديل</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <Services />
    </>
  );
}