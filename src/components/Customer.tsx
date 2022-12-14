import { child, get, getDatabase, ref, remove } from 'firebase/database';
import { IProduct } from '../interface/product.interface';
import { useState } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import { Modal } from 'antd';
import { ICustomer } from './../interface/customer.interface';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';


function Customer() {
  const [showModal, setShowModal] = useState(false);
  const dbRef = ref(getDatabase());
  const [lstCustomer, setlstCustomer] = useState<ICustomer[]>([])
  const [CustomerKey, setCustomerKey] = useState<string[]>([])
  const [editState, setEditState] = useState(false)
  const [propp, setPropp] = useState<ICustomer>({
    tenkh: '',
    ngaysinh: '',
    dc: '',
    gt: '',
    sdt: 0,
    email: '',
  })
  const [propKey, setPropKey] = useState('')
  get(child(dbRef, 'Customer')).then((snapshot) => {
    if (snapshot.exists()) {
        setlstCustomer(Object.values(snapshot.val()))
        setCustomerKey(Object.keys(snapshot.val()))
      
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
                    tenkh: '',
                    ngaysinh: '',
                    dc: '',
                    gt: '',
                    sdt: 0,
                    email: '',
                  })
                  setShowModal(true)

                }} className="bg-mint hover:bg-blue-700 text-white font-bold py-2 px-2 ml-6  rounded-full">THÊM LINH KIỆN</button>
              </div>
            </div>
            <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
              <thead className="bg-white border-b">
                <tr>
               
        
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Tên khách hàng
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Địa chỉ
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Ngày sinh
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                   Email
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Số điện thoại
                  </th>
                  <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                    Giới tính
                  </th>
                </tr>
              </thead>
              <tbody>
                {lstCustomer.map((dt, index) =>

                  <tr  key={index} className="bg-gray-100 border-b">                    
                 
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.tenkh}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.dc}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.ngaysinh}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.email}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.sdt}
                    </td>
                    <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                      {dt.gt}
                    </td>
                    <td className="grid place-items-center   text-violet-600 font-light   ">
                      <button onClick={() => {
                        setEditState(true)
                        setPropp(lstCustomer[index])
                        setPropKey(CustomerKey[index])
                      }} className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                      <button onClick={() => remove(child(dbRef, 'Customer/' + CustomerKey[index]))} className="bg-mint text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal destroyOnClose={true}  footer={null} centered open={editState} onCancel={() => setEditState(false)}>
        <EditCustomer myCustomer={propp} keyCustomer={propKey} />
      </Modal>
      <Modal destroyOnClose={true}  footer={null} width={1000} centered open={showModal} onCancel={() => setShowModal(false)}>
        <AddCustomer  ></AddCustomer>
      </Modal>
    </div>
  )
}
export default Customer