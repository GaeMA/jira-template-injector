import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jira Template Injector</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/arnau-rius/jira-template-injector">
            Jira Template Injector
          </a>
        </h1>
        <p className={styles.description}>
          👩🏽‍💻 Get started by following instructions in{" "}
          <a href="https://github.com/arnau-rius/jira-template-injector">
            here ➡️
          </a>
        </p>

        <div className={styles.grid}>
          <a
            href="https://jira-template-injector.vercel.app/templates.json"
            className={styles.card}
            target="_blank"
          >
            <h2>JSON Template &rarr;</h2>
            <p>JIRA Template Configuration in JSON format.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
