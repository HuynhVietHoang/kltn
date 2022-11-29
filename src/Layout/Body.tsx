import { BrowserRouter, Link, Navigate, Route, Router, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Login from './../components/Login';
import InsuranceForm from './../components/InsuranceForm';
import Coordinate from './../components/Coordinate';
import Employee from "../components/Employee";
import Personal from "../components/Personal";
import Statistical from "../components/Statistical";
import Layout from "./Layout";
import { render } from '@testing-library/react';

export default function Body() {

    return (
        <div className='bg-white mx shadow-soft-xl rounded-2 mr-4 min-h-85-screen w-full'>
            <div className='py-2'>
                {
                    localStorage.getItem('accessToken') ?
                        <Routes>
                            <Route path="/*" element={<Navigate to='/Isurance'></Navigate>}></Route>
                            <Route path="/SideBar/*" element={<SideBar />}></Route>
                            <Route path="/Login/*" element={<Navigate to='/Isurance'></Navigate>}></Route>
                            <Route path="/Isurance/*" element={<InsuranceForm />}></Route>
                            <Route path="/Coordinate/*" element={<Coordinate />}></Route>
                            {
                                localStorage.getItem('typeUser') === 'admin' ?
                                    <Route path="/Employee/*" element={<Employee />} ></Route> :
                                    <Route path="/Employee/*" element={<Navigate to='/Isurance'></Navigate>} ></Route>
                            }
                            <Route path="/Personal/*" element={<Personal />}></Route>
                            <Route path="/Statistical/*" element={<Statistical />}></Route>
                        </Routes>
                        :
                        <Routes>
                            <Route path="/*" element={<Navigate to='/Login'></Navigate>}></Route>
                            <Route path="/Login/*" element={<Login />}></Route>
                        </Routes>

                }
            </div>
        </div>
    )
}