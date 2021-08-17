import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Persons from "../pages/components/persons";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next + Typescript App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Persons name="typeToshimitsu" tel="00-tttt-ssss" id={1} />
    </div>
  );
};

export default Home;