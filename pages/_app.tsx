import React from 'react';
import App from 'next/app';
import { SITE_NAME } from '../src/constants/env';
import 'src/App/style.css';

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    const server = !!ctx.req;
    const out = { server } as any;
    if (Component.getInitialProps) {
      return {
        ...out,
        pageProps: {
          ...await Component.getInitialProps(ctx)
        }
      }
    }
    return out;
  }

  render() {
    const { props } = this as any;
    const { Component, pageProps } = props;
    return (
      <>
        <title>{SITE_NAME}</title>
        <Component {...pageProps} />
      </>
    )
  }
}