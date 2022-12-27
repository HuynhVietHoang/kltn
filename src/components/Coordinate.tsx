import { Modal } from "antd";
import { child, get, getDatabase, ref,ref as dbbRef, update } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";
import { useState } from "react"
import app from "../firebase";
import { ISC1 } from "../interface/sc1.interface";
import ModalDetailSC from "./ModalDetailSC";

export default function Coordinate() {
    const [stateButton,setStateButton] = useState(true)
    const [detailState,setDetailState]=useState(false)
    const [propp,setPropp] = useState<any>()
    const db = getFirestore(app);
    const dbRef = ref(getDatabase());
    const [sc1,setSC1] = useState<ISC1[]>([])
    const [sc1Key,setSC1Key] = useState<any>([])
    get(child(dbRef, 'sc1')).then((snapshot) => {
        if (snapshot.exists()) {
            setSC1(Object.values(snapshot.val()))
            setSC1Key(Object.keys(snapshot.val()))
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    const dbb = getDatabase();
    const denyUpdateClick =(a) =>{
        let updateValue ={
            ...sc1[a],
            tinhtrang:"Hủy"
        }
        update(dbbRef(dbb, 'sc1/' + sc1Key[a]), updateValue).catch((error) => console.log(error));
        setStateButton(false)
    }
    const acceptUpdateClick =(a) =>{
        let updateValue ={
            ...sc1[a],
            tinhtrang:"Oke"
        }
        update(dbbRef(dbb, 'sc1/' + sc1Key[a]), updateValue).catch((error) => console.log(error));
        
    }
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
                            </div>
                        </div>
                        <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                            <thead className="bg-white border-b">
                                <tr>                                  
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Mã Công Việc
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Mã khách hàng
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Tình trạng
                                    </th>                                   
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Thao Tác
                                    </th>                                
                                </tr>
                            </thead>
                            <tbody>
                                {sc1.map((dt, index) => (
                                    <tr key={index} className="bg-gray-100 border-b">
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.workID}
                                        </td> 
                                   
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.khID}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.tinhtrang}
                                        </td>                         
                                        <td>
                                        <button onClick={()=>{
                                            setDetailState(true)
                                            setPropp(dt.detail)
                                            console.log(dt.detail   )
                                        }} className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">xem chi tiết</button>
                                           {
                                            dt.tinhtrang==='Chờ'?
                                            <>
                                            <button onClick={()=>{acceptUpdateClick(index)}} className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">Đồng ý </button>
                                            <button onClick={()=>{denyUpdateClick(index)}} className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">Từ chối</button>
                                            </>:null
                                           }
                                            </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Modal destroyOnClose={true}  footer={null} centered open={detailState} onCancel={() => setDetailState(false)}>
        <ModalDetailSC detail={propp}  />
      </Modal>
        </div>
    )
}