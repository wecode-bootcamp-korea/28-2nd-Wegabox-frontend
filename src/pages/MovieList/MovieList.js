import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import usePageName from '../../hooks/usePageName';
import Movies from '../../components/Movies/Movies';
import { DEV_LIST_URL, DEV_LIST_URL2 } from '../../config';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SwitchButton from './SwitchButton';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading/Loading';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [totalMovie, setTotalMovie] = useState(0);
  const [offset, setOffset] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { pageName } = usePageName();
  const LIMIT = 8;
  const url = `${DEV_LIST_URL2}?offset=${offset}&limit=${LIMIT}&released=${isChecked}`;
  const [loading, result, fetchData] = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [offset, isChecked]);

  useEffect(() => {
    result?.result &&
      setMovies(prevMovies => [...prevMovies, ...result?.result]);
    setTotalMovie(result?.total_movie?.total_movie);
  }, [result]);

  useEffect(() => {
    const handleShowTopButton = () => {
      if (window.scrollY > 100) setShowTopBtn(true);
      else return setShowTopBtn(false);
    };
    window.addEventListener('scroll', handleShowTopButton);
    return () => {
      window.removeEventListener('scroll', handleShowTopButton);
    };
  }, []);

  const showMoreBtn = movies.length === totalMovie;

  const updateOffset = () => {
    if (!showMoreBtn) {
      setOffset(offset + LIMIT);
    } else return;
  };

  const handleToggleCheckbox = () => {
    resetStates();
    setIsChecked(!isChecked);
  };

  const resetStates = () => {
    setMovies([]);
    setOffset(0);
  };

  const moveToTop = () => {
    scroll.scrollToTop();
  };

  if (loading) return <Loading />;

  return (
    <MovieListStyle>
      <MovieListMainStyle>
        <MovieListH2Style>박스오피스</MovieListH2Style>
        <SwitchButton
          isChecked={isChecked}
          handleToggleCheckbox={handleToggleCheckbox}
        />
        <Movies movies={movies} pageName={pageName} />
        <MovieListButton showMoreBtn={showMoreBtn} onClick={updateOffset}>
          더보기&nbsp;
          <IoIosArrowDown />
        </MovieListButton>
        <MovieListTopButton showTopBtn={showTopBtn} onClick={moveToTop}>
          <IoIosArrowUp />
          <br />
          TOP
        </MovieListTopButton>
      </MovieListMainStyle>
    </MovieListStyle>
  );
}

const MovieListStyle = styled.div`
  scroll-behavior: smooth;
`;

const MovieListMainStyle = styled.main`
  padding-top: 2rem;
  padding-bottom: 5rem;
  text-align: center;
`;

const MovieListH2Style = styled.h2`
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.fontDarkBlack};
`;

const MovieListButton = styled.button`
  width: 300px;
  height: 40px;
  margin: 50px auto 0;
  border: 1px solid #dbdbdb;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.buttonBlue};
  display: ${({ showMoreBtn }) => (showMoreBtn ? 'none' : 'block')};

  :hover {
    border-color: ${({ theme }) => theme.buttonBlue};
  }

  svg {
    vertical-align: text-top;
  }
`;

const MovieListTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  width: 55px;
  height: 55px;
  margin-left: 550px;
  line-height: 1;
  font-size: 1rem;
  border-radius: 50%;
  color: ${({ theme }) => theme.whiteColor};
  background: ${({ theme }) => theme.buttonBlue};
  opacity: ${({ showTopBtn }) => (showTopBtn ? 1 : 0)};
  transition: 0.3s ease-in;
`;
