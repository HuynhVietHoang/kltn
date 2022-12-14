import { child, get, getDatabase, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";
import { useState } from "react"
import app from "../firebase";

export default function Coordinate() {
    const db = getFirestore(app);
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'product')).then((snapshot) => {
        if (snapshot.exists()) {
            Object.entries(snapshot.val()).map(([key, value], index) => {
            })
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    const data = [{
        img: './../assets/images/pindt.png',
        id: '1',
        name: 'màu zàng',
        note:'nmn@gmail.com',
    },
    ]
    return (
        <div className="flex flex-col ">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <div className='justify-center items-center bg-gray-200 h-16-em shadow-soft-xs flex'>
                            <div className='input-group '>
                                <input type="Tìm kiếm" className='border-dashed border-2 border-blue-600 px-3 py-2 hover:scale-102 hover:shadow-soft-xs ' placeholder="Tìm kiếm linh kiện..." ></input>
                                <button className="bg-mint ml-8 hover:bg-blue-700 text-white font-bold py-2 px-2  rounded-full">Thêm điều phối</button>
                            </div>
                        </div>
                        <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                            <thead className="bg-white border-b">
                                <tr>                                  
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Mã Công Việc
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Ảnh
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Tên Thiết Bị
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Mô Tả
                                    </th>  
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Thao Tác
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((dt, index) => (
                                    <tr key={index} className="bg-gray-100 border-b">
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.id}
                                        </td> 
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            <img className="h-1xl" src={dt.img}></img>
                                        </td> 
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.name}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.note}
                                        </td>                         
                                        <td>
                                            <button className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                                            <button className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}