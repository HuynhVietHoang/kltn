import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Login from './../components/Login';

export default function Body() {
    return (
        <div className='bg-white mx shadow-soft-xl rounded-2 mr-4 min-h-85-screen'>
            <div className='py-2'>
                 <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Navigate to='/Login'></Navigate>}></Route>
                        <Route path="/SideBar/*" element={<SideBar />}></Route>
                        <Route path="/Login/*" element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}