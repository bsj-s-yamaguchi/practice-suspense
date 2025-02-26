'use client';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../store/dataSlice';
import Providers from './Providers';

interface ClientComponentProps {
  data: string | null;
}

export default function ClientComponent({ data }: ClientComponentProps) {
  console.log("hoge")
  return (
    <Providers>
      <ClientComponentInner data={data} />
    </Providers>
  );
}

function ClientComponentInner({ data }: ClientComponentProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (data !== null) {
      dispatch(setData(data));
    }
  }, [data, dispatch]);

  return <div>Client Data: {data ?? 'Loading...'}</div>;
}