import React from 'react';
import styled from 'styled-components';

const Element = ({ keyName, value, dataId, selection, setState }) => {
  const clickEvent = () => {
    setState(prev => {
      switch (dataId) {
        case prev[keyName]:
          prev[keyName] = '';
          break;
        default:
          prev[keyName] = dataId;
      }
      return { ...prev };
    });
  };

  return (
    <li>
      {selection[keyName] === dataId ? (
        <SelectedButton
          keyName={keyName}
          dataId={dataId}
          selection={selection}
          type="button"
          onClick={clickEvent}
        >
          {value}
        </SelectedButton>
      ) : (
        <NoneSelectedButton
          keyName={keyName}
          dataId={dataId}
          selection={selection}
          type="button"
          onClick={clickEvent}
        >
          {value}
        </NoneSelectedButton>
      )}
    </li>
  );
};

const SelectedButton = styled.div`
  margin: 5px 0;
  line-height: 19px;
  text-align: left;
  padding: 5px 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  font-family: 'NanumBarunGothic';
  background: none;
  position: relative;
  color: white;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: ${props => props.theme.buttonBlue};
    z-index: -1;
  }
`;

const NoneSelectedButton = styled(SelectedButton)`
  color: black;
  transition: color 0.4s linear;
  z-index: 1;

  &:hover {
    color: white;
  }

  &::before {
    content: '';
    transition: transform 0.5s;
    transform-origin: 0;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
  }
  &:hover::before {
    transform: scaleX(1);
  }
`;
export default Element;
