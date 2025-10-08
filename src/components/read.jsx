// Import the Movies component which will display a list of movie items
import Movies from "./movies";

// Define the Read component as an arrow function
const Read = () => {

  // Hardcoded array of movie objects (sample data)
  // Each object represents a movie with title, year, IMDb ID, type, and poster
  const data = [
    {
      "Title": "Avengers: Infinity War",
      "Year": "2018",
      "imdbID": "tt4154756",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
      "Title": "Captain America: Civil War",
      "Year": "2016",
      "imdbID": "tt3498820",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
      "Title": "World War Z",
      "Year": "2013",
      "imdbID": "tt0816711",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
  ];

  // JSX returned by the component
  return (
    <div>
      {/* Heading for the Read component */}
      <h1>Hello from read component</h1>

      {/* Render the Movies component and pass the movie data as props */}
      <Movies myMovies={data}></Movies>
    </div>
  );
}

// Export the Read component so it can be imported into App.jsx
export default Read;