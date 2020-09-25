import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
  background: #c00000;
  color: #fcfcfc;
  border: 4px double #fcfcfc;
  font-family: 'Press Start 2P', 'sans serif';
  font-size: 12px;
  height: 56px;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  &:active {
    transform: translateY(4px);
  }
  
`;
