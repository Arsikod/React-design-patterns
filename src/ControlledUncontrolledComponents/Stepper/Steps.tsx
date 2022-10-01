interface IStep {
  step: string;
  userInfo: Record<string, unknown>;
  goToNext?: (data: Record<string, unknown>) => void;
}
export function Step({ step, goToNext, userInfo }: IStep) {
  return (
    <>
      <h1>Step {step}</h1>
      <button onClick={() => goToNext && goToNext(userInfo)}>Next</button>
    </>
  );
}
