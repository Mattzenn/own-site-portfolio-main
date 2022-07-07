import Script from 'next/script';
import '../vendor/styles/normalize.css';
import '../vendor/styles/inter.css';
import '../styles/animate/animate.css';
import '../styles/main.css';
import '../styles/promo/promo.css';
import '../styles/header/header.css';
import '../styles/aboutme/aboutme.css';
import '../styles/info/info.css';
import '../styles/stages/stages.css'
import '../styles/portfolio/portfolio.css';
import '../styles/feedback/feedback.css';
import '../styles/whyme/whyme.css';
import '../styles/calltoactionbox/calltoactionbox.css';
import '../styles/request/request.css';
import '../styles/footer/footer.css';
import '../styles/error/error.css';
import 'aos/dist/aos.css';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import Aos, { AOS } from "aos";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {

  useEffect(()=> {
    Aos.init({duration: 800});
  }, []);

  return (
    <ParallaxProvider>
      <Head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="page">
       <main className="content">
       <Layout>
         <Component {...pageProps} />
       </Layout>
       </main>
     </div>
     </ParallaxProvider> 
  );
}

export default MyApp;