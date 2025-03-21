import React from "react";
import { Button, Input, Select, Textarea } from "../Form";
import { BiChevronDown } from "react-icons/bi";
import Uploder from "../Uploader";
import { toast } from "react-hot-toast";

const sendToData = [
  {
    id: 1,
    name: "All Patients",
    value: "all",
  },
  {
    id: 2,
    name: "NHCF Patients",
    value: "nhcf",
  },
  {
    id: 3,
    name: "Britam Patients",
    value: "britam",
  },
];

function EmailComp({ data }) {
  const [sendTo, setSendTo] = React.useState(sendToData[0].name);
  const [image, setImage] = React.useState(null);

  // useEffect
  React.useEffect(() => {
    if (data?.id) {
      setSendTo(data.sendTo);
      setImage(data.image);
    }
  }, [data]);

  return (
    <div className='mt-6 flex w-full flex-col gap-4'>
      {/* title */}
      <Input
        label='Campaign Title'
        color={true}
        placeholder={data?.id && data?.title}
      />
      {/* send to */}
      <div className='grid gap-4 sm:grid-cols-2'>
        <div className='flex w-full flex-col gap-3'>
          <p className='text-sm'>Send To</p>
          <Select
            selectedPerson={sendTo}
            setSelectedPerson={setSendTo}
            datas={sendToData}
          >
            <div className='flex h-14 w-full items-center justify-between rounded-md border border-border bg-white px-4 text-xs text-main'>
              <p>{sendTo}</p>
              <BiChevronDown className='text-xl' />
            </div>
          </Select>
        </div>
        {/* subject */}
        <Input
          label='Email subject'
          color={true}
          placeholder={data?.id && data?.action?.subject}
        />
      </div>
      {/* headers */}
      <div className='grid gap-4 sm:grid-cols-2'>
        <Input
          label='Header'
          color={true}
          placeholder={data?.id && data?.action?.header}
        />
        <Input
          label='Sub-header'
          color={true}
          placeholder={data?.id && data?.action?.subHeader}
        />
      </div>
      {/* message */}
      <Textarea
        label='Message'
        placeholder={
          data?.id ? data?.action?.message : "Dear Delight patient ...."
        }
        color={true}
        rows={5}
      />

      {/* uploader */}
      <div className='col-span-6 flex flex-col gap-3'>
        <p className='text-sm'>Image (option)</p>
        <Uploder />
      </div>
      {/* button */}
      {!data?.id && (
        <Button
          label={"Send Campaign"}
          onClick={() => {
            toast.error("This feature is not available yet");
          }}
        />
      )}
    </div>
  );
}

export default EmailComp;
