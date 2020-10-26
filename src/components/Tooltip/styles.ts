import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 115px;
    background: #ff9000;
    padding: 8px;
    border-radius: 4px;
    font-size: 10px;

    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(20% - 56px);
    left: 50%;
    transform: translateX(-50%);

    color: #312e38;

    &::before {
      content: '';
      border-style: solid;
      border-color: #c00000 transparent;
      border-width: 0px 10px 10px 10px;
      top: -15%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover {
    span {
      opacity: 1;
      visibility: visible;
    }
  }
`;
