import React, { useState } from "react";
import Layout from "../../Layout";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Select, Textarea } from "../../components/Form";
import { BsSend } from "react-icons/bs";
import {
  invoicesData,
  sortsDatas,
  transactionData,
} from "../../components/Datas";
import { BiChevronDown } from "react-icons/bi";
import SenderReceverComp from "../../components/SenderReceverComp";
import { InvoiceProductsTable } from "../../components/Tables";

const paymentDetails = [
  { label: "Paid By:", value: "NHCF" },
  { label: "Currency:", value: "USD ($)" },
  { label: "Sub Total:", value: "$459" },
  { label: "Discount:", value: "$49" },
  { label: "Tax:", value: "$4.90" },
  { label: "Grand Total:", value: "$6000" },
];

function EditPayment() {
  const { id } = useParams();
  const [selected, setSelected] = useState(sortsDatas.status[1]);
  const payment = transactionData.find((item) => item.id.toString() === id);

  return (
    <Layout>
      <div className='flex items-center gap-4'>
        <Link
          to='/payments'
          className='text-md rounded-lg border border-dashed border-subMain bg-white px-4 py-3'
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className='text-xl font-semibold'>Edit Payment</h1>
      </div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='100'
        data-aos-offset='200'
        className='my-8 rounded-xl border-[1px] border-border bg-white p-5'
      >
        {/* header */}
        <div className='grid grid-cols-1 items-center gap-2 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='flex items-center gap-2 lg:col-span-3'>
            <img
              src='/images/logo.png'
              alt='logo'
              className='w-32 object-contain'
            />
            <span
              className={`px-4 text-xs ${
                payment.status === "Paid"
                  ? "border-subMain bg-subMain text-subMain"
                  : payment.status === "Pending"
                    ? "border-orange-500 bg-orange-500 text-orange-500"
                    : payment.status === "Cancel" &&
                      "border-red-600 bg-red-600 text-red-600"
              } rounded-full border border-opacity-40 bg-opacity-10 py-1`}
            >
              {payment.status}
            </span>
          </div>

          <div className='flex flex-col gap-4 sm:items-end'>
            <h6 className='text-xs font-medium'>#78291</h6>
            <div className='flex gap-4'>
              <p className='text-sm font-extralight'>Date:</p>
              <h6 className='text-xs font-medium'>12/4/2023</h6>
            </div>
            <div className='flex gap-4'>
              <p className='text-sm font-extralight'>Due Date:</p>
              <h6 className='text-xs font-medium'>15/4/2023</h6>
            </div>
          </div>
        </div>
        {/* sender and recever */}
        <SenderReceverComp item={payment.user} functions={{}} button={false} />
        {/* products */}
        <div className='mt-8 grid grid-cols-6 items-start gap-6'>
          <div className='col-span-6 lg:col-span-4'>
            <div className='w-full overflow-x-scroll rounded-xl border border-border p-6'>
              <InvoiceProductsTable
                data={invoicesData[2]?.items}
                functions={{}}
                button={false}
              />
            </div>
            {/* notes */}
            <div className='my-8 w-full'>
              <p className='mb-3 text-sm'>Change Status</p>
              <Select
                selectedPerson={selected}
                setSelectedPerson={setSelected}
                datas={sortsDatas?.status}
              >
                <div className='flex h-14 w-full items-center justify-between rounded-md border border-border px-4 text-xs text-main'>
                  <p>{selected?.name}</p>
                  <BiChevronDown className='text-xl' />
                </div>
              </Select>
            </div>
            <Textarea
              label='Notes'
              placeholder='Thank you for your business. We hope to work with you again soon!'
              color={true}
              rows={3}
            />
          </div>
          <div className='col-span-6 flex flex-col gap-6 lg:col-span-2'>
            {paymentDetails.map((item, index, array) => (
              <div key={index} className='flex-btn gap-4'>
                <p className='text-sm font-extralight'>{item.label}</p>
                <h6
                  className={`text-sm font-medium ${index === array.length - 1 ? "text-green-600" : ""}`}
                >
                  {item.value}
                </h6>
              </div>
            ))}

            <Button
              label='Update'
              onClick={() => {
                toast.error("This feature is not available yet");
              }}
              Icon={BsSend}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditPayment;
