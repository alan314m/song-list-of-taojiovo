import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Link from "next/link";
import Head from "next/head";
import { Router } from 'next/router';

import { ToastContainer } from "react-toastify";
// <div style={{ textAlign: 'center', padding: '10px'}}>测试环境, 请尽量使用二级域名<Link href="https://www.taojiovo.com" passHref><a target="_blank">https://taojiovo.com</a></Link>访问, 谢谢!</div>
function MyApp({ Component, pageProps }) {
  Router.events.on('routeChangeComplete', (url) => {
    try{
      window._hmt.push(['_trackPageview', url]);
    }catch (e){}
  })

  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover' />
      </Head>
      {/** <div style={{ textAlign: 'center', padding: '10px'}}>测试环境, 请尽量使用二级域名<Link href="https://www.taojiovo.com" passHref><a target="_blank">https://taojiovo.com</a></Link>访问, 谢谢!</div> */}
      <Component {...pageProps} />
      <ToastContainer
        theme="light"
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
    </>
  );
}

export default MyApp;
