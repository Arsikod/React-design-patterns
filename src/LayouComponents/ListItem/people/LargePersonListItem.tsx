import { Person } from '../types';

export default function LargePersonListItem({
  name,
  age,
  hairColor,
  hobbies,
}: Person) {
  return (
    <>
      <h3>Name: {name}</h3>
      <p>Age: {age} years old</p>
      <p> Hair Color: {hairColor} </p>
      <h3>Hobbies: </h3>
      <ul>
        {hobbies?.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>
    </>
  );
}
