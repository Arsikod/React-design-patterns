import { useState } from 'react';
import ControlledForm from '../ControlledUncontrolledComponents/ControlledForm';
import ControlledModal from '../ControlledUncontrolledComponents/ControlledModal';
import UncontrolledForm from '../ControlledUncontrolledComponents/UncontrolledForm';

export default function ControlledUncontrolled() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    </>
  );
}
