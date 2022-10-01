import UserCard from '../ContainerComponents/UseCard';
import { withUser } from '../HOCs/withUser';

const UserCardWrapper = withUser(UserCard, 5);

export default function HOComponents() {
  return <UserCardWrapper />;
}
