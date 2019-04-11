import App, { Container } from 'next/app';
import Head from 'next/head';
import 'react-toastify/dist/ReactToastify.min.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>I Need Ideas!</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
