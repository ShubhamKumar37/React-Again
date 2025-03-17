import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { Button, Input, Select } from "../Form";
import { BiChevronDown } from "react-icons/bi";
import { facilityData, sortsDatas } from "../Datas";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { toast } from "react-hot-toast";
import Access from "../Access";
import Uploader from "../Uploader";

function AddFacilityModal({ closeModal, isOpen, doctor, datas }) {
  const [instraction, setInstraction] = useState(facilityData.type[0]);
  const [instraction2, setInstraction2] = useState(facilityData.invitation[0]);
  const [access, setAccess] = useState({});

  useEffect(() => {
    console.log("instruction2:", instraction2);
  }, []);

  const onSubmit = () => {
    toast.error("This feature is not available yet");
  };

  return (
    <Modal
      closeModal={closeModal}
      isOpen={isOpen}
      title='Add Facility'
      width={"max-w-3xl"}
    >
      <div className='mb-6 mt-8 flex h-[45px] w-[70%] flex-row items-center justify-center rounded-[5px] bg-[#F8F9FA] p-1'>
        <img
          src={require("../../Assets/images/search.png")}
          className='ml-2 mr-2 h-[16px] w-[16px] text-[#CDCED0]'
        />
        <input
          className='w-full bg-[#F8F9FA] text-start text-[14px]'
          type='text'
          placeholder='Search'
        />
      </div>
      <div className='mb-4 grid w-full gap-4 sm:grid-cols-2'>
        <div className='flex w-full flex-col gap-3'>
          <p className='text-sm text-black'>Invitation for</p>
          <Select
            selectedPerson={instraction2}
            setSelectedPerson={setInstraction2}
            datas={facilityData.invitation}
          >
            <div className='flex-btn w-full rounded-lg border border-border p-4 text-sm font-light text-textGray focus:border focus:border-subMain'>
              {instraction2.name} <BiChevronDown className='text-xl' />
            </div>
          </Select>
        </div>
        <div className='flex w-full flex-col gap-3'>
          <p className='text-sm text-black'>Facility type</p>
          <Select
            selectedPerson={instraction}
            setSelectedPerson={setInstraction}
            datas={facilityData.type}
          >
            <div className='flex-btn w-full rounded-lg border border-border p-4 text-sm font-light text-textGray focus:border focus:border-subMain'>
              {instraction.name} <BiChevronDown className='text-xl' />
            </div>
          </Select>
        </div>
      </div>
      <div className='flex-colo gap-6'>
        {instraction2.name == "Partnership" && (
          <div className='grid w-full gap-4 sm:grid-cols-2'>
            <Input
              label='Facility name'
              color={true}
              placeholder='Enter facility name'
            />
            <Input
              label='Facility ID'
              color={true}
              placeholder="Enter facility I'd"
            />
          </div>
        )}

        <div className='grid w-full gap-4 sm:grid-cols-2'>
          <Input
            label='Mobile number'
            placeholder='Enter mobile no.'
            color={true}
          />
          <Input label='Email' placeholder='Enter your Email' color={true} />
        </div>

        {/* buttones */}
        <div className='grid w-full gap-4 sm:grid-cols-2'>
          <button
            onClick={closeModal}
            className='rounded-lg bg-[#B8B8B8] p-4 text-sm font-light text-[white]'
          >
            Cancel
          </button>
          <Button label='Invite' onClick={onSubmit} />
        </div>
      </div>
    </Modal>
  );
}

export default AddFacilityModal;
