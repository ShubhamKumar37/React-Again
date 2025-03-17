import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import CustomStepper from "../components/CustomStepper";
import PersonalDetails from "./RegisterScreen/PersonalDetails";
import { Qualification as QualificationDetails } from "./RegisterScreen/Qualification";
import { WorkDetail } from "./RegisterScreen/WorkDetail";
import PreviewProfile from "./RegisterScreen/PreviewProfile";
import { RegisterHeader } from "./Register";
import toast from "react-hot-toast";

const RegisterScreen = () => {
  const [step, setStep] = useState(
    Number(localStorage.getItem("formStep")) || 0
  );
  const [registrationCertificate, setRegistrationCertificate] = useState(null);
  const [degreeDiploma, setDegreeDiploma] = useState(null);

  const storedFormData = JSON.parse(localStorage.getItem("formData")) || {};

  const methods = useForm({
    defaultValues: storedFormData,
  });

  useEffect(() => {
    const subscription = methods.watch((data) => {
      localStorage.setItem("formData", JSON.stringify(data));
    });
    return () => subscription.unsubscribe();
  }, [methods.watch]);

  const nextStep = () => {
    setStep((prev) => {
      const newStep = prev + 1;
      localStorage.setItem("formStep", newStep);
      return newStep;
    });
  };

  const prevStep = () => {
    setStep((prev) => {
      const newStep = prev - 1;
      localStorage.setItem("formStep", newStep);
      return newStep;
    });
  };

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    if (!registrationCertificate || !degreeDiploma) {
      toast.error(
        "Please go the qualification section and submit the file again"
      );
      return;
    }
    console.log(
      "this is registeration file / degree diploma = ",
      registrationCertificate,
      degreeDiploma
    );
  };

  return (
    <main>
      <RegisterHeader />
      <section className='my-2 bg-white p-4 shadow-lg'>
        <div className='mx-auto my-5 w-9/12'>
          <CustomStepper ActiveStep={step} />
        </div>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {step === 0 && (
              <PersonalDetails
                step={step}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 1 && (
              <QualificationDetails
                setRegistrationCertificate={setRegistrationCertificate}
                setDegreeDiploma={setDegreeDiploma}
                step={step}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 2 && (
              <WorkDetail step={step} nextStep={nextStep} prevStep={prevStep} />
            )}
            {step === 3 && (
              <PreviewProfile
                step={step}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <button type='submit' className='btn btn-primary'>
                Final Save
              </button>
            )}
          </form>
        </FormProvider>
      </section>
    </main>
  );
};

export default RegisterScreen;
