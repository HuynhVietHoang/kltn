
import { useState } from 'react';
import axios from 'axios';
import { CloseModalBootstrap } from '../helper/bootstrap/modal.helper';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app, { getFireBase } from '../firebase';
import { clear, error } from 'console';
import { IProduct } from './../interface/product.interface';
import { getDatabase,push,ref as dbRef, set } from "firebase/database";
import CloseButton from 'react-bootstrap/CloseButton';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function AddProduct() {
    const [img, setImg] = useState<any>()
    const [Namepd, setName] = useState<any>()
    const [NSX, setNSX] = useState<any>()
    const [BH, setBH] = useState<any>()
    const [Price, setPrice] = useState<any>()
    const [SL, setSL] = useState<any>()
    const [mota, setMota] = useState<any>()

    const [product, setProduct] = useState({})
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
        const storageRef = ref(storage, 'product/' + img.name);
         uploadBytes(storageRef, img).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url)=>{
                console.log(url);
                updatedValue= {
                    Name: Namepd,
                    Id: '',
                    NSX: NSX,
                    BH: BH,
                    Price: Price,
                    SL: SL,
                    Mota: mota,
                    img:url
                };                
                setProduct(updatedValue)
                
            })
           

        }).catch((error) => console.log(error.message));
        
       
        
        console.log('Fuck!');

        
    }
    const pushDB = () =>{
        
        push(dbRef(db, 'product/' ), product);
        console.log('clear')
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const answer = window.confirm("are you sure?");
        if (answer) {
          // Save it!
          console.log("Thing was saved to the database.");
        } else {
          // Do nothing!
          console.log("Thing was not saved to the database.");
        }
      };
    return (
        <div >
            <div className=" my-2 mx-2 rounded-3 border-2 p-3">
                <div className='grid place-items-end '>
                <button onClick={} >{<AiOutlineCloseCircle/>}</button>
                </div>
                <div className="flex items-center">
                    
                    <h4 className="text-md font-semibold px-6 py-4">THÔNG TIN </h4>
                </div>
                <div className="">
                    <div className=" w-2/4 mr-2">
                        <h5>Tên linh kiện</h5>
                        <input onChange={event => setName(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập tên linh kiện" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Mô tả</h5>
                        <input onChange={event => setMota(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập mô tả" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Nhà Sản Xuất</h5>
                        <input onChange={event => setNSX(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập tên nhà cung cấp" ></input>

                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Thời Gian Bảo Hành</h5>
                        <input onChange={event => setBH(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập năm bảo hành" ></input>

                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Số lượng</h5>
                        <input onChange={event => setSL(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập số lượng" ></input>

                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Giá</h5>
                        <input onChange={event => setPrice(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập giá" ></input>

                    </div>

                </div>
                <div className="max-w-70pc mx-auto">
                    <h5>Hình Ảnh</h5>


                    {img && (<img src={img.preview} className='h-64 w-full' alt='gg'  ></img>)}
                    <input id="dropzone-file" onChange={uploadFile} type="file" />
                </div>
            </div>
            <div className="flex justify-center my-2">
            <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>

                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Thêm Sản Phẩm</button>
            </div>

        </div>
    )
}
