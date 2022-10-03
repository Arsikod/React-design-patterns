import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { IUser } from '../ContainerComponents/types';

export function useData<T>(getData: <T>() => AxiosResponse<T>) {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getData<T>();
      setData(response.data);
    })();
  }, []);

  return data;
}
