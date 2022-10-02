import { IUser } from '../ContainerComponents/types';
import { withEditablehUser } from '../HOCs/withEditableUser';

export interface IUserInfoForm {
  user: IUser;
  onChangeUser: (changes: IUser) => void;
  onSaveUser: () => void;
  onResetUser: () => void;
}

export const UserInfoForm = withEditablehUser(
  ({ user, onChangeUser, onSaveUser, onResetUser }: IUserInfoForm) => {}
);
