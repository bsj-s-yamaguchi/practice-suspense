'use client';

import { useState, useEffect } from 'react';
import { fetchData } from '../lib/fetchData';

export default function ClientComponent() {
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <div>Client Data: {data ?? 'Loading...'}</div>;
}
