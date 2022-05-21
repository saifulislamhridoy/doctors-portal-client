import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReviw from './Pages/Dashboard/MyReviw';
import History from './Pages/Dashboard/History';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/appointment' element={<RequireAuth><Appointment></Appointment></RequireAuth>}></Route>
       <Route path='/dashboard' element={<RequireAuth><Dashboard/></RequireAuth>}>
         <Route index path='/dashboard' element={<MyAppointment></MyAppointment>}></Route>
         <Route path='/dashboard/reviw' element={<MyReviw></MyReviw>}></Route>
         <Route path='/dashboard/history' element={<History></History>}></Route>
       </Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
     </Routes>
     <ToastContainer />
    </div>
  );
}

export default App;
