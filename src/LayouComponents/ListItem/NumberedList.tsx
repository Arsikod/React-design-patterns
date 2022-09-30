interface INumberedList<T> {
  items: Array<T>;
  component: React.ElementType;
}

export default function NumberedList<T>({
  items,
  component: Component,
}: INumberedList<T>) {
  return (
    <>
      {items.map((item, index) => (
        <>
          <h3>{index + 1}</h3>
          <Component key={index} {...item} />
        </>
      ))}
    </>
  );
}
