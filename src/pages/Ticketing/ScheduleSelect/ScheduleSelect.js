import React from 'react';
import styled from 'styled-components';
import ScheduleElement from './ScheduleElement';

const ScheduleSelect = ({ scheduleList, selection, setSelection }) => {
  return (
    <OuterContainer>
      <TitleContainer>
        <ScheduleTab>상영시간표</ScheduleTab>
      </TitleContainer>
      <InnerContainer>
        <ScheduleList>
          {scheduleList &&
            scheduleList.map(schedule => {
              return (
                <ScheduleElement
                  keyName="schedule"
                  key={schedule.id}
                  dataId={schedule.id}
                  value={schedule.title}
                  startTime={schedule.start_time}
                  endTime={schedule.end_time}
                  selection={selection}
                  setState={setSelection}
                />
              );
            })}
        </ScheduleList>
      </InnerContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 270px;
  margin: 10px 0;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0) rgba(102, 102, 102, 0.2);
  background-color: white;
  overflow-y: auto;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  line-height: 35px;
`;

const ScheduleTab = styled.div`
  display: inline-block;
  width: 100%;
  margin: 0 20px;
  border-bottom: 1px solid rgb(85, 85, 85, 0.2);
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.wegaboxPurple};
  background-color: white;
  text-align: center;
`;

const ScheduleList = styled.ul`
  /* width: 50%; */
  padding-top: 10px;
  padding-left: 15px;
  border: 1px solid transparent;
`;

export default ScheduleSelect;
