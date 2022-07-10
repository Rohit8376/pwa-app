import './App.css';
import {Container, Nav, Navbar } from "react-bootstrap";
import Home from './Home';
import Users from './Users';
import About from './Abour';
import { Link, Route, BrowserRouter as Router,Routes  } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
        <Navbar bg="primary" variant="dark"> 
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link> <Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        
        <Routes>
          <Route path='/about' element={<About/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/' element={<Home/>} />
        </Routes>

        {/* <Route  path="/about"><About /> </Route> */}
        {/* <Route component={Users} path="/users"></Route>
        <Route component={Home} path="/"></Route> */}
        </Router>

    </div>


  );
}

export default App;
