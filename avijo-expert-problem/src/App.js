// ********* Delight - Dentist Website is created by Zpunet ******************
// ********* If you get an error please contact us ******
// ******** Email:info@codemarketi.com *********
// ********* Website:www.codemarketi.com *********
// ********* Phone:+255 762 352 746 *********
// ********* Youtub Channel: https://www.youtube.com/channel/UCOYwYO-LEsrjqBs6xXSfq1w *********

// ******** Support my work with *********
// ********* https://www.patreon.com/zpunet *********
// ********* https://www.buymeacoffee.com/zpunet *********

// ********* This is the main component of the website *********

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aos from "aos";

import {
  AbdmLogin,
  Appointments,
  Campaings,
  Chat,
  CreateInvoice,
  CreatePatient,
  DoctorProfile,
  EditInvoice,
  EditPayment,
  EditProfile,
  Facility,
  Invoices,
  Medicine,
  NewMedicalRecode,
  NotFound,
  Patients,
  PatientProfile,
  Payments,
  Prescription,
  PrescriptionDetail,
  PreviewInvoice,
  PreviewPayment,
  Profile,
  Receptions,
  Services,
  Settings,
  Support,
} from "./screens/index.js";

import { lazy } from "react";
import { Toaster } from "react-hot-toast";

const Register = lazy(() => import("./screens/Register.jsx"));
const RegisterScreen = lazy(() => import("./screens/RegisterScreen.jsx"));
function App() {
  Aos.init();

  return (
    <>
      {/* Toaster */}
      <Toaster />
      {/* Routes */}
      <BrowserRouter>
        <Routes>
          {/* doctors */}
          <Route path='/' element={<AbdmLogin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/registerPersonalDetail' element={<RegisterScreen />} />
          {/* <Route path="/doctors" element={<Doctors />} /> */}
          <Route path='/doctors/preview/:id' element={<DoctorProfile />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/support' element={<Support />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* invoce */}
          <Route path='/invoices' element={<Invoices />} />
          <Route path='/invoices/create' element={<CreateInvoice />} />
          <Route path='/invoices/edit/:id' element={<EditInvoice />} />
          <Route path='/invoices/preview/:id' element={<PreviewInvoice />} />

          {/* payments */}
          <Route path='/payments' element={<Payments />} />
          <Route path='/payments/edit/:id' element={<EditPayment />} />
          <Route path='/payments/preview/:id' element={<PreviewPayment />} />

          {/* patient */}
          <Route path='/patients' element={<Patients />} />
          <Route path='/patients/preview/:id' element={<PatientProfile />} />
          <Route path='/patients/create' element={<CreatePatient />} />
          <Route path='/patients/visiting/:id' element={<NewMedicalRecode />} />
          {/* reception */}
          <Route path='/receptions' element={<Receptions />} />
          {/* others */}
          {/* <Route path="/" element={<Login />} /> */}
          {/* <Route path="/abdm-login" element={<AbdmLogin />} /> */}
          <Route path='/appointments' element={<Appointments />} />
          <Route path='/campaigns' element={<Campaings />} />
          <Route path='/medicine' element={<Medicine />} />
          <Route path='/services' element={<Services />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/prescription' element={<Prescription />} />
          <Route path='/prescriptiondetail' element={<PrescriptionDetail />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/facility' element={<Facility />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
