import { ReactNode } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

interface IControlledModal {
  shouldShow: boolean;
  onClose: () => void;
  children: ReactNode | Array<ReactNode>;
}

export default function ControlledModal({
  shouldShow,
  onClose,
  children,
}: IControlledModal) {
  return shouldShow ? (
    <ModalBackground onClick={onClose}>
      <ModalBody onClick={(event) => event.stopPropagation()}>
        <button onClick={onClose}>X</button>
        {children}
      </ModalBody>
    </ModalBackground>
  ) : null;
}
