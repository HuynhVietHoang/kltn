import Body from "./Body"
import SideBar from './SideBar';
import Header from './Header';
import { screen } from '@testing-library/react';
import Footer from './Footer';
import Cookies from "universal-cookie";

function Layout(){
    const cookie = new Cookies()
    
    return (
        <div className="h-screen m-0 font-sans antialiased font-normal text-size-base leading-default bg-gray-50 text-slate-500 section">
            {
              
                cookie.get('accessToken')?                    
                    <>
                    <div className="flex">
                        <SideBar></SideBar>
                        {/* Right element */}
                        <div className="w-full ml-5">
                            <Header></Header>
                            <Body></Body>
                            <Footer></Footer>
                        </div>                       
                    </div>                   
                    </>:<Body></Body> 
            }
        </div>
    )
}
export default Layout