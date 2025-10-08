// Define the Content component using an arrow function
const Content = () => {

  // JSX returned by the component
  return (
    <div>
      {/* Main heading for the Content component */}
      <h1>Hello from Content Component!</h1>

      {/* Display the current time dynamically using JavaScript's Date object */}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

// Export the Content component so it can be imported and used in App.jsx
export default Content;