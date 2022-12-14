import { child, get, getDatabase, ref, remove } from 'firebase/database';
import { IProduct } from '../interface/product.interface';
import { useState } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { Modal } from 'antd';
import { ICustomer } from './../interface/customer.interface';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';
import { IHD } from './../interface/hd.interface';
import { IHDKH } from './../interface/hdkh.interface';
import * as moment from 'moment'

function LstBanHang() {
    
    const [showModal, setShowModal] = useState(false);
    const dbRef = ref(getDatabase());
    const [lstHD, setLstHD] = useState<IHD[]>([])
    const [hdKey, setHDKey] = useState<string[]>([])
    const [editState, setEditState] = useState(false)
    const [lstKH, setLstKH] = useState<ICustomer[]>([])
    const [kh, setKH] = useState<ICustomer[]>([])
    const [khKey, setKHKey] = useState<string[]>([])
    const [khKey1, setKHKey1] = useState<string[]>([])
    var d = new Date(0)
    var a = 123
    const [propp, setPropp] = useState<IHD>({
        makh: '',
        ngaylap: 0
    })
    const [propKey, setPropKey] = useState('')
    get(child(dbRef, 'HD')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstHD(Object.values(snapshot.val()))
            setHDKey(Object.keys(snapshot.val()))

        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    get(child(dbRef, 'Customer')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstKH(Object.values(snapshot.val()))
            setKHKey(Object.keys(snapshot.val()))
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });

   
    return (
        <div className="flex flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className='justify-center items-center bg-gray-200 h-16-em shadow-soft-xs flex'>
                            <div className='input-group '>
                                <input type="Tìm kiếm" className='border-dashed border-2 border-blue-600 px-3 py-2 hover:scale-102 hover:shadow-soft-xs ' placeholder="Tìm kiếm linh kiện..." ></input>
                                <button onClick={() => {
                                    setPropp({
                                        makh: '',
                                        ngaylap: 0
                                    })
                                    setShowModal(true)

                                }} className="bg-mint hover:bg-blue-700 text-white font-bold py-2 px-2 ml-6  rounded-full">THÊM LINH KIỆN</button>
                            </div>
                        </div>
                        <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Mã hóa đơn
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Tên khách hàng
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Ngày lập hóa đơn
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Số điện thoại
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Giới tính
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {hdKey.map((dt, index) =>      
                                                            
                                    <tr key={index} className="bg-gray-100 border-b">
                                        <>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {
                                            dt}                                            
                                        </td>
                                        </>
                                        <>
                                        {khKey.map((kh,indexx)=>{                                     
                                                if(kh==lstHD[index].makh)
                                                {
                                                   return <>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {lstKH[indexx].tenkh}
                                        </td>                                                                                                                               
                                        <td className="text-md  text-violet-600 font-light px-6 py-4 whitespace-nowrap">                                            
                                            { (new Date(lstHD[index].ngaylap)+'').substring(0,16)}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {lstKH[indexx].email}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {lstKH[indexx].sdt}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {lstKH[indexx].gt}
                                        </td>
                                        <td className="grid place-items-center   text-violet-600 font-light   ">
                                            
                                            <button  className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                                                    {/* <button onClick={() => {
                                                setEditState(true)
                                                setPropp(lstCustomer[index])
                                                setPropKey(CustomerKey[index])
                                            }} className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                                            <button onClick={() => remove(child(dbRef, 'Customer/' + CustomerKey[index]))} className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button> */}
                                        </td>
                                                    </>
                                                }
                                        })}
                                        
                                   </>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal destroyOnClose={true} footer={null} centered open={editState} onCancel={() => setEditState(false)}>
                {/* <EditCustomer myCustomer={propp} keyCustomer={propKey} /> */}
            </Modal>
            <Modal destroyOnClose={true} footer={null} width={1000} centered open={showModal} onCancel={() => setShowModal(false)}>
                <AddCustomer></AddCustomer>
            </Modal>
        </div>
    )
}
export default LstBanHang