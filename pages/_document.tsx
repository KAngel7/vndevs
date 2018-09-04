import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {
  DEV, FB_TRACKING_ID, SENTRY_TRACKING_ID, SITE_DESCRIPTION, SITE_IMAGE,
  SITE_NAME, SITE_TITLE, SITE_KEYWORDS, GA_TRACKING_ID, GTAG_ID
} from '../src/constants/env';

export default class extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={SITE_NAME} />
          <meta property="og:title" content={SITE_TITLE} />
          <meta property="og:description" content={SITE_DESCRIPTION} />
          <meta property="og:image" content={SITE_IMAGE} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content={SITE_NAME} />
          <meta name="twitter:title" content={SITE_TITLE} />
          <meta name="twitter:description" content={SITE_DESCRIPTION} />
          <meta property="twitter:image" content={SITE_IMAGE} />
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <title>{SITE_NAME}</title>
          <meta name="description" content={SITE_DESCRIPTION} />
          <meta name="keywords" content={SITE_KEYWORDS} />
          <link rel="shortcut icon" type="image/png/ico" href="/static/favicon.ico" />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries"></script>
          {!DEV && FB_TRACKING_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_TRACKING_ID}');
fbq('track', 'PageView'); `
              }}
            />
          )}
          {!DEV && FB_TRACKING_ID && (
            <noscript>
              <img
                height="1"
                width="1"
                src={`//www.facebook.com/tr?id=${FB_TRACKING_ID}&ev=PageView&noscript=1`}
              />
            </noscript>
          )}
          {!DEV && GTAG_ID && (
            <React.Fragment>
              <script async src="https://www.googletagmanager.com/gtag/js?id=UA-125125869-1"/>
              <script
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GTAG_ID}');`
                }}
              />
              </React.Fragment>
          )}
          {!DEV && GA_TRACKING_ID && (
            <React.Fragment>
              <style>{'.async-hide { opacity: 0 !important}'}</style>
              <script
                dangerouslySetInnerHTML={{
                  __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
                  h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
                  (a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
                  })(window,document.documentElement,'async-hide','dataLayer',4000,
                  {'${GA_TRACKING_ID}':true});`
                }}
              />
            </React.Fragment>
          )}
          {!DEV && GA_TRACKING_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
                  ga('create', 'UA-62971524-1', 'auto');
                  ga('require', '${GA_TRACKING_ID}');
                  ga('send', 'pageview');`
              }}
            />
          )}
          {!DEV && SENTRY_TRACKING_ID && (
            <script
              src="https://cdn.ravenjs.com/3.17.0/raven.min.js"
              {...{ crossOrigin: 'anonymous' }}
            ></script>
          )}
          {!DEV && SENTRY_TRACKING_ID && (
            <script dangerouslySetInnerHTML={{
              __html: `Raven.config('https://${SENTRY_TRACKING_ID}@sentry.io/156600').install()`
            }}>
            </script>
          )}
          {DEV
            ? <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.js" type="text/javascript"></script>
            : <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
          }
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}