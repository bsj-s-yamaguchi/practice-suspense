'use client';

import { Suspense } from 'react';
import ServerComponent from './ServerComponent';


export default function Page() {
  return (
    <Suspense fallback={<div>Loading from client...</div>}>
      <ServerComponent />
    </Suspense>
  );
}
