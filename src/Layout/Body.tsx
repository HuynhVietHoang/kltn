import { BrowserRouter, Link, Navigate, Route, Router, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Login from './../components/Login';
import InsuranceForm from './../components/InsuranceForm';
import Coordinate from './../components/Coordinate';
import Employee from "../components/Employee";
import Personal from "../components/Personal";
import Statistical from "../components/Statistical";

export default function Body() {
    return (
        <div className='bg-white mx shadow-soft-xl rounded-2 mr-4 min-h-85-screen w-full'>
            <div className='py-2'>
                    <Routes>
                        <Route path="/" element={<Navigate to='/Login'></Navigate>}></Route>
                        <Route path="/SideBar/*" element={<SideBar />}></Route>
                        <Route path="/Login/*" element={<Login />}></Route>
                        <Route path="/Isurance/*" element={<InsuranceForm />}></Route>
                        <Route path="/Coordinate/*" element={<Coordinate />}></Route>
                        <Route path="/Employee/*" element={<Employee />}></Route>
                        <Route path="/Personal/*" element={<Personal />}></Route>
                        <Route path="/Statistical/*" element={<Statistical />}></Route>


                    </Routes>
            </div>
        </div>
    )
}