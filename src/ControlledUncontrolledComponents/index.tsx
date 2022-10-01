import { useState } from 'react';
import ControlledForm from '../ControlledUncontrolledComponents/Form/ControlledForm';
import UncontrolledForm from '../ControlledUncontrolledComponents/Form/UncontrolledForm';
import ControlledModal from '../ControlledUncontrolledComponents/Modal/ControlledModal';
import ControlledStepper from '../ControlledUncontrolledComponents/Stepper/ControlledStepper';
import { Step } from '../ControlledUncontrolledComponents/Stepper/Steps';

export default function ControlledUncontrolled() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState<Record<string, unknown>>();
  const [currentIndex, setCurrentIndex] = useState(0);

  function onNext(stepData: Record<string, unknown>) {
    const updatedData = {
      ...formData,
      ...stepData,
    };
    setFormData(updatedData);

    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
  }

  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <ControlledModal
        shouldShow={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        I am controlled
      </ControlledModal>

      <button onClick={() => setIsModalOpen(!isModalOpen)}>toggle modal</button>

      <br />

      <ControlledStepper currentIndex={currentIndex} onNext={onNext}>
        <Step
          step="One"
          userInfo={{
            name: 'John',
          }}
        />
        <Step
          step="Two"
          userInfo={{
            age: 44,
          }}
        />
        <Step
          step="Three"
          userInfo={{
            job: '.net dev',
          }}
        />
      </ControlledStepper>
    </>
  );
}
