import Head from "next/head";
import { Fragment } from "react";
import PreLoader from "../src/components/PreLoader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="shortcut icon"
          href="assets/images/favicon.ico"
          type="image/png"
        />
        <title>Muntech - IT Solutions & Technology React nextJS Template</title>
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
