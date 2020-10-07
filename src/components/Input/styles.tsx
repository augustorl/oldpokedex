import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #fcfcfc;
  border: 4px double #000;
  padding: 12px;
  width: 100%;
  color: #222;
  font-size: 12px;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 8px;
  }
  ${(props) =>
    props.isFilled &&
    css`
      color: #CC0000;
    `}
  ${(props) =>
    props.isFilled &&
    css`
      color:#CC0000;
    `}
  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fcfcfc;
    &::placeholder {
      color: #000;
    }
  }
  svg {
    margin-left: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 20px;
  svg {
    margin: 0;
  }
  span {
    background: #CC0000;
    color: #fcfcfc;
    &::before {
      border-color: #CC0000 transparent;
    }
  }
`;
