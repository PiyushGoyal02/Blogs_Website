import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Homepage from './Components/Homepage';
import About from './Components/About';
import AllBlogs from "./Components/AllBlogs"


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/allblogs' element={<AllBlogs/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
