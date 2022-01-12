import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Movie({ movie, pageName }) {
  const navigate = useNavigate();

  const goToTicketingThisMovie = movieId => {
    navigate('/ticketing', { state: { movieId: movieId }, replace: false });
  };

  return (
    <MovieStyle>
      <MovieImageStyle alt={movie.title} src={movie.thumbnail_url} />
      <MovieDescriptionStyle>{movie.description}</MovieDescriptionStyle>
      <MovieInfoStyle pageName={pageName}>
        <MovieTitleStyle>{movie.title}</MovieTitleStyle>
        <MovieReleaseDateStyle>
          개봉일: {movie.release_date}
        </MovieReleaseDateStyle>
      </MovieInfoStyle>
      <MovieButtonStyle
        pageName={pageName}
        onClick={() => goToTicketingThisMovie(movie.movie_id)}
      >
        예매
      </MovieButtonStyle>
    </MovieStyle>
  );
}
const MovieStyle = styled.div`
  font-size: 1.2rem;
  text-align: center;
  position: relative;
`;

const MovieImageStyle = styled.img`
  margin-bottom: 0.5rem;
  width: 240px;
  height: 350px;
  border-radius: 5px;
  object-fit: cover;

  &:hover {
    cursor: pointer;
  }
`;

const MovieDescriptionStyle = styled.div`
  position: absolute;
  top: 0;
  width: 240px;
  height: 350px;
  margin-left: 1.1rem;
  padding: 1.1rem 1.2rem;
  text-align: left;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.whiteColor};
  opacity: 0;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const MovieInfoStyle = styled.div`
  font-size: 1rem;
  color: ${({ theme }) => theme.fontGrey};
  display: ${({ pageName }) => {
    switch (pageName) {
      case 'main':
        return 'none';
      default:
        return 'block';
    }
  }};
`;

const MovieTitleStyle = styled.p`
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const MovieReleaseDateStyle = styled.p`
  margin-bottom: 0.6rem;
`;

const MovieButtonStyle = styled.button`
  width: 240px;
  height: 36px;
  line-height: 36px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${({ theme }) => theme.whiteColor};
  background-color: ${({ theme, pageName }) => {
    switch (pageName) {
      case 'main':
        return theme.buttonBlue;
      default:
        return theme.wegaboxPurple;
    }
  }};
`;
