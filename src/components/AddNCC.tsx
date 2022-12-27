import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import { useState } from "react";
import app from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDatabase, push, ref as dbRef } from "firebase/database";

function AddNCC() {
    const [img, setImg] = useState<any>()
    const [tenncc, setTenncc] = useState<any>()
    const [dc, setDC] = useState<any>()
    const [sdt, setSDT] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [NCC, setNCC] = useState({})
    const storage = getStorage(app);
    const db = getDatabase();
    const uploadFile = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImg(file)
        console.log(file)
    }
    const btnSaveClick = () => {
        let updatedValue
        const storageRef = ref(storage, 'Suppliers/' + tenncc);
        uploadBytes(storageRef, img).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                updatedValue = {
                    tenncc: tenncc,
                    dc: dc,
                    email: email,
                    sdt: 0,
                    img: url
                };
                setNCC(updatedValue)
            })
        }).catch((error) => console.log(error.message));
        console.log('Done!');
    }
    const pushDB = () => {
        push(dbRef(db, 'Suppliers/'), NCC);
    }
    return (
        <div>

            <div className="mx-3">
                <div className="my-2 text-emerald-500 text-center text-xl font-bold">THÔNG TIN NHÂN VIÊN</div>
                <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
                <div className="grid gap-4 grid-cols-2">

                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">HỌ TÊN</div>
                        <input onChange={event => setTenncc(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập họ tên" name="description"></input>
                    </div>                   
                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">ĐỊA CHỈ</div>
                        <input onChange={event => setDC(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập địa chỉ" ></input>
                    </div>

                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">EMAIL</div>
                        <input onChange={event => setEmail(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập email" ></input>
                    </div>
                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">SỐ ĐIỆN THOẠI</div>
                        <input onChange={event => setSDT(event.target.value)} type="number" className="ifocus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập số điện thoại" ></input>
                    </div>
                    <div className="max-w-70pc mx-auto">
                        <div className="mb-2 text-xl text-gray-700 font-bold">HÌNH ẢNH</div>
                        {img && (<img src={img.preview} className='h-40 w-40' alt='gg'  ></img>)}
                        <input id="dropzone-file" onChange={uploadFile} type="file" />
                    </div>
                </div>
            </div>
            {/*footer*/}
            <div className="flex justify-center my-2">
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Thêm Sản Phẩm</button>
            </div>

        </div>

    )
}
export default AddNCC