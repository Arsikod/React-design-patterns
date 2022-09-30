import { Person } from '../types';

export default function SmallPersonListItem({ name, age }: Person) {
  return (
    <p>
      Name: {name}, Age: {age} years old
    </p>
  );
}
