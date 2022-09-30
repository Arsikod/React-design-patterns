import { AxiosResponse } from 'axios';
import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';

interface ILoader {
  getData: <T>() => Promise<AxiosResponse<T>>;
  children: ReactNode;
}

export default function Loader<TData>({ getData, children }: ILoader) {
  const [data, setData] = useState<TData>();

  useEffect(() => {
    (async () => {
      const { data } = await getData<TData>();

      data && setData(data);
    })();
  }, [getData]);

  return (
    <>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { ...data });
        }

        return child;
      })}
    </>
  );
}
