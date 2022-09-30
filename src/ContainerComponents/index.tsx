import Loader from '../ContainerComponents/Loader';
import TodoCard from '../ContainerComponents/TodoCard';
import UserCard from '../ContainerComponents/UseCard';

export default function ContainerComponents() {
  return (
    <>
      <Loader url="users/1">
        <UserCard />
      </Loader>

      <Loader url="todos/1">
        <TodoCard />
      </Loader>
    </>
  );
}
