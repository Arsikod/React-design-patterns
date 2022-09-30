import { IUser } from '../ContainerComponents/types';

interface IUserCard {
  user?: IUser;
}

export default function UserCard(props: IUserCard) {
  return (
    <>
      <h3>{props.user?.name}</h3>
      <p>{props.user?.phone}</p>
    </>
  );
}
