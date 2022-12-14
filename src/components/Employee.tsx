import { Modal } from "antd";
import { child, get, getDatabase, ref, remove } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";
import { useState } from "react";
import app from "../firebase";
import AddEmployee from './AddEmployee';
import { IEmployee } from './../interface/employee.interface';
import EditEmployee from './EditEmployee';

export default function Employee() {
    const [editState, setEditState] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const dbRef = ref(getDatabase());
    const [lstEmployee, setLstEmployee] = useState<IEmployee[]>([])
    const [employeeKey, setEmployeeKey] = useState<string[]>([])
    const [propp, setPropp] = useState<IEmployee>({
        tennv: '',
        manv: 'aaa',
        gt: '',
        dc: '',
        email: '',
        sdt: 0,
        img: '',
        cv:''
    })
    const [propKey, setPropKey] = useState('')
    get(child(dbRef, 'Employee')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstEmployee(Object.values(snapshot.val()))
            setEmployeeKey(Object.keys(snapshot.val()))
            for (var i = 0; i < lstEmployee.length; i++) {
                lstEmployee[i].manv = i + ''
            }
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
                                <button onClick={() => setShowModal(true)} className="bg-mint hover:bg-blue-700 text-white font-bold py-2 px-2  rounded-full">Thêm nhân viên</button>

                            </div>
                        </div>
                        <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Ảnh
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Tên Nhân Viên
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Giới Tính
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Địa Chỉ
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Email
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Số Điện Thoại
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Thao Tác
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                {lstEmployee.map((dt, index) => (
                                    <tr key={index} className="bg-gray-100 border-b">
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            <img className="h-14 w-14" src={dt.img}></img>
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.tennv}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.gt}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.dc}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.email}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.sdt}
                                        </td>
                                        <td>
                                            <button onClick={() => {
                                                setEditState(true)
                                                setPropp(lstEmployee[index])
                                                setPropKey(employeeKey[index])
                                            }}
                                                className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                                            <button onClick={() => remove(child(dbRef, 'Employee/' + employeeKey[index]))} className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal destroyOnClose={true} footer={null} open={editState} width={1000} onCancel={() => setEditState(false)} centered><EditEmployee myEmployee={propp} keyEmployee={propKey}  /></Modal>
            <Modal destroyOnClose={true} centered footer={null} width={1000} open={showModal} onCancel={() => setShowModal(false)}><AddEmployee /></Modal>

        </div>
    )
}