export default function Movie({ movie }) {
  return (
    <div>
      <img alt={movie.title} src={movie.thumbnail_url} />
    </div>
  );
}
