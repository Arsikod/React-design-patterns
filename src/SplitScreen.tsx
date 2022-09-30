import { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface ISplitScreen {
  children: ReactNode[];
  leftWeight?: number;
  rightWeight?: number;
}

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{ weight: number }>`
  flex: ${[(props) => props.weight]};
`;

export default function SplitScreen(props: ISplitScreen) {
  const { leftWeight = 1, rightWeight = 1 } = props;

  const [left, right] = props.children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>

      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
}
