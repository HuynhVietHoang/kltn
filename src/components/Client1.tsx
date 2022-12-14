import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import { useState } from 'react';
import { child, get, getDatabase, ref } from "firebase/database";
import { IProduct } from "../interface/product.interface";

export default function Client1() {
    const dbRef = ref(getDatabase());
    const [lstProduct, setLstProduct] = useState<IProduct[]>([])
    const [productKey, setProductKey] = useState<string[]>([])
    const [lstNamepd, setlstNamepd] = useState<string[]>([])
    const [valuee, setValuee] = useState('')
    var productName = new Array();
    var productPrice = new Array();
    const date = Date.now()
    
    get(child(dbRef, 'product')).then((snapshot) => {
        if (snapshot.exists()) {
            setLstProduct(Object.values(snapshot.val()))
            setProductKey(Object.keys(snapshot.val()))
            for (var i = 0; i < lstProduct.length; i++)
            {
                productName.push(lstProduct[i].Name)
                productPrice.push(lstProduct[i].Price)
            }
            setlstNamepd(productName)
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
    return (
        <div className="mx-3">
       
            <div className="my-2 text-emerald-500 text-center text-xl font-bold">LINH KIỆN MUA</div>
            <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
            <div className="grid gap-4 grid-cols-2">
                
            <div className="block w-96">
                    <div className="mb-2 text-xl  text-gray-700 font-bold">SỐ ĐIỆN THOẠI KHÁCH HÀNG</div>
                    <DropdownList filter className=""
                        onChange={(value,index) => {                     
                            setValuee(value)
                        }}
                        defaultValue={lstNamepd[0]}
                        data={lstNamepd}
                    />
                </div>
                <div className="block w-96">
                    <div className="mb-2 text-xl  text-gray-700 font-bold">TÊN LINH KIỆN</div>
                    <DropdownList filter className=""
                        onChange={(value) => {
                            setValuee(value)
                        }}
                        defaultValue={lstNamepd[0]}
                        data={lstNamepd}
                    />
                </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">SỐ LƯỢNG</div>
                    <input type="number" className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập số lượng" ></input>
                </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">BẢO HÀNH</div>
                    <input className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập thời gian bảo hành" ></input>
                </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">ĐƠN GIÁ</div>
                    <input type="number" className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập đơn giá" ></input>
                </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">NGÀY MUA</div>
                    <input type="date"  className="input-global react-datepicker-ignore-onclickoutside focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow"></input>
                </div>
            </div>
        </div>


    )
}