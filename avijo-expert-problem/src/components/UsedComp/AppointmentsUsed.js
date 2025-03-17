import { useEffect, useState } from "react";
// import { appointmentsData } from '../Datas';
import AddAppointmentModal from "../Modals/AddApointmentModal";
import { AppointmentTable } from "../Tables";
import { BaseUrl } from "../../Assets/Data";

function AppointmentsUsed({ doctor }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [appointmentsData, setAppointmentsData] = useState([]);

  const fetchAppoint = async () => {
    try {
      const response = await fetch(`${BaseUrl}/user/appointments`);
      const json = await response.json();
      setAppointmentsData(json.appointments);
    } catch (e) {
      console.log("error fetching doctor...", e);
    }
  };

  useEffect(() => {
    fetchAppoint();
  }, []);

  // onClick event handler
  const handleEventClick = (event) => {
    setData(event);
    setOpen(!open);
  };
  // handle modal close
  const handleClose = () => {
    setOpen(!open);
    setData({});
  };
  return (
    <div className='w-full'>
      {open && (
        <AddAppointmentModal
          datas={data}
          isOpen={open}
          closeModal={() => {
            handleClose();
          }}
        />
      )}
      <h1 className='mb-6 text-sm font-medium'>Appointments</h1>
      <div className='w-full overflow-x-scroll'>
        <AppointmentTable
          data={appointmentsData}
          doctor={doctor}
          functions={{
            preview: handleEventClick,
          }}
        />
      </div>
    </div>
  );
}

export default AppointmentsUsed;
