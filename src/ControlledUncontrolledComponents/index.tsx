import { useState } from 'react';
import ControlledForm from '../ControlledUncontrolledComponents/ControlledForm';
import ControlledModal from '../ControlledUncontrolledComponents/ControlledModal';
import {
  Step,
  StepOne,
  StepThree,
  StepTwo,
} from '../ControlledUncontrolledComponents/Steps';
import UncontrolledForm from '../ControlledUncontrolledComponents/UncontrolledForm';
import UncontrolledStepper from '../ControlledUncontrolledComponents/UncontrolledStepper';

export default function ControlledUncontrolled() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleFinish(data: Record<string, unknown>) {
    console.log(data);
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

      <UncontrolledStepper onFinish={handleFinish}>
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
      </UncontrolledStepper>
    </>
  );
}
