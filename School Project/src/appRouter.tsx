import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Dashboard from './Dashboard'


//import components
import Login from './Login'
import Manager from './Manager'
import ManagerSecurity from './security/ManagerSecurity'
import TeacherSecurity from './security/TeacherSecurity'
import Teacher from './Teacher'

export const routes =

    <BrowserRouter>
        <ToastContainer />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/manager' element={<ManagerSecurity component={<Manager/>}/>} />
            <Route path='/teacher' element={<TeacherSecurity component={<Teacher/>}/>} />
        </Routes>
    </BrowserRouter>