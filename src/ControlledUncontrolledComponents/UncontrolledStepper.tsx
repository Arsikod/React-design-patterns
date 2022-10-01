import React, { ReactChild } from 'react';
import { Children, ReactNode, useState } from 'react';

interface IUncontrolledStepper {
  onFinish: (data: Record<string, unknown>) => void;
  children: ReactNode | ReactNode[];
}

export default function UncontrolledStepper({
  children,
  onFinish,
}: IUncontrolledStepper) {
  const [formData, setFormData] = useState<Record<string, unknown>>();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentChild = Children.toArray(children)[currentIndex];

  function goToNext(stepData: Record<string, unknown>) {
    const nextIndex = currentIndex + 1;

    const updatedData = {
      ...formData,
      ...stepData,
    };

    console.log({ updatedData });

    if (nextIndex < React.Children.count(children)) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(updatedData);
    }
  }

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return <> currentChild </>;
}
