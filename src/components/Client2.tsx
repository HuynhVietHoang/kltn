
import { child, get, getDatabase, push, ref } from "firebase/database";
import { useState } from "react";
import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import { IRepair } from './../interface/repair.interface';

export default function Client2 (){
    const dbRef = ref(getDatabase());
    const [lstProduct, setLstProduct] = useState<any>([])
    const [lstNameProduct, setLstNameProduct] = useState<any>([])
    const [lstProductKey, setLstProductKey] = useState<any>([])
    var productName = new Array()
    const [lstEmployee, setLstEmployee] = useState<any>([])
    const [lstNameEmployee, setLstNameEmployee] = useState<any>([])
    const [lstEmployeeKey, setLstEmployeeKey] = useState<any>([])
    var employeeName = new Array()

    const [tenSP, setTenSP] = useState<any>()
    const [mota, setMota] = useState<any>()
    const [ttbh, setTTBH] = useState<any>()
    const [manv, setMaNV] = useState<any>()
    const [ttloi, setTTLoi] = useState<any>()
    const [ttsua, setttSua] = useState<any>('')
    const [repair,setRepair] =useState<IRepair>()
    const db = getDatabase();
    const btnSaveClick = () => {
        setRepair({
            tensp: tenSP,
            mota: mota,
            ttbh: ttbh,
            manv: manv,
            ttloi: ttloi,
            ttsua: ttsua,

        })

    }
    const pushDB = () => {
        push(ref(db, 'Works/'), repair);
        console.log(repair)
    }
    get(child(dbRef, 'product')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstProductKey(Object.keys(snapshot.val()))
            setLstProduct(Object.values(snapshot.val()))
            for (var i = 0; i < lstProduct.length; i++) {
                productName.push(lstProduct[i].Name)
            }
            setLstNameProduct(productName)
    
        } else {
            console.log("No data available");
        }       
    }).catch((error) => {
        console.error(error);
    });
    get(child(dbRef, 'Employee')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstEmployeeKey(Object.keys(snapshot.val()))
            setLstEmployee(Object.values(snapshot.val()))
            for (var i = 0; i < lstEmployee.length; i++) {
                employeeName.push(lstEmployee[i].tennv)
            }
            setLstNameEmployee(employeeName)
    
        } else {
            console.log("No data available");
        }       
    }).catch((error) => {
        console.error(error);
    });
    return (
        <div className="mx-3">
            <div className="my-2 text-emerald-500 text-center text-xl font-bold">BẢO HÀNH VÀ SỬA CHỮA</div>
            <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
            <div className="grid gap-4 grid-cols-2">
            <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">TÊN LINH KIỆN</div>
                            <DropdownList filter className=""
                                 onChange={(value,index) => {                     
                                    setTenSP(value)
                                }}
                                data={lstNameProduct}
                            />
                        </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">Mô tả</div>
                    <textarea id="message" onChange={(e)=>setMota(e.target.value)}  className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow dark:border-gray-600 " placeholder="Nhập mô tả"></textarea>                </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">Thông tin bảo hành</div>
                    <input onChange={(e)=>setTTBH(e.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập thông tin" ></input>
                </div>
                <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">Nhân viên sửa chữa</div>
                            <DropdownList filter className=""
                              onChange={(value,index) => {                     
                                setMaNV(value)
                            }}
                             data={lstNameEmployee}
                            />
                        </div>
                        <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">Tình trạng lỗi</div>
                            <DropdownList filter className=""
                              onChange={(value,index) => {                     
                                setTTLoi(value)
                            }}
                                defaultValue="Hư pin"
                                data={["Hư pin", "Màn hình bị chấm đen"]}
                            />
                        </div>
                        <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">Khách hàng</div>
                            <input onChange={(e)=>setttSua(e.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập thông tin" ></input>

                        </div>        
                        <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>
                        <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Thêm Sản Phẩm</button>

            </div>
        </div>
    )
}