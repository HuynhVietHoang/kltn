import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import { useState } from "react";
import app from "../firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDatabase, push,ref as dbRef  } from "firebase/database";

function AddEmployee() {
    const [img, setImg] = useState<any>()
    const [tennv, setTennv] = useState<any>()
    const [manv, setManv] = useState<any>()
    const [cv, setCV] = useState<any>()
    const [dc, setDC] = useState<any>()
    const [gt, setGT] = useState<any>()
    const [sdt, setSDT] = useState<any>()
    const [email, setEmail] = useState<any>()
    const [employee, setEmployee] = useState({})
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
        const storageRef = ref(storage, 'employee/' + tennv);
        uploadBytes(storageRef, img).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                updatedValue = {
                    tennv: tennv,
                    manv: 'manv',
                    email: email,
                    dc: dc,
                    gt: gt,
                    sdt: sdt,
                    img: url
                };
                setEmployee(updatedValue)                               
            })
        }).catch((error) => console.log(error.message));
        console.log('Done!');
    }
    const pushDB = () => {
        push(dbRef(db, 'Employee/'), employee);
        console.log(employee)
        console.log(cv)
    }
    return (
        <div>
           
                <div className="mx-3">
                    <div className="my-2 text-emerald-500 text-center text-xl font-bold">THÔNG TIN NHÂN VIÊN</div>
                    <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
                    <div className="grid gap-4 grid-cols-2">
                        <div className="block w-96	">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">MÃ NHÂN VIÊN</div>
                            <DropdownList filter className=""
                                defaultValue={1}
                                data={[{id: 1,value: "admin"},{id: 2,value: "none"},{id: 3,value: "rp"}]}
                                dataKey='id'
                                textField='value'
                                onChange={value => setCV(value.id)}

                            />
                        </div>
                        <div className="block">
                            <div className="mb-2 text-xl text-gray-700 font-bold">HỌ TÊN</div>
                            <input onChange={event => setTennv(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập họ tên" name="description"></input>
                        </div>
                        <div className="block">
                            <div className="mb-2 text-xl text-gray-700 font-bold">GIỚI TÍNH</div>
                            <input onChange={event => setGT(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập giới tính" ></input>
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
                            <div  className="mb-2 text-xl text-gray-700 font-bold">SỐ ĐIỆN THOẠI</div>
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
export default AddEmployee