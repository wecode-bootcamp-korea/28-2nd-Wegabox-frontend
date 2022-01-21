import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { dateConverter, resetValue } from '../../../utils/Functions';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = ({ state, fastDate, selection, setSelection }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (fastDate) {
      setSelection(prev => {
        const selectedMovie = prev.deactiveMovie;
        resetValue(prev);
        prev.date = fastDate;
        prev.movie = selectedMovie;
        return { ...prev };
      });
      setStartDate(new Date(fastDate));
    } else {
      return null;
    }
  }, [fastDate]);

  const selectDate = date => {
    const dateString = dateConverter(date);

    setStartDate(date);

    if (selection.date !== dateString) {
      setSelection(prev => {
        resetValue(prev);
        prev.date = dateString;
        return { ...prev };
      });
    }
  };

  return (
    <CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={selectDate}
        minDate={new Date()}
        todayButton="오늘"
        inline
      />
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 270px;

  .react-datepicker,
  .react-datepicker__header {
    width: 270px;
    font-size: 1em;
    border: 1px solid ${props => props.theme.wegaboxDarkPurple};
  }

  .react-datepicker__month-container {
    height: 400px;
  }

  .react-datepicker__day {
    margin-top: 1.5em;
  }
  .react-datepicker__day--selected {
    background-color: ${props => props.theme.buttonBlue} !important;
    border-radius: 50%;
  }
  .react-datepicker__header {
    background-color: ${props => props.theme.wegaboxDarkPurple};
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name,
  .react-datepicker__today-button {
    color: white;
  }

  .react-datepicker__today-button {
    background: ${props => props.theme.wegaboxPurple};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: white;
    color: black;
  }
`;

export default DateSelect;
