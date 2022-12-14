import Client1 from "./Client1"
import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
import Client2 from "./Client2";

interface IMyProps {
    idclient: number,

}
const AddRepair: React.FC<IMyProps> = (props: IMyProps) => {  
    return (
        <div>
            <div className="border-2 mx-3 border-gray-200 rounded-2">
                <div className="mx-3">
                    <div className="my-2 text-emerald-500  text-center text-xl font-bold">THÔNG TIN KHÁCH HÀNG</div>
                    <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
                    <div className="grid gap-4 grid-cols-2">
                        <div className="block">
                            <div className="mb-2 text-xl text-gray-700 font-bold">HỌ TÊN</div>
                            <input className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập họ tên" name="description"></input>
                        </div>
                        <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">GIỚI TÍNH</div>
                            <DropdownList filter className=""
                                defaultValue="Nam"
                                data={["Nam", "Nữ"]}
                            />
                        </div>
                        <div className="block">
                            <div className="mb-2 text-xl text-gray-700 font-bold">NGÀY SINH</div>
                            <input type="date" className="input-global react-datepicker-ignore-onclickoutside focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow"></input>
                        </div>
                        <div className="block">
                            <div className="mb-2 text-xl text-gray-700 font-bold">EMAIL</div>
                            <input className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập email" ></input>
                        </div>
                        <div className="block"><div className="mb-2 text-xl text-gray-700 font-bold">SỐ ĐIỆN THOẠI</div>
                        <input className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập số điện thoại" ></input>
                        </div>
                        <div className="block"><div className="mb-2 text-xl text-gray-700 font-bold">ĐỊA CHỈ</div>
                            <input className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập địa chỉ" ></input>
                        </div>
                    </div>
                </div>
            </div>
            {/*body*/}
            <div className="border-2 mx-3 my-8 border-gray-200 rounded-2">
                {                 
                    props.idclient === 1 ?
                        <Client1/> : null
                }
                {
                    props.idclient === 2 ?
                        <Client2/> : null
                }
            </div>
            {/*footer*/}
            <div className="flex justify-center my-2">
            <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" >oke</button>
                <button className="bg-mint px-3 py-2 mt-4 text-white rounded-xl uppercase hover:scale-102 hover:shadow-soft-xs border-2 border-chlorophyll active:opacity-85" >Thêm Sản Phẩm</button>            </div>
        </div>
    )
}
export default AddRepair