import './App.css';
import { BrowserRouter, Routes, Route, NavLink, Outlet, Link } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
      <Outlet />
    </div>
  )
}

function Home() {
  return <h1>This is the homepage</h1>
}

function About() {
  return <h1>This is the aboutpage</h1>
}

function Contact() {
  return <h1>This is the contactpage</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
