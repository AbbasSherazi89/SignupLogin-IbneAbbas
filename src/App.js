import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Layout/Header';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ValidationForm from './Components/Elements/ValidationForm';
import Counter from './Components/Elements/Counter';
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route index path="/" element={<Login/>} />
        <Route index path="/signup" element={<Signup/>} />
        <Route index path='/validation2' element={<ValidationForm/>}/>
        <Route index path='/counter' element={<Counter namep="Abbas" hname="Sherazi"/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
