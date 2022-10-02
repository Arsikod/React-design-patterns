import { useEffect, useState } from 'react';
import { axiosInstance } from '../api';

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function withEditableResource<TComponent, TData>(
  Component: React.ComponentType<TComponent>,
  resourcePath: string,
  resourceName: string
) {
  const ComponentWithEditableResource = (props: Record<string, unknown>) => {
    const [originalData, setOriginalData] = useState<TData | null>(null);
    const [data, setData] = useState<TData | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axiosInstance.get<TData>(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    function onChange(changes: TData) {
      setData({ ...changes });
    }

    async function onSave() {
      const response = await axiosInstance.post(resourcePath, {
        [resourceName]: data,
      });
      setOriginalData(response.data);
      setData(response.data);
    }

    function onReset() {
      setData(originalData);
    }

    const resourceProps = {
      [resourceName]: data,
      [`onChange${capitalize(resourceName)}`]: onChange,
      [`onSave${capitalize(resourceName)}`]: onSave,
      [`onReset${capitalize(resourceName)}`]: onReset,
    };

    return <Component {...(props as TComponent)} {...resourceProps} />;
  };

  return ComponentWithEditableResource;
}
