import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DateSelect from './DateSelect/DateSelect';
import MovieSelect from './MovieSelect/MovieSelect';
import RegionSelect from './TheaterSelect/RegionSelect';
import ScheduleSelect from './ScheduleSelect/ScheduleSelect';
import { dateConverter, makeQueryString } from '../../utils/Functions';
import styled from 'styled-components';

const Ticketing = () => {
  const { state } = useLocation();
  const [allData, setAllData] = useState({});
  const [selection, setSelection] = useState({
    date: dateConverter(new Date()),
    movie: '',
    region: '',
    theater: '',
    schedule: '',
    deactiveMovie: state ? state.movie_id : '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (selection.schedule) {
      fetch(`https://12d7-211-106-114-186.ngrok.io/ticketings`, {
        method: 'POST',
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.4YEzZNRcwdhQwufQjjNUcaM5z4s6SSEXooJ6N8SvVsY',
        },
        body: JSON.stringify({ schedule_id: `${selection.schedule}` }),
      })
        .then(res => res.json())
        .then(result => {
          alert(result.message);
          navigate('/');
        });
    } else {
      fetch(
        `https://12d7-211-106-114-186.ngrok.io/ticketings${location.search}`
      )
        .then(response => response.json())
        .then(result => {
          setAllData(result);
        });
    }
  }, [location.search]);

  useEffect(() => {
    const queryUrl = makeQueryString(selection);
    navigate(queryUrl);
  }, [selection]);

  return (
    <TicketingContainer>
      <Title>빠른 예매</Title>
      <SelectContainer>
        <DateSelect
          selection={selection}
          setSelection={setSelection}
          state={state}
          fastDate={allData.fast_date}
        />
        <MovieSelect
          allMovieData={allData.all_movies_list}
          ableMovieData={allData.able_movies_list}
          setSelection={setSelection}
          selection={selection}
        />
        <RegionSelect
          allRegionData={allData.all_regions_list}
          ableRegionData={allData.able_regions_list}
          allTheaterData={allData.all_theaters_list}
          ableTheaterData={allData.able_theaters_list}
          selection={selection}
          setSelection={setSelection}
        />
        <ScheduleSelect
          scheduleList={allData.schedules_list}
          selection={selection}
          setSelection={setSelection}
        />
      </SelectContainer>
    </TicketingContainer>
  );
};

const TicketingContainer = styled.div`
  margin: auto;
  margin-top: 5vh;
  margin-bottom: 20vh;
  width: 1300px;
  height: 570px;
  /* border: 1px solid red; */
`;

const Title = styled.span`
  display: inline-block;
  width: 100%;
  height: 80px;
  line-height: 80px;
  padding-left: 10px;
  margin-bottom: 25px;
  font-size: 50px;
  color: ${props => props.theme.wegaboxDarkPurple};
`;

const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  width: 100%;
  height: 80%;
  border: 3px solid ${props => props.theme.wegaboxDarkPurple};
`;

export default Ticketing;
