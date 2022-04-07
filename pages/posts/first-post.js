import Head from 'next/head';
import Layout from '../../components/Layout';
import HouseCard from '../../components/HouseCard';
import { useQuery } from 'react-query';

export default function FirstPost() {
  const api =
    'https://mockend.com/kaueburiti/onboarding-debora-rest-api/buildings?limit=6';

  const { isLoading, error, data } = useQuery('response', () =>
    fetch(api).then((res) => res.json())
  );
  if (isLoading) return 'loading';
  if (error) return 'An error occurred!';
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <div className='flex justify-center pt-9 pb-5 bg-zinc-50'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {data.map((card) => {
              return (
                <HouseCard
                  address={card.address}
                  baths={card.baths}
                  beds={card.beds}
                  id={card.id}
                  image={card.image}
                  name={card.name}
                  price={card.price}
                  sqft={card.sqft}
                  status={card.status}
                />
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
}
