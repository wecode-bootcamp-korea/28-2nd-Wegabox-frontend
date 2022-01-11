import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Movie({ movie, pageName }) {
  const navigate = useNavigate();

  const goToTicketingThisMovie = movieId => {
    navigate('/ticketing', { state: { movieId: movieId }, replace: false });
  };

  return (
    <MovieStyle>
      <img alt={movie.title} src={movie.thumbnail_url} />
      <MovieDescriptionStyle className="description">
        {movie.description}
      </MovieDescriptionStyle>
      <MovieInfoStyle $pageName={pageName}>
        <MovieTitleStyle>{movie.title}</MovieTitleStyle>
        <MovieReleaseDateStyle>
          개봉일: {movie.release_date}
        </MovieReleaseDateStyle>
      </MovieInfoStyle>
      <MovieButtonStyle
        $pageName={pageName}
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

  img {
    margin-bottom: 0.5rem;
    width: 240px;
    height: 350px;
    border-radius: 5px;
    object-fit: cover;
    position: relative;

    &:hover {
      cursor: pointer;
    }
  }
`;

const MovieDescriptionStyle = styled.div`
  position: absolute;
  top: 7.95rem;
  width: 240px;
  height: 350px;
  margin-left: 1.1rem;
  padding: 1.1rem 1.2rem;
  text-align: left;
  border-radius: 5px;
  font-size: 1rem;
  line-height: 1.5;
  background-color: rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.whiteColor};
  opacity: 0;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const MovieReleaseDateStyle = styled.p`
  margin-bottom: 0.4rem;
`;

const MovieInfoStyle = styled.div`
  font-size: 1rem;
  color: ${props => props.theme.fontGrey};
  display: ${props => {
    switch (props.$pageName) {
      case 'main':
        return 'none';
      default:
        return 'block';
    }
  }};
`;

const MovieTitleStyle = styled.p`
  margin-bottom: 0.4rem;
  font-size: 1.2rem;
`;

const MovieButtonStyle = styled.button`
  width: 240px;
  height: 36px;
  line-height: 36px;
  font-size: 0.9rem;
  border-radius: 5px;
  color: ${props => props.theme.whiteColor};
  background-color: ${props => {
    switch (props.$pageName) {
      case 'main':
        return props.theme.buttonBlue;
      default:
        return props.theme.wegaboxPurple;
    }
  }};
`;
