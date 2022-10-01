import React from 'react';
import { Children, ReactNode, useState } from 'react';

interface IControlledStepper {
  children: ReactNode | ReactNode[];
  currentIndex: number;
  onNext: (data: Record<string, unknown>) => void;
}

export default function ControlledStepper({
  children,
  currentIndex,
  onNext,
}: IControlledStepper) {
  function goToNext(stepData: Record<string, unknown>) {
    onNext(stepData);
  }

  const currentChild = Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return <> currentChild </>;
}
