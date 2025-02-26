import { Suspense } from 'react';
import ClientComponent from './ClientComponent';
import { fetchData } from '../lib/fetchData';

export default async function Page() {
  const data = await fetchData();
  
  return (
    <Suspense fallback={<div>Loading client component...</div>}>
      <ClientComponent data={data} />
    </Suspense>
  );
}
