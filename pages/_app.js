import "../styles/tailwind.css";
import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

const previewImg = "https://i.imgur.com/YWr7FcG.jpg";
const validRoutes = [
  "/",
  "/blog/[slug]",
  "/blog",
  "/projects",
  "/projects/[slug]",
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleComplete = () => {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    };

    const handleLoading = () => {
      setLoading(true);
    };

    const handleError = () => {
      setLoading(false);
    };

    if (!validRoutes.includes(router.pathname)) {
      handleError();
    }

    router.events.on("routeChangeStart", handleLoading);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);
    return () => {
      router.events.off("routeChangeStart", handleLoading);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
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
        <Script
          strategy="beforeInteractive"
          id="google fonts"
          src="https://fonts.googleapis.com"
        />
        <Script
          strategy="beforeInteractive"
          id="google fonts static"
          src="https://fonts.gstatic.com"
          crossOrigin
        />
      </Head>
      {loading ? (
          <Loading />
      ) : (
        <section className="w-full bg-[rgba(23,26,38,1)] bg-dot-white/[0.2] ">
          <Component {...pageProps} />
          <Footer />
        </section>
      )}

      <SpeedInsights/>

    </>
  );
}

export default MyApp;
