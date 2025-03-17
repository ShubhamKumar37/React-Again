import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import PersonalInfo from "../../components/UsedComp/PersonalInfo";
import ChangePassword from "../../components/UsedComp/ChangePassword";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import PatientsUsed from "../../components/UsedComp/PatientsUsed";
import AppointmentsUsed from "../../components/UsedComp/AppointmentsUsed";
import { doctorTab } from "../../components/Datas";
import PaymentsUsed from "../../components/UsedComp/PaymentUsed";
import InvoiceUsed from "../../components/UsedComp/InvoiceUsed";
import Access from "../../components/Access";
import DoCare from "../../components/DoCare";
import { BaseUrl } from "../../Assets/Data";

function DoctorProfile() {
  const [activeTab, setActiveTab] = React.useState(2);
  const [access, setAccess] = React.useState({});
  const [doctor, setDoctor] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchDoctor = async () => {
    try {
      const response = await fetch(`${BaseUrl}/doctor/getDoctorProfile/${id}`);
      const json = await response.json();
      setDoctor(json.data);
    } catch (e) {
      console.log("error fetching doctor...", e);
    }
  };

  useEffect(() => {
    fetchDoctor();
  }, []);

  const tabPanel = () => {
    switch (activeTab) {
      case 1:
        return <PersonalInfo titles={true} />;
      case 2:
        return <PatientsUsed />;
      case 3:
        return <AppointmentsUsed doctor={true} />;
      case 4:
        return <PaymentsUsed doctor={true} />;
      case 5:
        return <InvoiceUsed />;
      case 6:
        return <DoCare id={id} />;
      case 7:
        return <ChangePassword />;
      default:
        return;
    }
  };

  return (
    <Layout>
      <div className='flex items-center gap-4'>
        <input
          type='text'
          placeholder='Search "Patients"'
          className='h-12 w-[50%] rounded-md border border-border bg-dry px-4 text-sm text-main md:w-96'
        />
      </div>
      <div className='my-8 grid grid-cols-12 items-start gap-6'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='100'
          data-aos-offset='200'
          className='flex-colo top-28 col-span-12 gap-6 rounded-xl border-[1px] border-border bg-white p-6 lg:sticky lg:col-span-4'
        >
          <div
            className='flex w-full flex-row items-center rounded-md p-4 hover:bg-text hover:text-subMain'
            onClick={() => navigate("/profile")}
          >
            <img
              src={doctor?.doctorImage}
              alt='setting'
              className='h-20 w-20 rounded-full border border-dashed border-subMain object-cover'
            />
            <div className='ml-4 flex w-[50%] flex-col items-start'>
              <h2 className='h-4 text-sm font-semibold'>ّٗ{doctor.fullName}</h2>
              <p className='h-2 text-xs text-textGray'>{doctor.emailId}</p>
              <p className='h-0 text-xs'>{doctor.registrationNumber}</p>
            </div>
          </div>
          {/* tabs */}
          <div className='grid w-full grid-cols-3 items-center gap-3 px-2 2xl:px-12'>
            {doctorTab.map((tab, index) => (
              <button
                onClick={() => setActiveTab(tab.id)}
                key={index}
                className={` ${
                  activeTab === tab.id
                    ? "bg-text text-subMain"
                    : "bg-dry text-main hover:bg-text hover:text-subMain"
                } flex h-[100px] flex-col items-center justify-center rounded text-xs`}
              >
                <tab.icon className='text-lg' />
                <span className='pt-2'>{tab.title}</span>
              </button>
            ))}
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
          {tabPanel()}
        </div>
      </div>
    </Layout>
  );
}

export default DoctorProfile;
