import React, { useEffect, useState } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { toast } from "react-hot-toast";
import { BiPlus } from "react-icons/bi";
import Layout from "../Layout";
import { Button } from "../components/Form";
import { DoctorsTable, FacilityTable } from "../components/Tables";
import { doctorsData } from "../components/Datas";
import { useNavigate } from "react-router-dom";
import AddDoctorModal from "../components/Modals/AddDoctorModal";
import AddFacilityModal from "../components/Modals/AddFacilityModal";
import { BaseUrl } from "../Assets/Data";

// const facilityData = [
//   {
//     id:0,
//     name:'Micheal',
//     image:'/images/user1.png',
//     invitationFor:'Partnership',
//     type:'Labs & Pharmacy',
//     email:'example@abdm'
//   },
//   {
//     id:1,
//     name:'Micheal',
//     image:'/images/user2.png',
//     invitationFor:'Ownership',
//     type:'Riadiology',
//     email:'example@gmail.com'
//   },
//   {
//     id:2,
//     name:'Micheal',
//     image:'/images/user1.png',
//     invitationFor:'Partnership',
//     type:'Clinics',
//     email:'example@abdm'
//   },
//   {
//     id:3,
//     name:'Micheal',
//     image:'/images/user2.png',
//     invitationFor:'Ownership',
//     type:'Clinics',
//     email:'example@gmail.com'
//   }
// ]

function Facility() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [facilityData, setFacilityData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${BaseUrl}/facility/getAll/facilityProfile`
      );
      const json = await response.json();
      setFacilityData(json.data);
      console.log("json:", json.data);
    } catch (e) {
      console.log("error fetching...", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onCloseModal = () => {
    setIsOpen(false);
  };

  const preview = (data) => {
    navigate(`/doctors/preview/${data.id}`);
  };

  return (
    <Layout>
      {
        // add doctor modal
        isOpen && (
          <AddFacilityModal
            closeModal={onCloseModal}
            isOpen={isOpen}
            doctor={true}
            datas={null}
          />
        )
      }

      {/* add button */}
      <button
        onClick={() => setIsOpen(true)}
        className='flex-colo button-fb fixed bottom-8 right-12 z-50 h-16 w-16 animate-bounce rounded-full border border-border bg-subMain text-white'
      >
        <BiPlus className='text-2xl' />
      </button>
      <div className='mb-6 flex flex-row items-end'>
        <h1 className='text-[38px] font-[600] text-black'>avijo</h1>
        <h6 className='text-[24px] font-[500] italic text-[#12CDB7]'>Alpha</h6>
      </div>

      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='100'
        data-aos-offset='200'
        className='my-8 rounded-xl border-[1px] border-border bg-white p-5'
      >
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-6'>
          <div className='grid items-center gap-6 md:col-span-5 lg:grid-cols-4'>
            <input
              type='text'
              placeholder='Search "daudi mburuge"'
              className='h-14 w-full rounded-md border border-border bg-dry px-4 text-sm text-main'
            />
          </div>

          {/* export */}
          <Button
            label='Export'
            Icon={MdOutlineCloudDownload}
            onClick={() => {
              toast.error("Exporting is not available yet");
            }}
          />
        </div>

        <div className='mt-8 w-full overflow-x-scroll'>
          <FacilityTable
            doctor={true}
            data={facilityData}
            functions={{
              preview: preview,
            }}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Facility;
