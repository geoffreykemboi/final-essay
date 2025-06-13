import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";

function App() {
  return (
   <div>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Routes>
         <Route path="/" element={< Home/>}/>
      </Routes>
   </div>

  );
}

export default App;
