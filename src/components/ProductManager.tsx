import { child, get, getDatabase, ref } from 'firebase/database';
import { IProduct } from '../interface/product.interface';
import { MutableRefObject, useRef, useState } from 'react';
import { ConfigModal,OpenModalBootstrap } from '../helper/bootstrap/modal.helper';
import AddProduct from './AddProduct';

function ProductManager() {
  const [showModal, setShowModal] = useState(false);

  const addPDRef = useRef() as MutableRefObject<HTMLInputElement>;
  const dbRef = ref(getDatabase());
  const [lstProduct,setLstProduct] = useState<IProduct[]>([])
  get(child(dbRef, 'product')).then((snapshot) => {
    if (snapshot.exists()) {
      setLstProduct(Object.values(snapshot.val()))   
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  
  return (
    <div className="flex flex-col ">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div className='justify-center items-center bg-gray-200 h-16-em shadow-soft-xs flex'>
              <div className='input-group '>
                <input type="Tìm kiếm" className='border-dashed border-2 border-blue-600 px-3 py-2 hover:scale-102 hover:shadow-soft-xs ' placeholder="Tìm kiếm linh kiện..." ></input>
                <button onClick={()=>setShowModal(true)} className="bg-mint hover:bg-blue-700 text-white font-bold py-2 px-2 ml-6  rounded-full">THÊM LINH KIỆN</button>
              </div>
            </div>
            <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">

                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    ẢNH
                  </th>

                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    ID
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    TÊN LINH KIỆN
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    TRẠNG THÁI
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
              {lstProduct.map((dt, index) => (
                  <tr key={index} className="bg-gray-100 border-b">
                    <td className="form-check text-center">
                      <input type="checkbox" className="form-check-input "></input>
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      <img className="h-14 w-14"  src={dt.img}></img>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-md font-semibold text-violet-600">{dt.Name}</td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.Name}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.Name}
                    </td>
                    <td className="text-md text-violet-600 bg-white  font-light px-6 py-4 whitespace-nowrap">
                    <button className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                    <button className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <AddProduct></AddProduct>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    

    </div>
    

  )
}
export default ProductManager