import Body from "./Body"
import SideBar from './SideBar';

function Layout(){
    return (
        <div className="h-screen m-0 font-sans antialiased font-normal text-size-base leading-default bg-gray-50 text-slate-500 section">
            {/* { */}
                {/* exceptionRoute.includes(location.pathname.toString().toLowerCase()) ? */}
                    {/* <Body></Body>  */}
                    <>
                        <SideBar></SideBar>
                        {/* Right element */}
                        <div className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
                            {/* <HeaderAdmin></HeaderAdmin> */}
                            <Body></Body>
                            {/* <FooterAdmin></FooterAdmin> */}
                        </div>
                    </>
             {/* } */}
        </div>
    )
}
export default Layout