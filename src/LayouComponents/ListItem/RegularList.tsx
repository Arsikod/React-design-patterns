interface IRegularList<T> {
  items: Array<T>;
  component: React.ElementType;
}

export default function RegularList<T>({
  items,
  component: Component,
}: IRegularList<T>) {
  return (
    <>
      {items.map((item, index) => (
        <Component key={index} {...item} />
      ))}
    </>
  );
}
