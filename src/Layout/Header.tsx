import { Link, useNavigate } from "react-router-dom"

function Header() {
    const navigate =useNavigate()
    const logoutClick = ()=>{
        localStorage.removeItem('accessToken')
        navigate('/Login')
         window.location.reload()
    }
    return (
        <nav className="relative flex flex-wrap items-center justify-between px-0 py-2 mx-6 transition-all shadow-none duration-250 ease-soft-in rounded-2xl lg:flex-nowrap lg:justify-start" navbar-scroll="true">
        <div className="flex items-center justify-between w-full px-4 py-1 mx-auto flex-wrap-inherit">
          <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
            <div className="flex items-center md:ml-auto md:pr-4">
              
            </div>
            <ul className="flex flex-row justify-end pl-0 mb-0 list-none md-max:w-full">
              <li className="flex items-center">
                <div className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-size-sm text-slate-500">
                  <i className="fa fa-user sm:mr-1"></i>
                  <button onClick={logoutClick} className="hidden sm:inline">Log out</button>
                </div>
              </li>
              <li className="flex items-center pl-4 xl:hidden">
                <a href="javascript" className="block p-0 transition-all ease-nav-brand text-size-sm text-slate-500">
                  <div className="w-4.5 overflow-hidden">
                    <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                    <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                    <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
                  </div>
                </a>
              </li>
              <li className="flex items-center px-4">
                <a href="javascript" className="p-0 transition-all text-size-sm ease-nav-brand text-slate-500">
                  <i className="cursor-pointer fa fa-cog"></i>
                  {/* <!-- fixed-plugin-button-nav  --> */}
                </a>
              </li>

              {/* <!-- notifications --> */}

              <li className="relative flex items-center pr-2">
                <p className="hidden transform-dropdown-show"></p>
                <a href="javascript" className="block p-0 transition-all text-size-sm ease-nav-brand text-slate-500" aria-expanded="false">
                  <i className="cursor-pointer fa fa-bell"></i>
                </a>

                <ul className="text-size-sm transform-dropdown before:font-awesome before:leading-default before:duration-350 before:ease-soft lg:shadow-soft-3xl duration-250 min-w-44 before:sm:right-7.5 before:text-5.5 pointer-events-none absolute right-0 top-0 z-50 origin-top list-none rounded-lg border-0 border-solid border-transparent bg-white bg-clip-padding px-2 py-4 text-left text-slate-500 opacity-0 transition-all before:absolute before:right-2 before:left-auto before:top-0 before:z-50 before:inline-block before:font-normal before:text-white before:antialiased before:transition-all before:content-['\f0d8'] sm:-mr-6 lg:absolute lg:right-0 lg:left-auto lg:mt-2 lg:block lg:cursor-pointer">
                  {/* <!-- add show className on dropdown open js --> */}
                  <li className="relative mb-2">
                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg bg-transparent px-4 duration-300 hover:bg-gray-200 hover:text-slate-700 lg:transition-colors" href="javascript">
                      <div className="flex py-1">
                        <div className="my-auto">
                          {/* <img alt="asd" src="./assets/img/team-2.jpg" className="inline-flex items-center justify-center mr-4 text-white text-size-sm h-9 w-9 max-w-none rounded-xl" /> */}
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 font-normal leading-normal text-size-sm"><span className="font-semibold">New message</span> from Laur</h6>
                          <p className="mb-0 leading-tight text-size-xs text-slate-400">
                            <i className="mr-1 fa fa-clock"></i>
                            13 minutes ago
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="relative mb-2">
                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript">
                      <div className="flex py-1">
                        <div className="my-auto">
                          {/* <img src={require("assets/images/small-logos/logo-spotify.svg")} alt="ss" className="inline-flex items-center justify-center mr-4 text-white text-size-sm bg-gradient-dark-gray h-9 w-9 max-w-none rounded-xl" /> */}
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 font-normal leading-normal text-size-sm"><span className="font-semibold">New album</span> by Travis Scott</h6>
                          <p className="mb-0 leading-tight text-size-xs text-slate-400">
                            <i className="mr-1 fa fa-clock"></i>
                            1 day
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>

                  <li className="relative">
                    <a className="ease-soft py-1.2 clear-both block w-full whitespace-nowrap rounded-lg px-4 transition-colors duration-300 hover:bg-gray-200 hover:text-slate-700" href="javascript">
                      <div className="flex py-1">
                        <div className="inline-flex items-center justify-center my-auto mr-4 text-white transition-all duration-200 ease-nav-brand text-size-sm bg-gradient-slate h-9 w-9 rounded-xl">
                          <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <title>credit-card</title>
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                              <g transform="translate(-2169.000000, -745.000000)" fill="#FFFFFF" fillRule="nonzero">
                                <g transform="translate(1716.000000, 291.000000)">
                                  <g transform="translate(453.000000, 454.000000)">
                                    <path className="color-background" d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z" opacity="0.593633743"></path>
                                    <path className="color-background" d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"></path>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-1 font-normal leading-normal text-size-sm">Payment successfully completed</h6>
                          <p className="mb-0 leading-tight text-size-xs text-slate-400">
                            <i className="mr-1 fa fa-clock"></i>
                            2 days
                          </p>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
export default Header