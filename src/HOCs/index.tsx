import UserCard from '../ContainerComponents/UseCard';
import UserInfoForm from '../HOCs/UserInfoForm';
import { withEditableResource } from '../HOCs/withEditableResource';
import { withUser } from '../HOCs/withUser';

const UserCardWrapper = withUser(UserCard, 5);

const UserInfoFormWrapper = withEditableResource(
  UserInfoForm,
  '/users/1',
  'user'
);

export default function HOComponents() {
  return <UserInfoFormWrapper />;
}
