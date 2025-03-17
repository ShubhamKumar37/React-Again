import React from "react";
import { BiPlus } from "react-icons/bi";

function SenderReceverComp({ item, functions, button }) {
  return (
    <div className='mt-4 grid items-center gap-6 sm:grid-cols-2'>
      <div className='rounded-xl border border-border p-5'>
        <div className='flex-btn gap-4'>
          <h1 className='text-md font-semibold'>From:</h1>
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <h6 className='text-xs font-medium'>Delight Dental Clinic</h6>
          <p className='text-xs text-textGray'>delightdental@gmail.com</p>
          <p className='text-xs text-textGray'>+ (456) 786, 972, 90</p>
        </div>
      </div>
      <div className='rounded-xl border border-border p-5'>
        <div className='flex-btn gap-4'>
          <h1 className='text-md font-semibold'>To:</h1>
          {button && (
            <button
              onClick={() => functions.openModal()}
              className='flex-rows gap-2 rounded-lg border border-border bg-dry px-4 py-2 text-sm text-subMain'
            >
              <BiPlus /> Add
            </button>
          )}
        </div>
        <div className='mt-4 flex flex-col gap-2'>
          <h6 className='text-xs font-medium'>{item?.title}</h6>
          <p className='text-xs text-textGray'>{item?.email}</p>
          <p className='text-xs text-textGray'>{item?.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default SenderReceverComp;
