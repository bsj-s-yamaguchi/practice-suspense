'use client';

import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchDataThunk } from '../store/dataSlice';
import { RootState, AppDispatch } from '../store/store';

export default function ReduxClientComponent() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.data.value);
  const loading = useSelector((state: RootState) => state.data.loading);

  useEffect(() => {
    dispatch(fetchDataThunk());
  }, [dispatch]);

  return <div>{loading ? 'Loading from Redux...' : data}</div>;
}
