import {
  Children,
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { axiosInstance } from '../api';

interface ILoader {
  url: string;
  children: ReactNode;
}

export default function Loader<TData>({ url, children }: ILoader) {
  const [data, setData] = useState<TData>();

  useEffect(() => {
    (async () => {
      const response = await axiosInstance.get<TData>(url);
      setData(response.data);
    })();
  }, [url]);

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
