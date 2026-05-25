function MovieCard({ title, genre, year, image }) {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "center",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h2>{title}</h2>

      <p>
        <strong>Genre:</strong> {genre}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  );
}

export default MovieCard;