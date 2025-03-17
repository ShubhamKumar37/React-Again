import React, { useState } from "react";
import Layout from "../../Layout";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { invoicesData, transactionData } from "../../components/Datas";
import ShareModal from "../../components/Modals/ShareModal";
import { RiShareBoxLine } from "react-icons/ri";
import { MdOutlineCloudDownload } from "react-icons/md";
import { AiOutlinePrinter } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { InvoiceProductsTable } from "../../components/Tables";
import SenderReceverComp from "../../components/SenderReceverComp";

function PreviewPayment() {
  const { id } = useParams();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const payment = transactionData.find((item) => item.id.toString() === id);
  const buttonClass =
    "bg-subMain flex-rows gap-3 bg-opacity-5 text-subMain rounded-lg border border-subMain border-dashed px-4 py-3 text-sm";

  return (
    <Layout>
      {isShareOpen && (
        <ShareModal
          isOpen={isShareOpen}
          closeModal={() => {
            setIsShareOpen(false);
          }}
        />
      )}
      <div className='flex-btn flex-wrap gap-4'>
        <div className='flex items-center gap-4'>
          <Link
            to='/payments'
            className='text-md rounded-lg border border-dashed border-subMain bg-white px-4 py-3'
          >
            <IoArrowBackOutline />
          </Link>
          <h1 className='text-xl font-semibold'>Preview Payment</h1>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
          {/* button */}
          <button
            onClick={() => {
              setIsShareOpen(true);
            }}
            className={buttonClass}
          >
            Share <RiShareBoxLine />
          </button>
          <button
            onClick={() => {
              toast.error("This feature is not available yet");
            }}
            className={buttonClass}
          >
            Download <MdOutlineCloudDownload />
          </button>
          <button
            onClick={() => {
              toast.error("This feature is not available yet");
            }}
            className={buttonClass}
          >
            Print <AiOutlinePrinter />
          </button>
          <Link to={`/payments/edit/` + payment?.id} className={buttonClass}>
            Edit <FiEdit />
          </Link>
        </div>
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
            <div className='overflow-x-scroll rounded-xl border border-border p-6'>
              <InvoiceProductsTable
                data={invoicesData[2]?.items}
                functions={{}}
                button={false}
              />
            </div>
          </div>
          <div className='col-span-6 flex flex-col gap-6 lg:col-span-2'>
            <div className='flex-btn gap-4'>
              <p className='text-sm font-extralight'>Paid By:</p>
              <h6 className='text-sm font-medium'>NHCF</h6>
            </div>
            <div className='flex-btn gap-4'>
              <p className='text-sm font-extralight'>Currency:</p>
              <h6 className='text-sm font-medium'>USD ($)</h6>
            </div>
            <div className='flex-btn gap-4'>
              <p className='text-sm font-extralight'>Sub Total:</p>
              <h6 className='text-sm font-medium'>$459</h6>
            </div>
            <div className='flex-btn gap-4'>
              <p className='text-sm font-extralight'>Discount:</p>
              <h6 className='text-sm font-medium'>$49</h6>
            </div>
            <div className='flex-btn gap-4'>
              <p className='text-sm font-extralight'>Tax:</p>
              <h6 className='text-sm font-medium'>$4.90</h6>
            </div>
            <div className='flex-btn gap-4'>
              <p className='text-sm font-extralight'>Grand Total:</p>
              <h6 className='text-sm font-medium text-green-600'>$6000</h6>
            </div>
            {/* notes */}
            <div className='w-full rounded-lg border border-border p-4'>
              <h1 className='text-sm font-medium'>Notes</h1>
              <p className='mt-2 text-xs font-light leading-5'>
                Thank you for your business. We hope to work with you again
                soon. You can pay your invoice online at
                www.example.com/payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PreviewPayment;
