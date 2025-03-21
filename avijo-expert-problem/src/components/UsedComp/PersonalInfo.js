import React from "react";
import Uploder from "../Uploader";
import { sortsDatas } from "../Datas";
import { Button, DatePickerComp, Input, Select } from "../Form";
import { BiChevronDown } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { RiDeleteBin5Line } from "react-icons/ri";

function PersonalInfo({ titles }) {
  const [title, setTitle] = React.useState(sortsDatas.title[0]);
  const [date, setDate] = React.useState(new Date());
  const [gender, setGender] = React.useState(sortsDatas.genderFilter[0]);
  return (
    <div className='flex-colo gap-4'>
      {/* uploader */}
      <div className='col-span-6 flex w-full flex-col gap-3'>
        <p className='text-sm'>Profile Image</p>
        <Uploder />
      </div>
      {/* select  */}
      {titles && (
        <div className='flex w-full flex-col gap-3'>
          <p className='text-sm text-black'>Title</p>
          <Select
            selectedPerson={title}
            setSelectedPerson={setTitle}
            datas={sortsDatas.title}
          >
            <div className='flex-btn w-full rounded-lg border border-border p-4 text-sm font-light text-textGray focus:border focus:border-subMain'>
              {title?.name} <BiChevronDown className='text-xl' />
            </div>
          </Select>
        </div>
      )}

      {/* fullName */}
      <Input label='Full Name' color={true} type='text' />
      {/* phone */}
      <Input label='Phone Number' color={true} type='number' />
      {/* email */}
      <Input label='Email' color={true} type='email' />
      {!titles && (
        <>
          {/* gender */}
          <div className='flex w-full flex-col gap-3'>
            <p className='text-sm text-black'>Gender</p>
            <Select
              selectedPerson={gender}
              setSelectedPerson={setGender}
              datas={sortsDatas.genderFilter}
            >
              <div className='flex-btn w-full rounded-lg border border-border p-4 text-sm font-light text-textGray focus:border focus:border-subMain'>
                {gender?.name} <BiChevronDown className='text-xl' />
              </div>
            </Select>
          </div>
          {/* emergancy contact */}
          <Input label='Emergency Cotact' color={true} type='number' />
          {/* date */}
          <DatePickerComp
            label='Date of Birth'
            startDate={date}
            onChange={(date) => setDate(date)}
          />
          {/* address */}
          <Input label='Address' color={true} type='text' />
        </>
      )}
      {/* submit */}
      <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
        <Button
          label={"Delete Account"}
          Icon={RiDeleteBin5Line}
          onClick={() => {
            toast.error("This feature is not available yet");
          }}
        />
        <Button
          label={"Save Changes"}
          Icon={HiOutlineCheckCircle}
          onClick={() => {
            toast.error("This feature is not available yet");
          }}
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
