import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { dateConverter, resetValue } from '../../../utils/Functions';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelect = ({ state, fastDate, selection, setSelection }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    console.log('date 컴포넌트');

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
    }
  }, [fastDate]);

  const selectDate = date => {
    const dateString = dateConverter(date);

    setStartDate(date);
    setSelection(prev => {
      if (selection.date === dateString) {
        return { ...prev };
      } else {
        resetValue(prev);
        prev.date = dateString;
        return { ...prev };
      }
    });
  };

  return (
    <CalendarContainer>
      <DatePicker
        selected={startDate}
        onChange={selectDate}
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
`;

export default DateSelect;
