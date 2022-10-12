// @ts-nocheck

import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "../src/components/constants";
import { useEffect, useState } from "react";
import { getCookie } from "../src/components/common/utils";

function MyApp({ Component, pageProps }: AppProps) {
  const [dataCookie, setDataCookie] = useState();

  useEffect(() => {
    if (getCookie("data") !== "") {
      let tmp = getCookie("data");
      if (tmp !== undefined) {
        setDataCookie(JSON.parse(tmp));
      }
    }
  }, []);

  useEffect(() => {
    if (dataCookie) {
      window?.ReactNativeWebView?.postMessage(JSON.stringify(dataCookie));
    }
  }, [dataCookie]);

  return (
    <>
      <Component {...pageProps} />

      <Script
        id="lazyOnload1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="lazyOnload2" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
    </>
  );
}

export default MyApp;
