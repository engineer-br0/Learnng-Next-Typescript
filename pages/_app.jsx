import '../styles/globals.css'
import { AppProps } from 'next/app'
import Layout from './layout';
import Navbar from './navbar';

export default function App({ Component, pageProps }) {
  return (
     <Layout>
  <Component {...pageProps} />
  </Layout>
  );
}
