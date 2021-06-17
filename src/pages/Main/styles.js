import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-150px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(150px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const AnimationContainerLeft = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const AnimationContainerRight = styled.div`
  animation: ${appearFromRight} 1s;
`;
