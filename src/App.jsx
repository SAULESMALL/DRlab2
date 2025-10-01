import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Import custom components
import Content from './components/content';
import Header from './components/header';
import Footer from './components/footer';
// Import Bootstrap styling and components
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Import React Router for client-side routing
import {BrowserRouter,Routes,Route} from 'react-router-dom';
function App() {
   // Example React state (from Vite template, currently unused)
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
             <Routes>
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Header></Header>}></Route>
          <Route path='/create' element={<Footer></Footer>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
// Export App so it can be used in App.jsx
export default App