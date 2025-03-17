import { Listbox, Menu, Switch } from "@headlessui/react";
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import DatePicker from "react-datepicker";
import { FaCheck } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";

export function Input({
  label,
  name,
  type,
  color,
  placeholder,
  register,
  value,
  onChange,
}) {
  return (
    <div className='w-full text-sm'>
      <label
        className={`${
          color ? "text-sm text-black" : "font-semibold text-white"
        } `}
      >
        {label}
      </label>
      <input
        name={name}
        {...register}
        type={type}
        placeholder={placeholder}
        className={`mt-3 w-full border bg-transparent p-4 text-sm ${
          color ? "border-border font-light" : "border-white text-white"
        } rounded-lg focus:border focus:border-subMain`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

// button

export function Button({ label, onClick, loading, Icon }) {
  return (
    <button
      disabled={loading}
      onClick={onClick}
      className={`flex-rows transitions w-full gap-4 rounded bg-subMain px-2 py-4 text-sm font-medium text-white hover:opacity-80`}
    >
      {loading ? (
        <BiLoaderCircle className='animate-spin text-2xl text-white' />
      ) : (
        <>
          {label}
          {Icon && <Icon className='text-xl text-white' />}
        </>
      )}
    </button>
  );
}

//profile select
export function ProfileSelect({ children, datas, item: data }) {
  return (
    <div className='relative w-full text-sm'>
      <Menu>
        <Menu.Button>{children}</Menu.Button>
        <Menu.Items
          className='absolute right-4 z-50 flex max-h-[500px] flex-col gap-2 overflow-y-auto rounded-md bg-white px-12 py-4 shadow-lg ring-1 ring-border focus:outline-none'
          style={{ scrollbarWidth: "none" }}
        >
          {/* Image */}
          <div>
            <img
              src='https://s3-alpha-sig.figma.com/img/03e9/2b4f/f73ec9eb092879865b46bbaf7e98854d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VoYexUAGy5zw37l~NU6sU0Sd9u6nSo3NCyZwV5cCUGlda~qqgMjgnpDFGqZ6JWrfpOQuxfWRWvzJMg3OBDFgqO0A~3bpm7Fi6ZJ1AYUmp1QykwledEx2CFZmuOz5wB6qWb6VzYwL9Bd47Xvmt2M8pCpLxZ5jRHItZkXbM6uIOmb02zsY0hS2nmNGtB7U6mXS6JL5dRT8oEmegohwVwWtXs2eApE0cfgZjsJQ-s-RLrR~v0ITP9Qu8VDzsRmIe952UE5PniKtDPF8HHOSBAogkCxHekD7NSFsiOBEgV0sTLu7Lcx1kAIW24-D0OaNra0~ZpkEsWt1kAQcejgmcFY3tw__'
              className='h-[44px] w-[44px] rounded-full'
            />
          </div>
          {/* Name and Icon */}
          <div className='flex w-full flex-row items-center justify-between border-b-2 pb-2'>
            <span className='text-[14px] text-[Gilroy-SemiBold] text-black'>
              Anthony Atkielski
            </span>
            <AiOutlineRight className='h-[14px] w-[14px]' />
          </div>
          {/* List of Items */}
          {datas.map((item, index) => (
            <button
              onClick={() => item.onClick(data)}
              key={index}
              className={`flex h-[36px] w-[190px] items-center gap-4 border p-1 text-[12px] text-[#71717A] hover:text-subMain`}
            >
              {item.icon && (
                <item.icon className='text-md h-[25px] w-[25px] text-[#71717A]' />
              )}
              {item.title}
            </button>
          ))}
          {/* Additional Items */}
          <div className='border-t-2 pt-2'>
            {["Dark mode", "Settings", "Languages", "Help", "Logout"].map(
              (item, index) => (
                <span
                  key={index}
                  className={`text-[12px] text-[#71717A] text-[Gilroy-Medium]`}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
}

// select
export function MenuSelect({ children, datas, item: data }) {
  return (
    <div className='relative w-full text-sm'>
      <Menu>
        <Menu.Button>{children}</Menu.Button>
        <Menu.Items
          className='absolute right-8 z-50 flex max-h-[500px] flex-col gap-1 overflow-y-auto rounded-md bg-white px-6 py-4 shadow-lg ring-1 ring-border focus:outline-none'
          style={{ scrollbarWidth: "none" }}
        >
          {datas.map((item, index) => (
            <button
              onClick={() => item.onClick(data)}
              key={index}
              className={`flex items-center gap-4 p-1 text-[12px] text-[#71717A] hover:text-subMain`}
            >
              {item.icon && <item.icon className='text-md' />}
              {item.title}
            </button>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
}

// select 2

export function Select({ children, selectedPerson, setSelectedPerson, datas }) {
  return (
    <div className='relative w-full text-sm'>
      <div className='w-full'>
        <Listbox value={selectedPerson} onChange={setSelectedPerson}>
          <Listbox.Button className={"w-full"}>{children}</Listbox.Button>
          <Listbox.Options className='absolute left-0 top-10 z-50 flex w-full flex-col gap-4 rounded-md bg-white px-6 py-4 shadow-lg ring-1 ring-border focus:outline-none'>
            {datas.map((person) => (
              <Listbox.Option
                className={`cursor-pointer text-xs hover:text-subMain`}
                key={person.id}
                value={person}
                disabled={person.unavailable}
              >
                {person.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  );
}

// switch

export function Switchi({ checked, onChange }) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={`${checked ? "bg-subMain" : "bg-border"} transitions relative inline-flex w-12 cursor-pointer rounded-full p-[2px]`}
    >
      <span
        aria-hidden='true'
        className={`${checked ? "translate-x-5" : "translate-x-0"} transitions pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow-lg`}
      />
    </Switch>
  );
}

// textarea

export function Textarea({ label, name, register, placeholder, rows }) {
  return (
    <div className='w-full text-sm'>
      <label className={"text-sm text-black"}>{label}</label>
      <textarea
        name={name}
        rows={rows}
        {...register}
        placeholder={placeholder}
        className={`mt-3 w-full rounded border border-border bg-transparent p-4 text-sm font-light focus:border-subMain`}
      />
    </div>
  );
}

// date picker

export function DatePickerComp({ label, startDate, onChange }) {
  return (
    <div className='w-full text-sm'>
      <label className={"text-sm text-black"}>{label}</label>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        className='mt-3 w-full rounded-lg border border-border bg-transparent p-4 text-sm font-light focus:border focus:border-subMain'
      />
    </div>
  );
}

// time picker

export function TimePickerComp({ label, startDate, onChange }) {
  return (
    <div className='w-full text-sm'>
      <label className={"text-sm text-black"}>{label}</label>
      <DatePicker
        selected={startDate}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption='Time'
        dateFormat='h:mm aa'
        className='mt-3 w-full rounded-lg border border-border bg-transparent p-4 text-sm font-light focus:border focus:border-subMain'
      />
    </div>
  );
}

// checkbox

export function Checkbox({ label, name, onChange, checked }) {
  return (
    <div className='flex w-full flex-row items-center text-sm'>
      {/* design checkbox */}
      <label className='flex-colo relative cursor-pointer'>
        <input
          type='checkbox'
          name={name}
          checked={checked}
          onChange={onChange}
          className='absolute h-0 w-0 opacity-0'
        />
        <span
          className={`mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border ${
            checked ? "border-subMain bg-subMain" : "border-gray-300 bg-white"
          }`}
        >
          <FaCheck
            className={`text-[10px] ${checked ? "block text-white" : "hidden"}`}
          />
        </span>
      </label>

      {label && <p className={"ml-2 text-xs text-black"}>{label}</p>}
    </div>
  );
}

// from to date picker

export function FromToDate({ label, startDate, onChange, endDate, bg }) {
  return (
    <div className='flex w-full flex-col gap-2 text-sm'>
      {label && <label className={"text-sm text-black"}>{label}</label>}
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={onChange}
        className={`w-full ${
          bg ? bg : "bg-transparent"
        } h-14 rounded-lg border border-border px-4 text-xs font-normal text-main focus:border focus:border-subMain`}
      />
    </div>
  );
}
