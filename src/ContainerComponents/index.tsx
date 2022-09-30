import Loader from '../ContainerComponents/Loader';
import UserCard from '../ContainerComponents/UseCard';

export default function ContainerComponents() {
  return (
    <>
      <Loader url="users/1">
        <UserCard />
      </Loader>
    </>
  );
}
