import { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app, { getFireBase } from '../firebase';
import { getDatabase, push, ref as dbRef } from "firebase/database";
import { Modal } from 'antd';

 function AddProduct()  {
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };  
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const btnSaveClick = () => {
        let updatedValue
        const storageRef = ref(storage, 'product/' + Namepd);
        uploadBytes(storageRef, img).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                updatedValue = {
                    Name: Namepd,
                    Id: '',
                    NSX: NSX,
                    BH: BH,
                    Price: Price,
                    SL: SL,
                    Mota: mota,
                    img: url
                };
                setProduct(updatedValue)
                setIsModalOpen(true)
               
            })
        }).catch((error) => console.log(error.message));
        console.log('Done!');
    }
    const pushDB = () => {
        push(dbRef(db, 'product/'), product);
    }

    return (
        <div >
            <div className=" my-2 mx-2 rounded-3  p-3">
                <div className='grid place-items-end '>
                    {/* <button onClick={() => document.getElementById('btnCloseModal')?.click()}>{<AiOutlineCloseCircle />}</button> */}
                </div>
                <div className="grid place-items-center">

                    <h4 className="grid place-items-center text-md font-semibold px-6 py-4">TH??NG TIN </h4>
                </div>
                <div className="">
                    <div className=" w-2/4 mr-2">
                        <h5>T??n linh ki???n</h5>
                        <input onChange={event => setName(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nh???p t??n linh ki???n" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>M?? t???</h5>
                        <input  onChange={event => setMota(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nh???p m?? t???" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Nh?? S???n Xu???t</h5>
                        <input  onChange={event => setNSX(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nh???p t??n nh?? cung c???p" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Th???i Gian B???o H??nh</h5>
                        <input onChange={event => setBH(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nh???p n??m b???o h??nh" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>S??? l?????ng</h5>
                        <input onChange={event => setSL(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nh???p s??? l?????ng" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Gi??</h5>
                        <input onChange={event => setPrice(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nh???p gi??" ></input>
                    </div>
                </div>
                <div className="grid place-items-center max-w-70pc mx-auto">
                    <h5>H??nh ???nh</h5>
                    {img && (<img src={img.preview} className='h-40 w-40' alt='gg'  ></img>)}
                    <input id="dropzone-file" onChange={uploadFile} type="file" />
                </div>
            </div>
            <div className="flex justify-center my-2">
                
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Th??m S???n Ph???m</button>
               
                </div>
        </div>
    )
}
export default AddProduct
