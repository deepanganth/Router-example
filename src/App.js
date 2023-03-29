import { Routes, Route, Link } from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import NotFound from "./component/NotFound";


function App() {
  return (
      <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/*" exact element={<NotFound/>} />
        </Routes>
      </>
  );
}

export default App;
