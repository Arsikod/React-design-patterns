import { useEffect, useState } from 'react';
import { axiosInstance } from '../api';
import { IUser } from '../ContainerComponents/types';
import { IUserInfoForm } from '../HOCs/UserInfoForm';

export function withEditablehUser<IUserInfoForm>(
  Component: React.ComponentType<IUserInfoForm>,
  userId: number
) {
  const ComponentWithUser = (props: Record<string, unknown>) => {
    const [originalUser, setOriginalUser] = useState<IUser | null>(null);
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
      (async () => {
        const response = await axiosInstance.get<IUser>(`users/${userId}`);
        setOriginalUser(response.data);
        setUser(response.data);
      })();
    }, []);

    function onChangeUser(changes: IUser) {
      setUser({ ...user, ...changes });
    }

    async function onSaveUser() {
      const response = await axiosInstance.post(`users/${userId}`, { user });
      setOriginalUser(response.data);
      setUser(response.data);
    }

    function onResetUser() {
      setUser(originalUser);
    }

    return (
      <Component
        {...(props as IUserInfoForm)}
        user={user}
        onChangeUser={onChangeUser}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    );
  };

  return ComponentWithUser;
}
