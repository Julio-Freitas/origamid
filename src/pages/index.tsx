import type { NextPage } from "next";
import Head from "next/head";
import Menu from "../components/menu";

import HomePage from "../templates/home";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
