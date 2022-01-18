import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import usePageName from '../../hooks/usePageName';
import { DEV_DETAIL_URL } from '../../config';
import Loading from '../../components/Loading/Loading';
import Movie from '../../components/Movies/Movie';
import MovieCharts from './MovieCharts';

export default function MovieDetail() {
  const [chartInfo, setChartInfo] = useState();
  const { state } = useLocation();
  const { pageName } = usePageName();
  const [loading, result, fetchData] = useFetch(`${DEV_DETAIL_URL}`);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setChartInfo(result?.result);
  }, [result]);

  if (loading || !result?.result) return <Loading />;

  return (
    <MovieDetailStyle>
      <MovieDetailSection bgimg={state.movie.thumbnail_url}>
        <MovieDetailSectionWrapper>
          <MovieDetailInfo>
            <MovieDetailH2>{state.movie.title}</MovieDetailH2>
            <MovieDetailDescription>
              {state.movie.description}
            </MovieDetailDescription>
          </MovieDetailInfo>
          <MovieDetailCard>
            <Movie movie={state.movie} pageName={pageName} />
          </MovieDetailCard>
        </MovieDetailSectionWrapper>
      </MovieDetailSection>
      <MovieDetailChartSection>
        <MovieCharts
          chartInfo={chartInfo}
          ticketRate={state.movie.ticket_rate}
        />
      </MovieDetailChartSection>
    </MovieDetailStyle>
  );
}

const MovieDetailStyle = styled.main``;

const MovieDetailSection = styled.section`
  position: relative;
  margin: 0;
  height: 50vh;
  padding-top: 50px;
  background: none;
  overflow: hidden;
  color: ${({ theme }) => theme.whiteColor};

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background-image: url(${({ bgimg }) => bgimg});
    background-repeat: no-repeat;
    background-size: cover;
    transform: scale(1.1);
    filter: blur(10px);
    -webkit-filter: blur(10px);
    content: '';
  }

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
    content: '';
  }
`;

const MovieDetailSectionWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const MovieDetailInfo = styled.div`
  max-width: 340px;
`;

const MovieDetailH2 = styled.h1`
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 2.2rem;
  font-weight: 600;
`;

const MovieDetailDescription = styled.div`
  line-height: 1.8;
  font-size: 1.1rem;
`;

const MovieDetailCard = styled.div`
  width: 240px;
`;

const MovieDetailChartSection = styled.section`
  max-width: 1100px;
  margin: 0 auto;
`;
