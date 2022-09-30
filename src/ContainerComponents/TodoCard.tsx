import { ITodo } from '../ContainerComponents/types';

export default function TodoCard(props?: ITodo) {
  return (
    <>
      <h3>{props?.title}</h3>
      <p>{props?.id}</p>
    </>
  );
}
