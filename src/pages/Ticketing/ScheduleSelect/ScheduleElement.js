import React from 'react';
import styled from 'styled-components';

const ScheduleElement = ({
  keyName,
  value,
  startTime,
  endTime,
  dataId,
  setState,
}) => {
  const clickEvent = () => {
    setState(prev => {
      prev[keyName] = dataId;
      return { ...prev };
    });
  };

  return (
    <ListElement>
      <SelectButton type="button" onClick={clickEvent}>
        <span>{value}</span>
        <br />
        <span>
          상영시간: {startTime}~{endTime}
        </span>
      </SelectButton>
    </ListElement>
  );
};

const ListElement = styled.li`
  position: relative;
  z-index: 6;
`;

const SelectButton = styled.button`
  margin: 5px 0;
  padding: 5px;
  line-height: 19px;
  text-align: left;
  background: none;
  transition: color 0.4s linear;
  z-index: 0;

  &:hover {
    color: white;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.buttonBlue};
    border-radius: 4px;
    z-index: -1;
    transition: transform 0.5s;
    transition-timing-function: cubic-bezier(0.5, 1.6, 0.4, 0.7);
    transform: scaleX(0);
    transform-origin: 0;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  span:first-child {
    font-size: 15px;
    font-weight: bold;
    /* color: black; */
    font-family: 'NanumBarunGothic';
  }
  span:nth-last-child() {
    font-size: 15px;
    /* color: grey; */
    font-family: 'NanumBarunGothic';
  }
`;

export default ScheduleElement;
