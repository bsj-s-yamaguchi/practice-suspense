'use client';

import { Suspense } from 'react';
import ClientComponent from './ClientComponent';
import ReduxClientComponent from './ReduxClientComponent';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading client component...</div>}>
      {/* <ClientComponent /> */}
      <ReduxClientComponent />
    </Suspense>
  );
}
