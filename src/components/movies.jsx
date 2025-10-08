// Import the MovieItem component to display each individual movie
import MovieItem from "./movieitem";

// Define Movies component as an arrow function
// It receives a list of movies through props from the parent (Read component)
const Movies = (props) => {
  
  // Use the map() function to iterate through the array of movies
  // For each movie object, render a MovieItem component
  // Pass each movie object as a prop (myMovie) to MovieItem
  return props.myMovies.map((movie) => {
    return (
      <MovieItem 
        myMovie={movie}        // Pass movie data to MovieItem
        key={movie.imdbID}     // Use imdbID as a unique key for each element
      />
    );
  });
};

// Export Movies component so it can be imported into Read.jsx
export default Movies;