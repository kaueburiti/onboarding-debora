import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import Layout from '../../components/Layout';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1 className='text-3xl font-bold underline text-red-600'>
          First Post!
        </h1>
        <h2>
          <Link href='/'>
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    </>
  );
}
