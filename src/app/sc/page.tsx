import { Suspense } from 'react';
import ClientComponent from './ClientComponent';


export default function Page() {
  return (
    <Suspense fallback={<div>Loading client component...</div>}>
      <ClientComponent />
    </Suspense>
  );
}
