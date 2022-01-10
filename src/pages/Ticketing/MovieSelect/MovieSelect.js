import React from 'react';
import styled from 'styled-components';
import Element from '../components/Element';
import Disable from '../components/DisableElement';

const MovieSelect = ({
  selection,
  setSelection,
  allMovieData,
  ableMovieData,
}) => {
  return (
    <OuterContainer>
      <TitleContainer>
        <MovieTab>영화</MovieTab>
        <CurationTab>큐레이션</CurationTab>
      </TitleContainer>
      <MovieListContainer>
        <MovieList>
          {ableMovieData &&
            ableMovieData.map(movie => {
              return (
                <Element
                  keyName="movie"
                  key={movie.id}
                  dataId={movie.id}
                  value={movie.value}
                  selection={selection}
                  setState={setSelection}
                />
              );
            })}
          {allMovieData &&
            allMovieData
              .filter(movie => {
                for (const element of ableMovieData) {
                  if (movie.id === element.id) return false;
                }
                return true;
              })
              .map(movie => {
                return (
                  <Disable
                    key={movie.id}
                    keyName="movie"
                    value={movie.value}
                    dataId={movie.id}
                    selection={selection}
                    setState={setSelection}
                  />
                );
              })}
        </MovieList>
      </MovieListContainer>
    </OuterContainer>
  );
};

const OuterContainer = styled.div`
  width: 270px;
  margin: 10px 0;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0) rgba(102, 102, 102, 0.2);
  background-color: white;
  overflow: hidden;
`;

const MovieListContainer = styled.div`
  height: 90%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.wegaboxPurple};
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  line-height: 35px;
  background-color: red;
`;

const MovieTab = styled.div`
  display: inline-block;
  width: 80%;
  border: 1px solid rgb(85, 85, 85);
  border-bottom: 0;
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.wegaboxPurple};
  background-color: white;
  text-align: center;
`;

const CurationTab = styled(MovieTab.withComponent('div'))`
  border: 0;
  border-bottom: 1px solid rgb(85, 85, 85);
`;

const MovieList = styled.ul`
  width: 50%;
  padding-top: 10px;
  padding-left: 10px;
  border: 1px solid transparent;
`;
export default MovieSelect;
