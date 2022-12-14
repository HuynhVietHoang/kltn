import { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from '../firebase';
import { IProduct } from './../interface/product.interface';
import { getDatabase, push, ref as dbRef, set, update } from "firebase/database";
import { ICustomer } from './../interface/customer.interface';

interface IMyProps {
    myCustomer: ICustomer,
    keyCustomer: string
}
const EditCustomer: React.FC<IMyProps> = (props: IMyProps) => {
    const [tenkh, setTenkh] = useState<any>(props.myCustomer.tenkh)
    const [dc, setDC] = useState<any>(props.myCustomer.dc)
    const [ngaysinh, setNgaysinh] = useState<any>(props.myCustomer.ngaysinh)
    const [email, setEmail] = useState<any>(props.myCustomer.email)
    const [sdt, setSDT] = useState<any>(props.myCustomer.sdt)
    const [gt, setGT] = useState<any>(props.myCustomer.gt)
    const [CustomerUpdate, setCustomerUpdate] = useState<ICustomer>(props.myCustomer)
    const [customerProp, setCustomerProp] = useState(props.myCustomer)

    const db = getDatabase();

    const btnSaveClick = () => {
        setCustomerUpdate({
            tenkh: tenkh,
            ngaysinh: ngaysinh,
            dc: dc,
            gt: gt,
            sdt: sdt,
            email: email,

        })

    }
    
    const pushDB = () => {
    
        console.log(CustomerUpdate)
        console.log(props.keyCustomer)
        update(dbRef(db, 'Customer/' + props.keyCustomer), CustomerUpdate).catch((error) => console.log(error));



    }
    const onNumberOnlyChange = (event: any) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const isValid = new RegExp("[0-9.]",).test(keyValue);
        if (!isValid) {
            event.preventDefault();
            return;
        }
    };
    return (
        <div >
            <div className=" h-full my-2 mx-2 rounded-3  p-3">
                <div className='grid place-items-end '>
                    {/* <button onClick={() => document.getElementById('btnCloseModal')?.click()}>{<AiOutlineCloseCircle />}</button> */}
                </div>
                <div className="grid place-items-center ">

                    <h4 className="text-md font-semibold px-6 py-4 ">THÔNG TIN </h4>
                </div>
                <div className="">
                    <div className=" w-2/4 mr-2">
                        <h5 className='w-120'>Tên khách hàng</h5>
                        <input value={tenkh != null ? tenkh : customerProp.tenkh} onChange={event => setTenkh(event.target.value)} type="text" className="  focus: text-size-sm leading-5.6 ease-soft block  appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập tên linh kiện" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Địa chỉ</h5>
                        <input value={dc != null ? dc : customerProp.dc} onChange={event => setDC(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập mô tả" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Ngày sinh</h5>
                        <input value={ngaysinh != null ? ngaysinh : customerProp.ngaysinh} onChange={event => setNgaysinh(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập tên nhà cung cấp" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Email</h5>

                        <input value={email != null ? email : customerProp.email} onChange={event => setEmail(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập năm bảo hành" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Số điện thoại</h5>
                        <input value={sdt != null ? sdt : customerProp.sdt} onChange={event => setSDT(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập số lượng" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Giới tính</h5>
                        <input value={gt != null ? gt : customerProp.gt} onChange={event => setGT(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập giá" ></input>
                    </div>
                </div>
               
            </div>
            <div className="flex justify-center my-2">
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Cập nhật sản phẩm</button>
            </div>
        </div>
    )
}
export default EditCustomer
