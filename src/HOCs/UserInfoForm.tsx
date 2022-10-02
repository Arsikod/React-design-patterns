import { IUser } from '../ContainerComponents/types';

export interface IUserInfoForm {
  user: IUser;
  onChangeUser: (changes: IUser) => void;
  onSaveUser: () => void;
  onResetUser: () => void;
}

export default function UserInfoForm(props: IUserInfoForm) {
  const { user, onChangeUser, onSaveUser, onResetUser } = props;

  return user ? (
    <form>
      <label>
        Name:
        <input
          value={user.name}
          onChange={(e) => onChangeUser({ ...user, name: e.target.value })}
        />
      </label>

      <label>
        UserName:
        <input
          value={user.username}
          onChange={(e) => onChangeUser({ ...user, username: e.target.value })}
        />
      </label>

      <button onClick={onResetUser}>reset</button>
      <button onClick={onSaveUser}>save changes</button>
    </form>
  ) : (
    <p>...loading</p>
  );
}
