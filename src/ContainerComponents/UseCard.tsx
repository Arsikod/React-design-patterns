import { IUser } from '../ContainerComponents/types';

export default function UserCard(props: Partial<IUser>) {
  return (
    <>
      <h3>{props?.name}</h3>
      <p>{props?.phone}</p>
    </>
  );
}
