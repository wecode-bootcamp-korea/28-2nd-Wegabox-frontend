import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import usePageName from '../../hooks/usePageName';
import { DEV_MAIN_URL, DEV_MAIN_URL2 } from '../../config';
import Menu from './Menu';
import Movies from '../../components/Movies/Movies';

export default function Main() {
  const [movies, setMovies] = useState([]);
  const [bgImg, setBgImg] = useState('');
  const { pageName } = usePageName();
  const navigate = useNavigate();

  const goToBoxOffice = () => {
    navigate('/movies');
  };

  const goToTicketing = () => {
    navigate('/ticketing');
  };
  useEffect(() => {
    fetch(`${DEV_MAIN_URL2}`)
      .then(res => res.json())
      .then(result => {
        setMovies(result.result);
        setBgImg(result.result[0].thumbnail_url);
      });
    return () => {};
  }, []);

  if (!movies || !bgImg) {
    return <img alt="로딩" src="/images/loading.gif" />;
  }

  return (
    <MainStyle>
      <MainSectionStyle $bgimg={bgImg}>
        <MainButtonStyle onClick={goToBoxOffice}>박스오피스</MainButtonStyle>
        <Movies movies={movies} pageName={pageName} />
        <Menu goToBoxOffice={goToBoxOffice} goToTicketing={goToTicketing} />
      </MainSectionStyle>
    </MainStyle>
  );
}

const MainStyle = styled.main`
  padding-top: 130px;
  text-align: center;
  font-size: 1rem;
`;

const MainButtonStyle = styled.button`
  margin-top: 4rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  color: ${props => props.theme.whiteColor};
`;

const MainSectionStyle = styled.section`
  position: relative;
  height: 70vh;
  background: none;
  overflow: hidden;

  ::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.$bgimg});
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
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
    content: '';
  }
`;
