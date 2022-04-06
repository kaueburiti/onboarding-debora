import Head from 'next/head';
// import Link from 'next/link';
import Layout from '../../components/Layout';

import HouseCard from '../../components/HouseCard';

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <div className='flex justify-center pt-9 pb-5 bg-zinc-50'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
            <HouseCard />
          </div>
        </div>
      </Layout>
    </>
  );
}
