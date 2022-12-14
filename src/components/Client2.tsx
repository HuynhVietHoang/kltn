
import { DropdownList } from "react-widgets/cjs";
import "react-widgets/styles.css";
export default function Client2 (){
    return (
        <div className="mx-3">
            <div className="my-2 text-emerald-500 text-center text-xl font-bold">BẢO HÀNH VÀ SỬA CHỮA</div>
            <div className="h-0.5 w-full border-y border-gray-400 mb-3"></div>
            <div className="grid gap-4 grid-cols-2">
            <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">TÊN LINH KIỆN</div>
                            <DropdownList filter className=""
                                defaultValue="Pin"
                                data={["Pin", "Màn Hình","Camera"]}
                            />
                        </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">Mô tả</div>
                    <textarea id="message"  className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow dark:border-gray-600 " placeholder="Nhập mô tả"></textarea>                </div>
                <div className="block">
                    <div className="mb-2 text-xl text-gray-700 font-bold">Thông tin bảo hành</div>
                    <input className="focus: text-size-xl leading-5.6 ease-soft block w-96 border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 mb-2  font-normal text-gray-700 transition-all focus:border-sky-600 focus:transition-shadow" placeholder="Nhập thông tin" ></input>
                </div>
                <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">Nhân viên sửa chữa</div>
                            <DropdownList filter className=""
                                defaultValue="Hoàng"
                                data={["Minh", "Vy","Nguyệt"]}
                            />
                        </div>
                        <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">Tình trạng lỗi</div>
                            <DropdownList filter className=""
                                defaultValue="Hư pin"
                                data={["Hư pin", "Màn hình bị chấm đen"]}
                            />
                        </div>
                        <div className="block w-96">
                            <div className="mb-2 text-xl  text-gray-700 font-bold">Tình trạng sửa</div>
                            <DropdownList filter className=""
                                defaultValue="Hoàn thành"
                                data={["Hoàn thành", "Chưa hoàn thành"]}
                            />
                        </div>            
            </div>
        </div>
    )
}