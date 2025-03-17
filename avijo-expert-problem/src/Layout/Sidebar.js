import React from "react";
import { MenuDatas } from "../components/Datas";
import { Link } from "react-router-dom";

function Sidebar() {
  // active link
  const currentPath = (path) => {
    const currentPath =
      window.location.pathname.split("/")[1] === path.split("/")[1];
    if (currentPath) {
      return path;
    }
    return null;
  };

  return (
    <div
      style={{ scrollbarWidth: "none" }}
      className='no-scrollbar h-screen w-[85px] overflow-y-scroll border-border bg-white px-4 py-6 xl:h-screen xl:shadow-lg'
    >
      <Link to='/'>
        <div className='flex flex-row items-end'>
          <h1 className='text-[16px] font-[600] text-black'>avijo</h1>
          <h6 className='text-[8px] font-[500] italic text-[#12CDB7]'>Alpha</h6>
        </div>
        {/* <img
          src="/images/logo.png"
          alt="logo"
          className="w-2/4 h-12 ml-4 object-contain"
        /> */}
      </Link>
      <div className='flex-colo mt-4 gap-2'>
        {MenuDatas.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`transitions group flex w-full flex-col items-center gap-4 rounded-lg p-1 hover:bg-text`}
          >
            <item.icon
              className={`${
                currentPath(item.path) === item.path
                  ? "text-[#12CDB7]"
                  : "text-gray-500"
              } h-[16] w-[16px]`}
            />
            <p
              className={`text-[10px] font-medium group-hover:text-subMain ${
                currentPath(item.path) === item.path
                  ? "text-[#12CDB7]"
                  : "text-gray-500"
              }`}
            >
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
