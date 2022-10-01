import { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { IUser } from '../ContainerComponents/types';

export function withUser<T extends IUser>(
  Component: React.ComponentType<T>,
  userId: number
) {
  const ComponentWithUser = (props: Record<string, unknown>) => {
    const [user, setUser] = useState<T | null>(null);
    console.log({ user });
    useEffect(() => {
      (async () => {
        const response = await axiosInstance.get<T>(`users/${userId}`);
        setUser(response.data);
      })();
    }, []);

    return <Component {...(props as T)} {...user} />;
  };

  return ComponentWithUser;
}
