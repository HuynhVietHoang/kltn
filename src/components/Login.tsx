
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../firebase';
import logo from './../assets/images/logo.png'

import { useReducer, useState } from 'react';
import Cookies from 'universal-cookie';

function Login() {
  const db = getFirestore(app);
  const cookie = new Cookies()
  const dbRef = ref(getDatabase());
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const btnClick = () => get(child(dbRef, 'account')).then((snapshot) => {
    if (snapshot.exists()) {
      Object.entries(snapshot.val()).map(([key, value]: any, i) => {
        if (Object.values(value)[1] === password && Object.values(value)[3] === username) {
          cookie.set('accessToken', 'true')
          cookie.set('typeUser', Object.values(value)[2] + '')
          navigate('/Sidebar')
          navigate('/Isurance')
          window.location.reload()
        }
        else
          console.log(Object.values(value))
      })
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  const navigate = useNavigate()
  return (
    <div>
      <div className="m-0 font-sans antialiased font-normal text-start text-size-base leading-default text-slate-500">
        <div className="mt-0 transition-all duration-200 ease-soft-in-out">
          <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
            <div className="container z-10">
              <div className="flex flex-wrap mt-0 -mx-30" style={{ height: '880px' }}>
                <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12 h-full mt-10">
                  <div className="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                    <div style={{ margin: '0 auto' }}>
                      <img src={logo} alt='logo' style={{ height: '150px' }} />
                    </div>
                    <div className="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">
                      <h3 className="relative z-10 font-bold text-transparent bg-mint bg-clip-text text-size-22px">Chào mừng quay trở lại</h3>
                      <p className="mb-0">Nhập thông tin để đăng nhập</p>
                    </div>
                    <div className="flex-auto p-6">
                      <label className="mb-2 ml-1 font-bold text-size-xs text-slate-700">Tài khoản</label>
                      <div className="mb-4">
                        <input onChange={event => setUsername(event.target.value)} type="text" className="focus:shadow-soft-primary-outline text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder='Tài khoản' aria-label="Username" aria-describedby="username-addon"
                        />
                        <p className='ml-1 text-size-sm mt-1 text-red-500'>sai tài khoản</p>
                      </div>
                      <label className="mb-2 ml-1 font-bold text-size-xs text-slate-700">Mật khẩu</label>
                      <div className="mb-4 relative">
                        <input onChange={event => setPassword(event.target.value)} type={"text"} className="focus:shadow-soft-primary-outline text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:outline-none focus:transition-shadow" placeholder='Mật khẩu' aria-label="Password" aria-describedby="password-addon"
                        />
                        <p className='ml-1 text-size-sm mt-1 text-red-500'>sai mật khẩu</p>
                      </div>
                      <div className="min-h-6 mb-0.5 block pl-12">

                        <input id="rememberMe" className="mt-0.54 rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5-em relative float-left -ml-12 w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-mint checked:bg-mint checked:bg-none checked:bg-right" type="checkbox" />
                        <label className="mb-2 ml-1 font-normal cursor-pointer select-none text-size-sm text-mint" htmlFor="rememberMe">Ghi nhớ</label>
                      </div>
                      <div className="text-center">
                        <button onClick={btnClick} className="inline-block w-full px-6 py-3 mt-6 mb-0 font-bold text-center text-white uppercase align-middle transition-all border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro text-size-xs ease-soft-in tracking-tight-soft bg-mint hover:scale-102 hover:shadow-soft-xs active:opacity-85">Đăng nhập</button>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login