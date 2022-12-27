import { useState } from "react"

interface IMyProps {
    detail: any,
   
}
const ModalDetailSC: React.FC<IMyProps> = (props: IMyProps) => {
    const [detail, setDetail] = useState<any>(props.detail)

    return(
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">                
                <table className="border-x-2 border-y-2 border-slate-500  min-w-full">
                    <thead className="bg-white border-b">
                        <tr>                               
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                               stt
                            </th>
                            <th scope="col" className="text-md font-bold text-green-600 px-6 py-4 text-left">
                                nội dung
                            </th> 
                                                    
                        </tr>
                    </thead>

                    <tbody>

                        {detail.map((dt, index) => (
                            <tr key={index} className="bg-gray-100 border-b">
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {index}
                                </td>
                                <td className="text-md text-violet-600 font-light px-6 py-4 whitespace-nowrap">
                                    {dt}
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
export default ModalDetailSC