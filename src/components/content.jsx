// Define Content component as an arrow function
const Content = ()=>{

   return (
    <div>
          {/* Main heading */}
      <h1>Hello from content componetns</h1>
       {/* Display current time using JavaScript Date object */}
       <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
// Export Content so it can be imported in App.jsx
export default Content;
