import { useEffect, useState, useCallback } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';
import usePageName from '../../hooks/usePageName';
import Movies from '../../components/Movies/Movies';
import { DEV_LIST_URL, DEV_LIST_URL2 } from '../../config';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function MovieList() {
  const [movies, setMovies] = useState([]);
  const [totalMovieCnt, setTotalMovieCnt] = useState(0);
  const [offset, setOffset] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { pageName } = usePageName();
  const LIMIT = 4;

  useEffect(() => {
    fetch(`${DEV_LIST_URL}?offset=${offset}&limit=${LIMIT}`)
      .then(res => res.json())
      .then(result => {
        setMovies(prevMovies => [...prevMovies, ...result.result]);
        setTotalMovieCnt(result.total_movie.total_movie);
      });
    const watch = () => {
      window.addEventListener('scroll', handleShowTopButton);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleShowTopButton);
    };
  }, [offset]);

  const showMoreBtn = movies.length === totalMovieCnt;

  const updateOffset = useCallback(() => {
    if (!showMoreBtn) setOffset(offset + LIMIT);
    else return;
  }, [offset, showMoreBtn]);

  const handleShowTopButton = () => {
    if (window.scrollY > 100) setShowTopBtn(true);
    else return setShowTopBtn(false);
  };

  const moveToTop = () => {
    scroll.scrollToTop();
  };

  if (!movies) {
    return <img alt="로딩" src="/images/loading.gif" />;
  }

  return (
    <MovieListStyle>
      <MovieListMainStyle>
        <MovieListH2Style>박스오피스</MovieListH2Style>
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
  padding-top: 130px;
  scroll-behavior: smooth;
`;

const MovieListMainStyle = styled.main`
  padding-top: 2rem;
  padding-bottom: 5rem;
  text-align: center;
`;

const MovieListH2Style = styled.h2`
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
