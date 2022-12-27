import { child, get, getDatabase, push, ref } from "firebase/database";
import { getFirestore } from "firebase/firestore/lite";
import { useState } from "react"

import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import { IHD } from './../interface/hd.interface';
export default function AddHD() {
    const [lstKH, setLstKH] = useState<any>([])
    const [lstNameKH, setLstNameKH] = useState<any>([])
    const [lstProduct, setLstProduct] = useState<any>([])
    const [lstNameProduct, setLstNameProduct] = useState<any>([])
    const [lstProductKey, setLstProductKey] = useState<any>([])
    const [lstKHKey, setLstKHKey] = useState<any>([])

    const [hd, setHD] = useState<IHD>()
    const [productAdd, setProductAdd] = useState<any>([])

    const [kh, setKH] = useState<any>()
    const [pd, setPD] = useState<any>()
    const [sl, setSL] = useState(0)
    const dateNow = Date.now()
    var productName = new Array()
    var khName = new Array()
    const [hdFinal, setHDFinal] = useState<any>()
    const db = getDatabase();
    const dbRef = ref(getDatabase());
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
    get(child(dbRef, 'Customer')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstKHKey(Object.keys(snapshot.val()))
            setLstKH(Object.values(snapshot.val()))
            for (var i = 0; i < lstKH.length; i++) {
                khName.push(lstKH[i].tenkh)
            }
            setLstNameKH(khName)
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    const btnAddPD = () => {
        var dgia
        var pduct
        for (var i = 0; i < lstProduct.length; i++) {
            if (pd === lstProduct[i].Name) {
                pduct = lstProductKey[i]
                dgia = lstProduct[i].Price
            }
        }

        setProductAdd(current => [...current, {
            masp: pduct,
            soluong: sl,
            dongia: dgia
        }])

    }
    const pushHD = () => {
        console.log(productAdd)
        var khang
        var tt=0
        for (var i = 0; i < lstKH.length; i++) {
            if (kh === lstKH[i].tenkh) {
                khang = lstKHKey[i]
            }
        }
        productAdd.forEach(pd => {
            tt =tt+pd.soluong*pd.dongia
        });
       setHDFinal(
        {
            makh: khang,
            ngaylap: dateNow,
            giohang: productAdd,
            tongtien: tt
        }
       )
        push(ref(db, 'HD/'), hdFinal);
    }
    const handleDelete= (index,e)=>{
        setProductAdd(productAdd.filter((v, i) => i !== index));

    }
    return (
        <div className="mx-3">
            <div className="my-2 text-mint text-center text-xl font-bold">THÔNG TIN MUA BÁN</div>
            <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
            <div className="grid gap-4 grid-cols-1">
                <div className="grid place-items-center w-96  ">
                    <div className=" mb-2 text-xl  text-gray-700 font-bold ">Tên Khách Hàng</div>
                    <DropdownList filter className=""
                        onSelect={(value) => {
                            setKH(value)
                        }}

                        defaultValue={lstNameKH[0]}
                        data={lstNameKH}
                    />
                </div>
                <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
                <div className="grid gap-4 grid-cols-2">
                    <div className=" w-96 ">
                        <div className="mb-2 text-xl text-gray-700  font-bold">Sản Phẩm</div>
                        <DropdownList filter className=""
                            onSelect={(value) => {
                                setPD(value)
                            }}
                            defaultValue={lstNameProduct[0]}
                            data={lstNameProduct}
                        />
                    </div>
                    <div className="block ml-6">
                        <div className="mb-2 text-xl text-gray-700 font-bold">Nhập Số Lượng</div>
                        <input onChange={(event => setSL(parseInt(event.target.value)))} type="number" className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập số lượng" ></input>
                    </div>
                </div>
                <div className="flex justify-center my-2">
                    <button onClick={btnAddPD} className="bg-mint px-10 py-3 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85">Thêm</button>
                </div>
            </div>
            <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                        <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                            <thead className="bg-white border-b">
                                <tr>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Sản Phẩm
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Đơn Giá
                                    </th>
                                    <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                        Số Lượng
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productAdd.map((dt, index) => (
                                    <tr key={index} className="bg-gray-100 border-b">
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.masp}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.dongia}
                                        </td>
                                        <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                            {dt.soluong}
                                        </td>
                                        <td>                                            
                                            <button onClick={e => handleDelete(index,e)}   className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="h-6 w-full border-y border-gray-400 mb-5"></div>
                </div>
                <div className="flex justify-center my-2">
                    <button onClick={pushHD} className="bg-mint px-5 py-3 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85">Xác Nhận</button>
                </div>
            </div>
        </div>
    )
}