import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Quicksight Embedded POC</title>
          <meta name="description" content="Made with ❤️ in Bordeaux 🇫🇷" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Quicksight Embedding POC</h1>

          <p className={styles.description}>
            A quick demo of AWS{" "}
            <a
              href="https://aws.amazon.com/quicksight/embedded-analytics/"
              target="_blank"
              rel="noreferrer"
            >
              <code className={styles.code}>Quicksight Embedded Analytics</code>
            </a>
          </p>

          <div className={styles.grid}>
            <Link href="/dashboard-embed">
              <a href="" className={styles.card}>
                <h2>Dashboard embed &rarr;</h2>
                <p>Embedded dashboard in read-only mode.</p>
              </a>
            </Link>

            <Link href="/session-embed">
              <a className={styles.card}>
                <h2>Session embed &rarr;</h2>
                <p>Embedded dashboard in editor mode.</p>
              </a>
            </Link>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
}

export default Home;
