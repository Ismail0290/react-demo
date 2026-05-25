import Button from "./components/Button";
import MovieCard from "./components/MovieCard";

const name = "ismail";
const isStudent = true;
const num = 7;
const hasFees = true;

function App3() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>App</h1>

      <Button />

      <h2>{name.toUpperCase()}</h2>

      <p>{num}</p>

      {isStudent ? (
        <p>Currently Studying</p>
      ) : (
        <p>Working Professional</p>
      )}

      {hasFees && <button>Pay Fees</button>}

      {/* Movie Cards Container */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <MovieCard
          title="Interstellar"
          genre="Sci-Fi"
          year="2014"
          image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
        />

        <MovieCard
          title="Avengers Endgame"
          genre="Action"
          year="2019"
          image="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c"
        />

        <MovieCard
          title="Joker"
          genre="Drama"
          year="2019"
          image="https://images.unsplash.com/photo-1440404653325-ab127d49abc1"
        />
      </div>
    </div>
  );
}

export default App3;