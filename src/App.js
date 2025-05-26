import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Homepage from './Components/Homepage';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
