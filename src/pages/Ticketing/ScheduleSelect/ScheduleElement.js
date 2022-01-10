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
    <li>
      <SelectButton type="button" onClick={clickEvent}>
        <span>{value}</span>
        <br />
        <span>
          상영시간: {startTime}~{endTime}
        </span>
      </SelectButton>
    </li>
  );
};

const SelectButton = styled.button`
  margin: 5px 0;
  line-height: 19px;
  text-align: left;

  span:first-child {
    font-size: 15px;
    font-weight: bold;
    color: black;
    font-family: 'NanumBarunGothic';
  }
  span:nth-last-child() {
    font-size: 15px;
    color: grey;
    font-family: 'NanumBarunGothic';
  }
`;

export default ScheduleElement;
