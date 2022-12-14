

export default function ListInsurance(){
    const data = [{
        name: 'màu zàng',
        note:'nmn@gmail.com',
        state:'hư',
        ttl:'ncc',
        tts:'ko',
        person:'tèo',
    },

    ]
    return (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">                
                <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                    <thead className="bg-white border-b">
                        <tr>                               
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Tên Linh Kiện
                            </th>
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Mô Tả
                            </th> 
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Thông tin bảo hành
                            </th> 
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Nhân viên sửa chữa
                            </th> 
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Tình Trạng Lỗi
                            </th> 
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Tình Trạng Sửa
                            </th> 
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                Thao Tác
                            </th>                                
                        </tr>
                    </thead>

                    <tbody>

                        {data.map((dt, index) => (
                            <tr key={index} className="bg-gray-100 border-b">
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt.name}
                                </td>
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt.note}
                                </td>  
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt.state}
                                </td>    
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt.person}
                                </td> 
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt.ttl}
                                </td>    
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt.tts}
                                </td>                         
                                <td>
                                    <button className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">SỬA</button>
                                    <button className="bg-blue-500 text-white uppercase hover:scale-102 hover:shadow-soft-xs active:opacity-85 border-2 rounded-xl px-4 py-2 justify-center items-center text-center text-size-sm">XÓA</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )

}