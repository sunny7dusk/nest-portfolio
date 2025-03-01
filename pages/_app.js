import "../styles/tailwind.css";
import { useRouter } from "next/router";
import Loading from "../components/loading";
import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Script from "next/script";
import DOTS from 'vanta/dist/vanta.dots.min.js'

// import { SpeedInsights } from "@vercel/speed-insights/next"

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
  const [vantaEffect, setVantaEffect] = useState(null)
  const vantaRef = useRef(null)

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

    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: 'body',
        backgroundColor: 'rgba(23,26,38,1)',
        color2: 'rgb(255,255,255,0.2)',
        color: 'rgb(255,255,255,0.2)',
        showLines: false
      }))
    }

    const handleResize = () => vantaEffect?.setOptions({
      height: window.outerHeight,
      width: window.outerWidth
    })
    window.addEventListener("resize", handleResize)

    router.events.on("routeChangeStart", handleLoading);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleError);
    return () => {
      router.events.off("routeChangeStart", handleLoading);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleError);
      if (vantaEffect) vantaEffect.destroy()
      window.removeEventListener("resize", handleResize)
    };
  }, []);


  return (
    <>
      <Head>
        <title>Nate&apos;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Nathaniel Chai Zhuo En | Senior Consultant at Kollabio. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
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
          content="Nathaniel Chai Zhuo En | Senior Consultant at Kollabio. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <meta
          property="og:description"
          content="Nathaniel Chai Zhuo En | Senior Consultant at Kollabio. Welcome to my portfolio! This is build with NextJS, Sanity.io and Tailwind."
        />
        <meta name="twitter:image" content={previewImg} />
        <meta name="twitter:card" content={previewImg} />
        <meta property="image" content={previewImg} />
        <Script
          strategy="worker"
          id="google fonts"
          src="https://fonts.googleapis.com"
        />
        <Script
          strategy="worker"
          id="google fonts static"
          src="https://fonts.gstatic.com"
          crossOrigin
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"/>
      </Head>
      <section className="w-full flex justify-center" ref={vantaRef}>
      {loading ? (
          <Loading />
      ) : (
        <section className="w-full max-w-[1980px]">
          <Component {...pageProps} />
          <Footer />
        </section>
      )}
      </section>

      {/* <SpeedInsights/> */}

    </>
  );
}

export default MyApp;
