import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import logo from './../assets/images/logo.png'
import { BsTools, BsArrowBarRight, BsFileEarmarkPerson, BsBarChart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useState } from "react";

export default function SideBar() {
  localStorage.setItem('typeUser', 'admin')
  const [activeState,setActiveState] = useState(true)
  const userType:any = localStorage.getItem('jtw')
  // console.log(Object.values(userType))
  return (
    // <BrowserRouter>
      <div className="ml-3">
        <img src={logo} className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-24" alt="main_logo" />
        <hr className="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
        <Sidebar>
          <Menu className="bg-white">
            {
              <>
              {/* <Routes> */}
                <MenuItem icon={<BsTools className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Isurance' />}> Bảo hành sửa chữa</MenuItem>
                <MenuItem icon={<BsArrowBarRight className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Coordinate' />} > Điều phối</MenuItem>
                <MenuItem icon={<BsBarChart className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Statistical' />}> Thống kê</MenuItem>
                <MenuItem icon={<AiOutlineUser className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Personal' />} disabled={false}> Thông tin cá nhân</MenuItem>
                <MenuItem icon={<BsFileEarmarkPerson className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Employee' />} disabled={false}> Nhân viên</MenuItem>
                {/* </Routes> */}
              </>
            }
          </Menu>
        </Sidebar>
      </div>
    // </BrowserRouter>
  )
}