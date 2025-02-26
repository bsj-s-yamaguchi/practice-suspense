import { Suspense } from 'react';
import ServerComponent from './ServerComponent';


export default function Page() {
  return (
    <Suspense fallback={<div>Loading from server...</div>}>
      <ServerComponent />
    </Suspense>
  );
}
