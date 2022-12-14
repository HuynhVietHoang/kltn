import { child, get, getDatabase, ref, remove } from 'firebase/database';
import { IProduct } from '../interface/product.interface';
import { useState } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { Modal } from 'antd';


function ProductManager() {
  const [showModal, setShowModal] = useState(false);
  const dbRef = ref(getDatabase());
  const [lstProduct, setLstProduct] = useState<IProduct[]>([])
  const [productKey, setProductKey] = useState<string[]>([])
  const [editState, setEditState] = useState(false)
  const [propp, setPropp] = useState<IProduct>({
    Name: '',
    Id: '',
    NSX: '',
    BH: 0,
    Price: 0,
    SL: 0,
    Mota: '',
    img: ''
  })
  const [propKey, setPropKey] = useState('')
  get(child(dbRef, 'product')).then((snapshot) => {
    if (snapshot.exists()) {
      setLstProduct(Object.values(snapshot.val()))
      setProductKey(Object.keys(snapshot.val()))
      for (var i = 0; i < lstProduct.length; i++) {
        lstProduct[i].Id = i + ''

      }
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
                <button onClick={() => {
                  setPropp({
                    Name: '',
                    Id: '',
                    NSX: '',
                    BH: 0,
                    Price: 0,
                    SL: 0,
                    Mota: '',
                    img: ''
                  })
                  setShowModal(true)

                }} className="bg-mint hover:bg-blue-700 text-white font-bold py-2 px-2 ml-6  rounded-full">THÊM LINH KIỆN</button>
              </div>
            </div>
            <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
              <thead className="bg-white border-b">
                <tr>
               
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Ảnh
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Tên linh kiện
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Nhà sản xuất
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Số lượng
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Thời gian bảo hành
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody>
                {lstProduct.map((dt, index) =>

                  <tr id={dt.Id} key={index} className="bg-gray-100 border-b">                    
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      <img className="h-14 w-14" src={dt.img}></img>
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.Name}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.NSX}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.SL}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.BH}
                    </td>
                    <td className="grid place-items-center   text-violet-600 font-light   ">
                      <button onClick={() => {
                        setEditState(true)
                        setPropp(lstProduct[index])
                        setPropKey(productKey[index])
                      }} className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                      <button onClick={() => remove(child(dbRef, 'product/' + productKey[index]))} className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal destroyOnClose={true}  footer={null} centered open={editState} onCancel={() => setEditState(false)}>
        <EditProduct myProduct={propp} keyProduct={propKey} />
      </Modal>
      <Modal destroyOnClose={true}  footer={null} centered open={showModal} onCancel={() => setShowModal(false)}>
        <AddProduct ></AddProduct>
      </Modal>
    </div>
  )
}
export default ProductManager