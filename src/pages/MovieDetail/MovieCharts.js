import styled from 'styled-components';
import MovieChart from './MovieChart';

export default function Charts({ chartInfo, ticketRate }) {
  return (
    <MovieChartsStyle>
      {chartInfo.map(chart => {
        return (
          <MovieChart key={chart.id} chart={chart} ticketRate={ticketRate} />
        );
      })}
    </MovieChartsStyle>
  );
}

const MovieChartsStyle = styled.div`
  display: flex;
  padding-top: 26px;
  margin-bottom: 30px;
`;
