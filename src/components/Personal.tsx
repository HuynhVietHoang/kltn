import { useEffect, useState } from "react"

function Personal() {
    const [stateEdit, setStateEdit] = useState(true)
    const btnEditClick = () => setStateEdit(false)
    const btnSaveClick = () => {

        setStateEdit(true)
        console.log(stateEdit)
    }
    useEffect(() => { }, [stateEdit])
    return (
        <div>
            <button onClick={btnEditClick} className='bg-mint px-10 py-3 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85'>Edit</button>
            <div className=" p-3 grid grid-cols-4 gap-3 place-items-center h-56  md:flex justify-between w-full max-w-full px-3 relative pb-8 min-h-screen	">
                <div className="flex-auto p-4 md:w-1/2">
                    <ul className="flex flex-col pl-0 mb-0 rounded-lg">
                        <div className="break-word">
                            <h4 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 grid place-items-center mt-10">THÔNG TIN CÁ NHÂN</h4>
                            <li className="relative block px-0 py-2 bg-white border-0  rounded-t-lg text-inherit">
                                <div className="mt-2 border-b-[3px]  mb-4 grid place-items-center  min-h-6  pl-0">
                                    <img src={'https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/308187838_3326929334296440_7242327241230651047_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=FW8uFkbjuegAX9N88g_&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfDV2Q3cIWBKzD9niwG0Y3eEIOfyV-wzeHRQOln94VjHCw&oe=6396C98E'} className="shadow rounded-full max-w-full h-auto align-middle border-none " style={{ width: '200px', height: '200px', margin: '20px' }} />
                                </div>
                            </li>
                            <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="mt-5 border-b-[3px]  mb-5 flex min-h-6  pl-0">
                                    <label className="w-2/5 text-size-xl grid place-items-center font-semibold text-mint">Mã Nhân Viên</label>
                                    {
                                        stateEdit ?
                                            <label className="w-3/5 mb-0 ml-4 grid place-items-center cursor-pointer select-none text-size-xl  ">0123</label>
                                            :
                                            <input type='text' readOnly className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-hidden border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow   " value="0123"></input>
                                    }
                                </div>
                            </li>
                            <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="mt-5 border-b-[3px]  mb-5  flex min-h-6 pl-0">
                                    <label className="w-2/5 text-size-xl grid place-items-center font-semibold text-mint">Họ Tên</label>
                                    {
                                        stateEdit ?
                                            <label className="w-3/5 mb-0 ml-4 grid place-items-center cursor-pointer select-none text-size-xl  ">HUỲNH VIỆT HOÀNG</label>
                                            :
                                            <input readOnly type='text' className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-hidden border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow  " value="HUỲNH VIỆT HOÀNG"></input>
                                    }
                                </div>
                            </li>
                            <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="mt-5 border-b-[3px]  mb-5  flex min-h-6 pl-0">
                                    <label className="w-2/5 text-size-xl grid place-items-center font-semibold text-mint">Giới Tính</label>
                                    {
                                        stateEdit ?
                                            <label className="w-3/5 mb-0 ml-4 grid place-items-center cursor-pointer select-none text-size-xl  ">NỮ</label>
                                            :
                                            <input readOnly type='text' className="focus: text-size-xl leading-5.6 ease-soft block w-96  border border-hidden border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow  " value="NỮ"></input>
                                    }
                                </div>
                            </li>
                            <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="mt-5 border-b-[3px]  mb-5 flex min-h-6 pl-0">
                                    <label className="w-2/5 text-size-xl grid place-items-center font-semibold  text-mint">Địa Chỉ</label>
                                    {
                                        stateEdit ?
                                            <label className="w-3/5 mb-0 ml-4 grid place-items-center cursor-pointer select-none text-size-xl  ">QUẬN 12</label>
                                            :
                                            <input readOnly type='text' className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-hidden border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow  " value="QUẬN 12"></input>
                                    }
                                </div>
                            </li>
                            <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="mt-5 border-b-[3px]  mb-5 flex min-h-6  pl-0">
                                    <label className="w-2/5 text-size-xl grid place-items-center font-semibold text-mint">Số Điện Thoại</label>
                                    {
                                        stateEdit ?
                                            <label className="w-3/5 mb-0 ml-4 grid place-items-center cursor-pointer select-none text-size-xl  ">01239314</label>
                                            :
                                            <input readOnly type='text' className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-hidden border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow  " value="01239314"></input>
                                    }
                                </div></li>
                            <li className="relative block px-0 py-2 bg-white border-0 rounded-t-lg text-inherit">
                                <div className="mt-5 border-b-[3px]  mb-5 flex min-h-6  pl-0">
                                    <label className="w-2/5 text-size-xl  grid place-items-center font-semibold text-mint">Email</label>
                                    {
                                        stateEdit ?
                                            <label className="w-3/5 mb-0 ml-4 grid place-items-center cursor-pointer select-none text-size-xl  ">VIETHOANGNMN@GMAIL.COM</label>
                                            :
                                            <input readOnly type='text' className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-hidden border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow  " value="VIETHOANGNMN@GMAIL.COM"></input>
                                    }
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
            <div className="flex min-h-6 mb-0.5 pl-0">
                <button disabled={stateEdit} onClick={btnSaveClick} className='bg-mint px-10 py-3 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85'>Save</button>
            </div>
        </div>
    )
}
export default Personal