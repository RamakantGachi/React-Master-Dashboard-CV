import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/Auth/login");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Extract Portal PV</title>
        <meta name="description" content="PV extract portal for TATA MOTORS" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <div
        className={styles.main}
        id="main-div"
        styles={{
          backgroundImage: "url(/bgimage.png)",
          backgroundSize: "cover",
        }}
      ></div>

      <footer className={styles.footer}></footer>
    </div>
  );

}
// const Keycloak = typeof window !== 'undefined' ? require('keycloak-js') : null
