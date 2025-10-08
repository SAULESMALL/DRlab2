import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './components/read';
import Create from './components/create';
function App() {
   // Example React state (from Vite template, currently unused)
  const [count, setCount] = useState(0)

  return (
    <>
    {/* BrowserRouter enables client-side routing in React */}
      <BrowserRouter>
       {/* Navigation bar built with React Bootstrap */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            {/* App name or logo area */}
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
              {/* Navigation links for routing between pages */}
            <Nav className="me-auto">
               {/* Each Nav.Link points to a different route */}
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// Export App so it can be used in App.jsx
export default App