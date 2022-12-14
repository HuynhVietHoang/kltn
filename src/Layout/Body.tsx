import {  Navigate, Route,  Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Login from './../components/Login';
import InsuranceForm from './../components/InsuranceForm';
import Coordinate from './../components/Coordinate';
import Employee from "../components/Employee";
import Personal from "../components/Personal";
import Statistical from "../components/Statistical";

import ProductManager from './../components/ProductManager';
import Cookies from 'universal-cookie';
import Customer from './../components/Customer';
import NCC from './../components/NCC';

export default function Body() {
const cookie = new Cookies()
    return (
        <div className='bg-white mx shadow-soft-xl rounded-2 mr-4 min-h-85-screen w-full'>
            <div className='py-2'>
                {
                    cookie.get('accessToken') ?
                        <Routes>
                            <Route path="/*" element={<Navigate to='/Isurance'></Navigate>}></Route>
                            <Route path="/SideBar/*" element={<SideBar />}></Route>
                            <Route path="/Login/*" element={<Navigate to='/Isurance'></Navigate>}></Route>
                            <Route path="/Isurance/*" element={<InsuranceForm />}></Route>
                            <Route path="/Customer/*" element={<Customer />}></Route>
                            <Route path="/Coordinate/*" element={<Coordinate />}></Route>
                            <Route path="/Product/*" element={<ProductManager />}></Route>
                            <Route path="/NCC/*" element={<NCC />}></Route>
                            <Route path="/Personal/*" element={<Personal />}></Route>
                            <Route path="/Statistical/*" element={<Statistical />}></Route>
                            {
                                cookie.get('typeUser') === 'admin' ?
                                    <Route path="/Employee/*" element={<Employee />} ></Route> :
                                    <Route path="/Employee/*" element={<Navigate to='/Isurance'></Navigate>} ></Route>
                            }

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