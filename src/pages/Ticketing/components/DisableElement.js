import React from 'react';
import styled from 'styled-components';
import { SelectButton } from './SelectButton';

const Disable = ({ keyName, value, dataId, setState }) => {
  const clickEvent = () => {
    if (keyName === 'movie') {
      setState(prev => {
        prev.deactiveMovie = dataId;
        return { ...prev };
      });
    }
  };

  return (
    <li>
      <DisableButton type="button" onClick={clickEvent}>
        <span>{value}</span>
      </DisableButton>
    </li>
  );
};

const DisableButton = styled(SelectButton)`
  span {
    font-weight: normal;
    color: ${props => props.theme.fontGrey};
  }
`;
export default Disable;
