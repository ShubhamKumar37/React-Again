import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Button, Input, Switchi, Textarea } from "../Form";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { toast } from "react-hot-toast";

function AddEditServiceModal({ closeModal, isOpen, datas }) {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    if (datas?.name) {
      setCheck(datas?.status);
    }
  }, [datas]);

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title={datas?.name ? "Edit Service" : "New Service"}
      width={"max-w-3xl"}
    >
      <div className='flex-colo gap-6'>
        <Input
          label='Service Name'
          color={true}
          placeholder={datas?.name && datas.name}
        />

        <Input
          label='Price (Tsh)'
          type='number'
          color={true}
          placeholder={datas?.price ? datas.price : 0}
        />

        {/* des */}
        <Textarea
          label='Description'
          placeholder='Write description here...'
          color={true}
          rows={5}
        />
        {/* switch */}
        <div className='flex w-full items-center gap-2'>
          <Switchi
            label='Status'
            checked={check}
            onChange={() => setCheck(!check)}
          />
          <p className={`text-sm ${check ? "text-subMain" : "text-textGray"}`}>
            {check ? "Enabled" : "Disabled"}
          </p>
        </div>
        {/* buttones */}
        <div className='grid w-full gap-4 sm:grid-cols-2'>
          <button
            onClick={closeModal}
            className='rounded-lg bg-red-600 bg-opacity-5 p-4 text-sm font-light text-red-600'
          >
            {datas?.name ? "Discard" : "Cancel"}
          </button>
          <Button
            label='Save'
            Icon={HiOutlineCheckCircle}
            onClick={() => {
              toast.error("This feature is not available yet");
            }}
          />
        </div>
      </div>
    </Modal>
  );
}

export default AddEditServiceModal;
