import styled from 'styled-components';
import Movie from './Movie';

export default function Movies({ movies, pageName }) {
  return (
    <MoviesStyle>
      {movies.map(movie => {
        return <Movie key={movie.movie_id} movie={movie} pageName={pageName} />;
      })}
    </MoviesStyle>
  );
}

const MoviesStyle = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 2rem;
`;
