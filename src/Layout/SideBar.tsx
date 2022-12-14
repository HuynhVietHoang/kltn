import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import {NavLink } from "react-router-dom";
import logo from './../assets/images/logo.png'
import { BsTools, BsArrowBarRight, BsFileEarmarkPerson, BsBarChart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";

import  Cookies  from 'universal-cookie';

export default function SideBar() {

  const cookie = new Cookies()
  return (
    <div className="ml-3">
       <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fas fa-times text-slate-400 xl:hidden"></i>
          <a className="block text-center m-0 text-size-sm whitespace-nowrap text-slate-700" href="javascript" target="_blank">
      <img src={logo} className="inline h-full max-w-full transition-all duration-200 ease-nav-brand max-h-24" alt="main_logo" />
      </a>
      <hr className="h-px mt-0 bg-transparent bg-gradient-horizontal-dark" />
      <Sidebar >
        <Menu className="bg-white">
          {
            <>
              {/* <Routes> */}
              <MenuItem active={window.location.pathname === "/Isurance/"}  icon={<BsTools className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Isurance' />}> Bảo hành sửa chữa</MenuItem>
              <MenuItem icon={<BsArrowBarRight className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Coordinate' />} > Điều phối</MenuItem>
              <MenuItem icon={<BsBarChart className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Statistical' />}> Thống kê</MenuItem>
              <MenuItem icon={<AiOutlineUser className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Personal' />} disabled={false}> Thông tin cá nhân</MenuItem>
              <MenuItem  icon={<AiOutlineUser className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Product' />} disabled={false}> Linh kiện</MenuItem>
              <MenuItem  icon={<AiOutlineUser className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Customer' />} disabled={false}> Khách hàng</MenuItem>
              <MenuItem  icon={<AiOutlineUser className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/NCC' />} disabled={false}>Nhà cung cấp</MenuItem>

              {
                cookie.get('typeUser') !== 'admin' ?
                  null
                  :
                  <MenuItem  icon={<BsFileEarmarkPerson className="bg-mint  border-8 border-mint rounded-3 text-size-4xl " />} className='font-bold text-size-1xl' routerLink={<NavLink to='/Employee' />} disabled={false}> Nhân viên</MenuItem>

              }
            </>
          }
        </Menu>
      </Sidebar>
    </div>
  )
}