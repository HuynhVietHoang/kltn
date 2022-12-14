import { useState } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import app from '../firebase';
import { IProduct } from './../interface/product.interface';
import { getDatabase, push, ref as dbRef, set, update } from "firebase/database";

interface IMyProps {
    myProduct: IProduct,
    keyProduct: string
}
const EditProduct: React.FC<IMyProps> = (props: IMyProps) => {
    const [img, setImg] = useState<any>()
    const [Namepd, setName] = useState<any>(props.myProduct.Name)
    const [NSX, setNSX] = useState<any>(props.myProduct.NSX)
    const [BH, setBH] = useState<any>(props.myProduct.BH)
    const [Price, setPrice] = useState<any>(props.myProduct.Price)
    const [SL, setSL] = useState<any>(props.myProduct.SL)
    const [mota, setMota] = useState<any>(props.myProduct.Mota)
    const [productUpdate, setProduct] = useState<IProduct>(props.myProduct)
    const [productProp, setProductProp] = useState(props.myProduct)
    const [urll, setUrl] = useState(props.myProduct.img)
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
            const storageRef = ref(storage, 'product/' + img.name);
            uploadBytes(storageRef, img).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setUrl(url)
                    console.log(urll);
                    updatedValue = {
                        Name: Namepd,
                        Id: '',
                        NSX: NSX,
                        BH: BH,
                        Price: Price,
                        SL: SL,
                        Mota: mota,
                        img: url,
                    };
                    alert('oke')
                    setProduct(updatedValue)
                })
            }).catch((error) => console.log(error.message));
        } else {
            console.log(productUpdate);
            updatedValue = {
                Name: Namepd,
                Id: '',
                NSX: NSX,
                BH: BH,
                Price: Price,
                SL: SL,
                Mota: mota,
                img: urll
            };
            setProduct(updatedValue)
            console.log(urll);
        }

    }
    const pushDB = () => {
        console.log(productUpdate)
        console.log(props.keyProduct)
        update(dbRef(db, 'product/' + props.keyProduct), productUpdate).catch((error) => console.log(error));



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
                        <h5 className='w-120'>Tên linh kiện</h5>
                        <input value={Namepd != null ? Namepd : productProp.Name} onChange={event => setName(event.target.value)} type="text" className="  focus: text-size-sm leading-5.6 ease-soft block  appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập tên linh kiện" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Mô tả</h5>
                        <input value={mota != null ? mota : productProp.Mota} onChange={event => setMota(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập mô tả" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Nhà Sản Xuất</h5>
                        <input value={NSX != null ? NSX : productProp.NSX} onChange={event => setNSX(event.target.value)} type="text" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập tên nhà cung cấp" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Thời Gian Bảo Hành</h5>

                        <input value={BH != null ? BH : productProp.BH} onChange={event => setBH(event.target.value)} type="number" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập năm bảo hành" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Số lượng</h5>
                        <input value={SL != null ? SL : productProp.SL} onChange={event => setSL(event.target.value)} type="number" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập số lượng" ></input>
                    </div>
                    <div className="w-2/4 mr-2">
                        <h5>Giá</h5>
                        <input value={Price != null ? Price : productProp.Price} onChange={event => setPrice(event.target.value)} type="number" className="focus: text-size-sm leading-5.6 ease-soft block w-full appearance-none rounded-1 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:outline-none focus:transition-shadow" placeholder="Nhập giá" ></input>
                    </div>
                </div>
                <div className="grid place-items-center max-w-70pc mx-auto">
                    <h5>Hình Ảnh</h5>
                    {img ? <img src={img.preview || img} className='h-64 w-64' alt='gg'  ></img> : <img src={productProp.img} className='h-40 w-40' alt='gg'  ></img>}
                    <input id="dropzone-file" onChange={uploadFile} type="file" />
                </div>
            </div>
            <div className="flex justify-center my-2">
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={btnSaveClick}>oke</button>
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" onClick={pushDB}>Cập nhật sản phẩm</button>
            </div>
        </div>
    )
}
export default EditProduct
