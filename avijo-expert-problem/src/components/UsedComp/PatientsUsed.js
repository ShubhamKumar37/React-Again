import React, { useEffect, useState } from "react";
import { PatientTable } from "../Tables";
import { useNavigate } from "react-router-dom";
import { memberData } from "../Datas";
import { BaseUrl } from "../../Assets/Data";

function PatientsUsed() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  // preview
  const preview = (id) => {
    navigate(`/patients/preview/${id}`);
  };

  const fetchPatients = async () => {
    try {
      const response = await fetch(`${BaseUrl}/doctor/patientReportGetAll`);
      const json = await response.json();
      setPatients(json.data);
    } catch (e) {
      console.log("error fetching doctor...", e);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  return (
    <div className='w-full'>
      <h1 className='mb-6 text-sm font-medium'>Patients</h1>
      <div className='w-full overflow-x-scroll'>
        <PatientTable
          used={true}
          data={patients}
          functions={{
            preview: preview,
          }}
        />
      </div>
    </div>
  );
}

export default PatientsUsed;
