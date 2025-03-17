import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/styles/index.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import GenerateId from "./GenerateId";
import DoctorLogin from "../components/DoctorLogin/DoctorLogin";

function AbdmLogin() {
  React.useEffect(() => {
    localStorage.setItem("myPath", window.location.pathname);
  }, []);

  // return (
  //   <>
  //     <div className="container bg-white">
  //       <Tabs
  //         defaultActiveKey="Login"
  //         id="fill-tab-example"
  //         className="mb-3"
  //         fill
  //       >
  //         <Tab eventKey="Login" title="Login">
  //           <DoctorLogin />
  //         </Tab>
  //         <Tab eventKey="Register" title="Generate ID">
  //           {/* <AbhaExample /> */}
  //           <GenerateId />
  //         </Tab>
  //       </Tabs>
  //     </div>
  //   </>
  // );
  return (
    <>
      <div className='h-100vh container bg-white'>
        <Tabs
          defaultActiveKey='Login'
          id='justify-tab-example'
          className='justify-content-center mb-3'
        >
          <Tab eventKey='Login' title='Login'>
            <DoctorLogin />
          </Tab>
          <Tab eventKey='Generate ID' title='Generate ID'>
            <GenerateId />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

export default AbdmLogin;
