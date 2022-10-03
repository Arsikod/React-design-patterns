type ObjValue = string | number;
type data = ObjValue | Record<string, unknown>;

function isObject(obj: unknown) {
  return typeof obj === 'object' && obj !== null;
}

export default function RecursiveComponent({ data }: { data: data }) {
  if (!isObject(data)) {
    return <li>{data as ObjValue}</li>;
  }
  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
}
