import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFilled: boolean;
  isErrored: boolean;
}
export const Container = styled.div<ContainerProps>`
  background: #fff;
  border-radius: 10px;
  border: 2px solid #222;
  padding: 16px;
  width: 100%;
  color: #222;
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
    border: 0;
    color: #fff;
    &::placeholder {
      color: #222;
    }
  }
  svg {
    margin-right: 16px;
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
    color: #fff;
    &::before {
      border-color: #CC0000 transparent;
    }
  }
`;
