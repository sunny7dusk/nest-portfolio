import "../styles/tailwind.css";
import { useRouter } from "next/router";
import Loading from "./loading";
import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "./footer";
const previewImg = "https://i.imgur.com/YWr7FcG.jpg";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(false);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    const handleLoading = () => {
      setLoading(true);
    };

    // const handleError = () => {
    //   setError(true)
    // }

    router.events.on("routeChangeStart", handleLoading);
    router.events.on("routeChangeComplete", handleComplete);
    //router.events.on("routeChangeComplete", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleLoading);
      router.events.off("routeChangeComplete", handleComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Nate&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <link rel="canonical" href="/Portfolio" />
        <meta
          property="og:title"
          content="Nathaniel Chai Zhuo En | Portfolio"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sunny7dusk.dev/" />
        <meta property="og:image" content={previewImg} />
        <meta
          name="twitter:title"
          content="Nathaniel Chai Zhuo En | Portfolio"
        />
        <meta
          name="twitter:description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <meta
          property="og:description"
          content="Nathaniel Chai Zhuo En | Computer Science senior at Virginia Tech. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <meta name="twitter:image" content={previewImg} />
        <meta name="twitter:card" content={previewImg} />
        <meta property="image" content={previewImg} />
        <script
          src="https://unpkg.com/github-devprofile@2/dist/card.component.min.mjs"
          type="module"
        ></script>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Component {...pageProps} />
          <Footer />
        </>
      )}
    </>
  );
}

export default MyApp;
