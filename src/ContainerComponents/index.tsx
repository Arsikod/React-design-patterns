import { AxiosResponse } from 'axios';
import { axiosInstance } from '../api';
import Loader from '../ContainerComponents/Loader';
import TodoCard from '../ContainerComponents/TodoCard';
import { IUser } from '../ContainerComponents/types';
import UserCard from '../ContainerComponents/UseCard';

async function getData<T>(url: string): Promise<AxiosResponse<T>> {
  return axiosInstance.get<T>(url);
}

export default function ContainerComponents() {
  return (
    <>
      <Loader getData={() => getData('/users/3')}>
        <UserCard />
      </Loader>

      <Loader getData={() => getData('/todos/3')}>
        <TodoCard />
      </Loader>
    </>
  );
}
