import React from 'react';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Profile from './pages/Profile/Profile';
import FindTeachers from './pages/FindTeachers/FindTeachers';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import NotFound404 from './pages/NotFound404/NotFound404';
import Test from './pages/Test/Test';
import SecretPage from './pages/SecretPage/SecretPage';
import { RequireAuth } from './components/RequireAuth/RequireAuth.js';
import Logout from './pages/Logout/Logout';
import TeacherId from './pages/FindTeachers/TeacherId/TeacherId';
import Footer from './components/Footer/Footer';
import ForgottenPasswords from './pages/ForgottenPassword/ForgotttenPassword';
import MyTeachers from './pages/MyTeachers/MyTeachers';
import Wallet from './pages/Wallet/Wallet';



export default function App() {
 

  return (

      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgottenpassword' element={<ForgottenPasswords />} />
        <Route path='/' element={<Layout />}>

          <Route path='/logout' element={<Logout />} />

          <Route path='/profile' element={<Profile />} />
          <Route path='/findteachers' element={<FindTeachers />}>
            <Route path=":teacherid" element={<TeacherId />} />
          </Route>
          <Route path='/test' element={<Test />} />
          <Route path='/wallet' element={<Wallet/>} />

          {/* protected route */}
          <Route element={<RequireAuth />}>
            <Route path='/secretpage' element={<SecretPage />} />
          </Route>
          <Route path='/myteachers' element={<MyTeachers />} />
          <Route path='*' element={<NotFound404 />} />

        </Route>
      </Routes>


  );
}
