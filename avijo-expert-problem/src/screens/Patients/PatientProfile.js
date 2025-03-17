import React, { useEffect } from "react";
import Layout from "../../Layout";
import { patientTab } from "../../components/Datas";
import { Link, useParams } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import MedicalRecord from "./MedicalRecord";
import AppointmentsUsed from "../../components/UsedComp/AppointmentsUsed";
import InvoiceUsed from "../../components/UsedComp/InvoiceUsed";
import PaymentsUsed from "../../components/UsedComp/PaymentUsed";
import PersonalInfo from "../../components/UsedComp/PersonalInfo";
import PatientImages from "./PatientImages";
import HealthInfomation from "./HealthInfomation";
import DentalChart from "./DentalChart";
import { PatientChat } from "./PatientChat";
import { BaseUrl } from "../../Assets/Data";

function PatientProfile() {
  const [activeTab, setActiveTab] = React.useState(1);
  const [patient, setPatient] = React.useState({});
  const { id } = useParams();

  const fetchDoctor = async () => {
    try {
      const response = await fetch(
        `${BaseUrl}/doctor/patientReportGetSingle/${id}`
      );
      const json = await response.json();
      console.log("json0:", json);
      setPatient(json.data);
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
        return <MedicalRecord />;
      case 2:
        return <AppointmentsUsed doctor={false} />;
      case 3:
        return <InvoiceUsed />;
      case 4:
        return <PaymentsUsed doctor={false} />;
      case 5:
        return <PatientImages />;
      case 6:
        return <PatientChat />;
      case 7:
        return <PersonalInfo titles={false} />;
      case 8:
        return <HealthInfomation />;
      default:
        return;
    }
  };

  return (
    <Layout>
      <div className='flex items-center gap-4'>
        <Link
          to='/patients'
          className='text-md rounded-lg border border-dashed border-subMain bg-white px-4 py-3'
        >
          <IoArrowBackOutline />
        </Link>
        <h1 className='text-xl font-semibold'>{}</h1>
      </div>
      <div className='my-8 grid grid-cols-12 items-start gap-6'>
        <div
          data-aos='fade-right'
          data-aos-duration='1000'
          data-aos-delay='100'
          data-aos-offset='200'
          className='flex-colo top-28 col-span-12 gap-6 rounded-xl border-[1px] border-border bg-white p-6 lg:sticky lg:col-span-4'
        >
          <div className='flex w-full flex-row items-center rounded-md p-4 hover:bg-text hover:text-subMain'>
            <img
              src='/images/user7.png'
              alt='setting'
              className='h-20 w-20 rounded-full border border-dashed border-subMain object-cover'
            />
            <div className='ml-4 flex w-[50%] flex-col items-start'>
              <h2 className='h-4 text-sm font-semibold'>{patient?.patient}</h2>
              <p className='h-2 text-xs text-textGray'>{patient?.gender}</p>
              <p className='h-0 text-xs'>{patient?.age}</p>
            </div>
          </div>
          {/* tabs */}
          <div className='grid w-full grid-cols-3 items-center gap-3 px-2 2xl:px-12'>
            {patientTab.map((tab, index) => (
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

export default PatientProfile;
