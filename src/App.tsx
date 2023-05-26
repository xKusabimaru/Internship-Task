import './App.css'
import Course from './components/Course';
import Home from './components/Home';
import Sidebar from './components/Sidebar'
import SignInPage from './components/SignInPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Students from './components/Students';
import Payment from './components/Payment';
import Report from './components/Report';
import Settings from './components/Settings';

function App() {

  return (
    <>
      <BrowserRouter>
      
        <Routes>
        <Route path='/' element={<SignInPage/>}/>
          <Route path='/home' element={<Sidebar><Home/></Sidebar>}/>
          <Route path='/course' element={<Sidebar><Course/></Sidebar>}/>
          <Route path='/students' element={<Sidebar><Students/></Sidebar>}/>
          <Route path='/payment' element={<Sidebar><Payment/></Sidebar>}/>
          <Route path='/report' element={<Sidebar><Report/></Sidebar>}/>
          <Route path='/settings' element={<Sidebar><Settings/></Sidebar>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
