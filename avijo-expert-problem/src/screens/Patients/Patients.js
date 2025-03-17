import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import { memberData, sortsDatas } from "../../components/Datas";
import { Link, useNavigate } from "react-router-dom";
import { BiChevronDown, BiPlus, BiTime } from "react-icons/bi";
import { BsCalendarMonth } from "react-icons/bs";
import { MdFilterList, MdOutlineCalendarMonth } from "react-icons/md";
import { toast } from "react-hot-toast";
import { Button, FromToDate, Select } from "../../components/Form";
import { PatientTable } from "../../components/Tables";
import { BaseUrl } from "../../Assets/Data";

function Patients() {
  const [status, setStatus] = useState(sortsDatas.filterPatient[0]);
  const [gender, setGender] = useState(sortsDatas.genderFilter[0]);
  const [userId, setUserId] = useState(null);
  const [exist, setExist] = useState(false);
  const [appointData, setAppointData] = useState([]);
  const [docData, setDocData] = useState([]);
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;

  const navigate = useNavigate();

  const fetchData2 = async () => {
    const email = localStorage.getItem("email");
    console.log("email:", email);

    const response = await fetch(`${BaseUrl}/doctor/getAllDoctorProfile`);
    const json = await response.json();
    const myGender = json?.data?.find((item) => item.emailId === email);
    const myProfile = json.data?.find(
      (item) => item.emailId === email && item.registrationNumber
    );
    setGender(myGender.gender);
    console.log("profile:", myProfile, myGender.gender);
    if (myProfile) {
      setExist(true);
    } else {
      setExist(false);
    }
  };

  const fetchData = async () => {
    const id = localStorage.getItem("id");
    const email = localStorage.getItem("email");
    try {
      const getProfileId = await fetch(`${BaseUrl}/doctor/getAllDoctorProfile`);
      const profileJson = await getProfileId.json();
      const profileId = await profileJson?.data?.find(
        (item) => item?.emailId === email
      );
      console.log("profileId:", profileId?.firebaseToken);

      localStorage.setItem("profileId", profileId._id);

      const response = await fetch(`${BaseUrl}/doctor/doctorAppointment`);
      const response1 = await fetch(`${BaseUrl}/user/appointments`);

      const json = await response.json();
      const json1 = await response1.json();
      const appoints = await json1?.appointments?.filter(
        (item) => item?.doctorId?._id === profileId?._id
      );
      console.log("json1:", appoints, profileId?._id);
      setAppointData(appoints);
      setDocData(json.data.appointments[0]);
      console.log("json:", json.data.appointments[0]);
      if (profileId) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.log("error fetching...", e);
    }
  };

  useEffect(() => {
    fetchData();
    const fetchUserId = async () => {
      const id = localStorage.getItem("id");
      setUserId(id);
    };
    fetchUserId();
    fetchData2();
    // console.log('appoint data:', appointData);
  }, []);

  const sorts = [
    {
      id: 2,
      selected: status,
      setSelected: setStatus,
      datas: sortsDatas.filterPatient,
    },
    {
      id: 3,
      selected: gender,
      setSelected: setGender,
      datas: sortsDatas.genderFilter,
    },
  ];
  // boxes
  const boxes = [
    {
      id: 1,
      title: "Today Patients",
      value: "10",
      color: ["bg-subMain", "text-subMain"],
      icon: BiTime,
    },
    {
      id: 2,
      title: "Monthly Patients",
      value: "230",
      color: ["bg-orange-500", "text-orange-500"],
      icon: BsCalendarMonth,
    },
    {
      id: 3,
      title: "Yearly Patients",
      value: "1,500",
      color: ["bg-green-500", "text-green-500"],
      icon: MdOutlineCalendarMonth,
    },
  ];

  // preview
  const previewPayment = (id) => {
    navigate(`/patients/preview/${id}`);
  };

  return (
    <Layout>
      {/* add button */}
      <Link
        to='/patients/create'
        className='flex-colo button-fb fixed bottom-8 right-12 z-50 h-16 w-16 animate-bounce rounded-full border border-border bg-subMain text-white'
      >
        <BiPlus className='text-2xl' />
      </Link>
      <h1 className='text-xl font-semibold'>Patients</h1>
      {/* boxes */}
      <div className='mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {boxes.map((box) => (
          <div
            key={box.id}
            className='flex-btn gap-4 rounded-xl border-[1px] border-border bg-white p-5'
          >
            <div className='w-3/4'>
              <h2 className='text-sm font-medium'>{box.title}</h2>
              <h2 className='my-6 text-xl font-medium'>{box.value}</h2>
              <p className='text-xs text-textGray'>
                Total Patients <span className={box.color[1]}>{box.value}</span>{" "}
                {box.title === "Today Patients"
                  ? "today"
                  : box.title === "Monthly Patients"
                    ? "this month"
                    : "this year"}
              </p>
            </div>
            <div
              className={`flex-colo text-md h-10 w-10 rounded-md text-white ${box.color[0]}`}
            >
              <box.icon />
            </div>
          </div>
        ))}
      </div>
      {/* datas */}
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='10'
        data-aos-offset='200'
        className='my-8 rounded-xl border-[1px] border-border bg-white p-5'
      >
        <div className='grid grid-cols-1 gap-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
          <input
            type='text'
            placeholder='Search "Patients"'
            className='h-14 rounded-md border border-border bg-dry px-4 text-sm text-main'
          />
          {/* sort  */}
          {sorts.map((item) => (
            <Select
              key={item.id}
              selectedPerson={item.selected}
              setSelectedPerson={item.setSelected}
              datas={item.datas}
            >
              <div className='flex h-14 w-full items-center justify-between rounded-md border border-border bg-dry px-4 text-xs text-main'>
                <p>{item.selected.name}</p>
                <BiChevronDown className='text-xl' />
              </div>
            </Select>
          ))}
          {/* date */}
          <FromToDate
            startDate={startDate}
            endDate={endDate}
            bg='bg-dry'
            onChange={(update) => setDateRange(update)}
          />
          {/* export */}
          <Button
            label='Filter'
            Icon={MdFilterList}
            onClick={() => {
              toast.error("Filter data is not available yet");
            }}
          />
        </div>
        <div className='mt-8 w-full overflow-x-scroll'>
          <PatientTable
            data={appointData}
            functions={{
              preview: previewPayment,
            }}
            used={false}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Patients;
