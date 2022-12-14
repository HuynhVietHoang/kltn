import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import { useState } from "react";
import { IEmployee } from "../interface/employee.interface";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from "../firebase";
import { getDatabase, ref as dbRef, update } from "firebase/database";


interface IMyProps {
    myEmployee: IEmployee,
    keyEmployee: string
}
const EditEmployee: React.FC<IMyProps> = (props: IMyProps) => {

    const [img, setImg] = useState<any>()
    const [tennv, setTennv] = useState<any>(props.myEmployee.tennv)
    const [manv, setManv] = useState<any>(props.myEmployee.manv)
    const [dc, setDC] = useState<any>(props.myEmployee.dc)
    const [gt, setGT] = useState<any>(props.myEmployee.gt)
    const [sdt, setSDT] = useState<any>(props.myEmployee.sdt)
    const [email, setEmail] = useState<any>(props.myEmployee.email)
    const [employeeUpdate, setEmployeeUpdate] = useState<IEmployee>(props.myEmployee)
    const [employeeProp, setemployeeProp] = useState(props.myEmployee)
    const [urll, setUrl] = useState(props.myEmployee.img)
    const storage = getStorage(app);
    const db = getDatabase();
    const uploadFile = (e) => {
        const file = e.target.files[0]
        file.preview = URL.createObjectURL(file)
        setImg(file)
    }
    const btnSaveClick = () => {
        let updatedValue
        console.log(img)
        if (img !== undefined) {
            const storageRef = ref(storage, 'employee/' + img.name);
            uploadBytes(storageRef, img).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setUrl(url)
                    console.log(urll);
                    updatedValue = {
                        tennv: tennv,
                        manv: 'a',
                        email: email,
                        dc: dc,
                        sdt: sdt,
                        gt: gt,
                        img: url,

                    };
                    setEmployeeUpdate(updatedValue)
                })
            }).catch((error) => console.log(error.message));
        } else {
            updatedValue = {
                tennv: tennv,
                manv: 'a',
                email: email,
                dc: dc,
                sdt: sdt,
                gt: gt,
                img: urll,
            };
            setEmployeeUpdate(updatedValue)
        }

    }
    const pushDB = () => {
        update(dbRef(db, 'Employee/' + props.keyEmployee), employeeUpdate).catch((error) => console.log(error));
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
                            defaultValue="NV01"
                            data={["NV01", "NV02"]}
                        />
                    </div>
                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">HỌ TÊN</div>
                        <input value={tennv != null ? tennv : employeeProp.tennv} onChange={(event) =>
                        {
                            
                             setTennv(event.target.value)
                             console.log(tennv)
                        }
                             } className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập họ tên" name="description"></input>
                    </div>
                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">GIỚI TÍNH</div>
                        <input value={gt != null ? gt : employeeProp.gt} onChange={(event) => setGT(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập giới tính" ></input>
                    </div>

                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">ĐỊA CHỈ</div>
                        <input value={dc != null ? dc : employeeProp.dc} onChange={(event) => setDC(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập địa chỉ" ></input>
                    </div>

                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">EMAIL</div>
                        <input value={email != null ? email : employeeProp.email} onChange={(event) => setEmail(event.target.value)} className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập email" ></input>
                    </div>
                    <div className="block">
                        <div className="mb-2 text-xl text-gray-700 font-bold">SỐ ĐIỆN THOẠI</div>
                        <input value={sdt != null ? sdt : employeeProp.sdt} type="number" onChange={(event) => setSDT(event.target.value)} className="ifocus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập số điện thoại" ></input>
                    </div>
                    <div className="max-w-70pc mx-auto">
                        <div className="mb-2 text-xl text-gray-700 font-bold">HÌNH ẢNH</div>
                        {img ? <img src={img.preview || img} className='h-64 w-64' alt='gg'  ></img> : <img src={employeeProp.img} className='h-40 w-40' alt='gg'  ></img>}
                        <input id="dropzone-file" onChange={uploadFile} type="file" />
                    </div>
                </div>
            </div>
            {/*footer*/}
            <div className="flex justify-center my-2">
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Cập nhật sản phẩm</button>
            </div>
        </div>
    )
}
export default EditEmployee