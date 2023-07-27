import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStles.headingMd}>
        <p>Hi! This is Shota.</p>
        <p>
          (this is a sample webisite - you'll be building a site like this on {' '}<a href="https://nextjs.org/learn"> our NExt.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
