import React, { useEffect, useState } from "react";
import { Button } from "../../components/Form";
import { BiPlus } from "react-icons/bi";
import { FiEye } from "react-icons/fi";
import { toast } from "react-hot-toast";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { medicalRecodData } from '../../components/Datas';
import MedicalRecodModal from "../../components/Modals/MedicalRecodModal";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl, formatDate } from "../../Assets/Data";

function MedicalRecord() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [datas, setDatas] = React.useState({});
  const [medicalRecodData, setMedicalRecordData] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await fetch(`${BaseUrl}/doctor/medicalRecords`);
      const json = await response.json();
      setMedicalRecordData(json.data);
      console.log("json:", json.data);
    } catch (e) {
      console.log("error fetching...", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        // Modal
        isOpen && (
          <MedicalRecodModal
            closeModal={() => {
              setIsOpen(false);
              setDatas({});
            }}
            isOpen={isOpen}
            datas={datas}
          />
        )
      }
      <div className='flex flex-col gap-6'>
        <div className='flex-btn gap-4'>
          <h1 className='hidden text-sm font-medium sm:block'>
            Medical Record
          </h1>
          <div className='w-full sm:w-1/4'>
            <Button
              label='New Record'
              Icon={BiPlus}
              onClick={() => {
                navigate(`/patients/visiting/${id}`);
              }}
            />
          </div>
        </div>
        {medicalRecodData?.map((data) => (
          <div
            key={data._id}
            className='grid grid-cols-12 items-start gap-4 rounded-xl border-[1px] border-border bg-dry p-6'
          >
            <div className='col-span-12 md:col-span-2'>
              <p className='text-xs font-medium text-textGray'>
                {formatDate(data.date)}
              </p>
            </div>
            <div className='col-span-12 flex flex-col gap-2 md:col-span-6'>
              <div className='flex flex-row items-center'>
                <span className='font-medium'>complaint:</span>{" "}
                <p className='pl-2 text-xs font-light text-main'>
                  <span className='font-medium'>
                    {data.complaint.length > 40
                      ? data?.complaint.slice(0, 40)
                      : data?.complaint}
                  </span>{" "}
                </p>
              </div>
              <div className='flex flex-row items-center'>
                <span className='font-medium'>diagnosis:</span>{" "}
                <p className='pl-2 text-xs font-light text-main'>
                  <span className='font-medium'>
                    {data.diagnosis.length > 40
                      ? data?.diagnosis.slice(0, 40)
                      : data?.diagnosis}
                  </span>{" "}
                </p>
              </div>
              <div className='flex flex-row items-center'>
                <span className='font-medium'>treatment:</span>{" "}
                <p className='pl-2 text-xs font-light text-main'>
                  <span className='font-medium'>
                    {data.treatment.length > 40
                      ? data?.treatment.slice(0, 40)
                      : data?.treatment}
                  </span>{" "}
                </p>
              </div>
              <div className='flex flex-row items-center'>
                <span className='font-medium'>prescription:</span>{" "}
                <p className='pl-2 text-xs font-light text-main'>
                  <span className='font-medium'>
                    {data.prescription.length > 40
                      ? data?.prescription.slice(0, 40)
                      : data?.prescription}
                  </span>{" "}
                </p>
              </div>
              {/* {data?.data?.map((item, index) => (
                <p key={item.id} className="text-xs text-main font-light">
                  <span className="font-medium">{item?.title}:</span>{' '}
                  {
                    // if value character is more than 40, show only 40 characters
                    item?.value?.length > 40
                      ? `${item?.value?.slice(0, 40)}...`
                      : item?.value
                  }
                </p>
              ))} */}
            </div>
            {/* price */}
            <div className='col-span-12 md:col-span-2'>
              <p className='text-xs font-semibold text-subMain'>
                <span className='font-light text-main'>(Tsh)</span> {data?.tsh}
              </p>
            </div>
            {/* actions */}
            <div className='flex-rows col-span-12 gap-2 md:col-span-2'>
              <button
                onClick={() => {
                  setIsOpen(true);
                  setDatas(data);
                }}
                className='flex-colo h-10 w-2/4 rounded-md border border-border bg-white text-sm text-subMain md:w-10'
              >
                <FiEye />
              </button>
              <button
                onClick={() => {
                  toast.error("This feature is not available yet");
                }}
                className='flex-colo h-10 w-2/4 rounded-md border border-border bg-white text-sm text-red-600 md:w-10'
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MedicalRecord;
