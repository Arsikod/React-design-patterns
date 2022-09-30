import { IUser } from '../ContainerComponents/types';

export default function UserCard({ name, phone }: IUser) {
  return (
    <>
      <h3>{name}</h3>
      <p>{phone}</p>
    </>
  );
}
