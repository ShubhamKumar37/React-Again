import React, { useState } from "react";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { Button, Checkbox, Select, Textarea } from "../../components/Form";
import { BiChevronDown, BiPlus } from "react-icons/bi";
import { medicineData, memberData, servicesData } from "../../components/Datas";
import { MedicineDosageTable } from "../../components/Tables";
import { toast } from "react-hot-toast";
import MedicineDosageModal from "../../components/Modals/MedicineDosage";
import { FaTimes } from "react-icons/fa";
import Uploader from "../../components/Uploader";
import { HiOutlineCheckCircle } from "react-icons/hi";

const doctorsData = memberData.map((item) => {
  return {
    id: item.id,
    name: item.title,
  };
});

function NewMedicalRecode() {
  const [doctors, setDoctors] = useState(doctorsData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [treatmeants, setTreatmeants] = useState(
    servicesData.map((item) => {
      return {
        name: item.name,
        checked: false,
        price: item.price,
      };
    })
  );

  // on change treatmeants
  const onChangeTreatmeants = (e) => {
    const { name, checked } = e.target;
    const newTreatmeants = treatmeants.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          checked: checked,
        };
      }
      return item;
    });
    setTreatmeants(newTreatmeants);
  };

  return (
    <Layout>
      {
        // modal
        isOpen && (
          <MedicineDosageModal
            isOpen={isOpen}
            closeModal={() => {
              setIsOpen(false);
            }}
          />
        )
      }
      <div className='flex items-center gap-4'>
        <Link
          to={`/patients/preview/1`}
          className='text-md rounded-lg border border-dashed border-subMain bg-white px-4 py-3'
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className='text-xl font-semibold'>New Medical Record</h1>
      </div>
      <div className='my-8 grid grid-cols-12 items-start gap-6'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='100'
          data-aos-offset='200'
          className='flex-colo top-28 col-span-12 gap-6 rounded-xl border-[1px] border-border bg-white p-6 lg:sticky lg:col-span-4'
        >
          <img
            src='/images/user7.png'
            alt='setting'
            className='h-40 w-40 rounded-full border border-dashed border-subMain object-cover'
          />
          <div className='flex-colo gap-2'>
            <h2 className='text-sm font-semibold'>Amani Mmassy</h2>
            <p className='text-xs text-textGray'>amanimmassy@gmail.com</p>
            <p className='text-xs'>+254 712 345 678</p>
            <p className='rounded-full border-[0.5px] border-subMain bg-text px-4 py-1 text-xs font-medium text-subMain'>
              45 yrs{" "}
            </p>
          </div>
        </div>
        {/* tab panel */}
        <div
          data-aos='fade-left'
          data-aos-duration='1000'
          data-aos-delay='100'
          data-aos-offset='200'
          className='col-span-12 rounded-xl border-[1px] border-border bg-white p-6 lg:col-span-8'
        >
          <div className='flex w-full flex-col gap-5'>
            {/* doctor */}
            <div className='flex w-full flex-col gap-3'>
              <p className='text-sm text-black'>Doctor</p>
              <Select
                selectedPerson={doctors}
                setSelectedPerson={setDoctors}
                datas={doctorsData}
              >
                <div className='flex-btn w-full rounded-lg border border-border p-4 text-sm font-light text-textGray focus:border focus:border-subMain'>
                  {doctors.name} <BiChevronDown className='text-xl' />
                </div>
              </Select>
            </div>
            {/* complains */}
            <Textarea
              label='Complains'
              color={true}
              rows={3}
              placeholder={"Bad breath, toothache, ...."}
            />
            {/* Diagnosis */}
            <Textarea
              label='Diagnosis'
              color={true}
              rows={3}
              placeholder={"Gingivitis, Periodontitis, ...."}
            />
            {/* Vital Signs */}
            <Textarea
              label='Vital Signs'
              color={true}
              rows={3}
              placeholder={"Blood pressure, Pulse, ...."}
            />
            {/* Treatment */}
            <div className='flex w-full flex-col gap-4'>
              <p className='text-sm text-black'>Treatment</p>
              <div className='grid gap-6 pb-6 xs:grid-cols-2 md:grid-cols-3'>
                {servicesData?.slice(1, 100).map((item) => (
                  <Checkbox
                    label={item.name}
                    checked={
                      treatmeants.find((i) => i.name === item.name).checked
                    }
                    onChange={onChangeTreatmeants}
                    name={item.name}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
            {/* medicine */}
            <div className='mb-6 flex w-full flex-col gap-4'>
              <p className='text-sm text-black'>Medicine</p>
              <div className='w-full overflow-x-scroll'>
                <MedicineDosageTable
                  data={medicineData?.slice(0, 3)}
                  functions={{
                    delete: (id) => {
                      toast.error("This feature is not available yet");
                    },
                  }}
                  button={true}
                />
              </div>
              <button
                onClick={() => {
                  setIsOpen(true);
                }}
                className='flex-rows w-full gap-2 rounded-lg border border-dashed border-subMain py-4 text-sm text-subMain'
              >
                <BiPlus /> Add Medicine
              </button>
            </div>
            {/* attachment */}
            <div className='flex w-full flex-col gap-4'>
              <p className='text-sm text-black'>Attachments</p>
              <div className='grid w-full gap-4 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                {[1, 2, 3, 4].map((_, i) => (
                  <div className='relative w-full'>
                    <img
                      src={`https://placehold.it/300x300?text=${i}`}
                      alt='patient'
                      className='w-full rounded-lg object-cover md:h-40'
                    />
                    <button
                      onClick={() =>
                        toast.error("This feature is not available yet.")
                      }
                      className='flex-colo absolute -right-1 -top-1 h-8 w-8 rounded-full bg-white'
                    >
                      <FaTimes className='text-red-500' />
                    </button>
                  </div>
                ))}
              </div>
              <Uploader setImage={{}} />
            </div>
            {/* submit */}
            <Button
              label={"Save"}
              Icon={HiOutlineCheckCircle}
              onClick={() => {
                toast.error("This feature is not available yet");
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default NewMedicalRecode;
