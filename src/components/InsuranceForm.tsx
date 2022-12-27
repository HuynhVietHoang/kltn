import { useState } from "react";
import ListInsurance from "./ListInsurance";
import AddRepair from './AddRepair';
import Client1 from './Client1';
import Client2 from './Client2';
import LstBanHang from './LstBanHang';

export default function InsuranceForm() {      
    const [openTab, setOpenTab] = useState(1);
    return (
        <div className="flex flex-col ">
           <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg- bg-mint"
                    : "text-"  + "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <i className="fas fa-space-shuttle text-base mr-1"></i> Danh sách bảo hành sửa chửa
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg- bg-mint"
                    : "text-" +  "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <i className="fas fa-cog text-base mr-1"></i>Thêm mua bán
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-mint"
                    : "text-" +  "-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <i className="fas fa-briefcase text-base mr-1"></i> Thêm sửa chửa
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div key={1} className={openTab === 1 ? "block" : "hidden"} id="link1">
                 <ListInsurance/>
                </div>
                <div key={2} className={openTab === 2 ? "block" : "hidden"} id="link2">
                <LstBanHang/>
                </div>
                <div key={3} className={openTab === 3 ? "block" : "hidden"} id="link3">
                <Client2/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>          
        </div>
    )
}