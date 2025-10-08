// Import the Card component from React Bootstrap
import Card from 'react-bootstrap/Card';

// Define MovieItem component as an arrow function
// It receives data through props from the parent component (Movies)
const MovieItem = (props) => {
  return (
    <div>
      {/* Bootstrap Card to display movie info */}
      <Card className="text-center">

        {/* Card Body contains title and poster image */}
        <Card.Body>
          {/* Display the movie title passed via props */}
          <Card.Title>{props.myMovie.Title}</Card.Title>

          {/* Display the movie poster image */}
          <img src={props.myMovie.Poster} alt={props.myMovie.Title} />
        </Card.Body>

        {/* Card Footer displays the movie release year */}
        <Card.Footer className="text-muted">
          {props.myMovie.Year}
        </Card.Footer>

      </Card>
    </div>
  );
}