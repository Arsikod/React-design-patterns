import { FormEvent, useRef } from 'react';

export default function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const ageRef = useRef<HTMLInputElement | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(nameRef.current?.value);
    console.log(ageRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameRef} />
      <input type="number" name="age" placeholder="Age" ref={ageRef} />
      <input type="submit" value="Submit" />
    </form>
  );
}
