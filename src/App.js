import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Layout/Header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index path="/login" element={<Login/>} />
        <Route index path="/signup" element={<Signup/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
