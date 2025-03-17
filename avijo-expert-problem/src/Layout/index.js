import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

function index({ children, title }) {
  return (
    <div className='flex-colo bg-dry xl:h-screen'>
      <div className='grid w-full xl:grid-cols-12 2xl:max-w-[2000px]'>
        {/* <div className="col-span-1 xl:block hidden">
          <Sidebar />
        </div> */}
        <div className='relative col-span-12 overflow-y-scroll xl:h-screen'>
          <Header title={title} />
          <div className='px-2 pt-24 xs:px-8'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default index;
