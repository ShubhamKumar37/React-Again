import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { IoClose } from "react-icons/io5";

const PreviewProfile = ({ step, nextStep, prevStep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();
  const [showModal, setShowModal] = useState(false);

  const publicProfile = watch("publicProfile", "Yes");
  const about = watch("about", "");

  const handleNext = async () => {
    const isValid = await trigger();
    if (!isValid) {
      console.log("Validation failed");
      return;
    }
    console.log(
      "Validation passed",
      JSON.parse(localStorage.getItem("formData"))
    );
  };

  return (
    <div className='mt-3'>
      {/* Preview Details Link */}
      <p className='fw-medium'>
        To preview your details,{" "}
        <button onClick={() => setShowModal(true)} className='text-primary'>
          Click here
        </button>
      </p>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size='lg'
        centered
        scrollable
      >
        <Modal.Header className='flex flex-row justify-between'>
          <Modal.Title>Profile Preview</Modal.Title>
          <button className='btn p-0' onClick={() => setShowModal(false)}>
            <IoClose size={24} />
          </button>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: "80vh", overflowY: "auto" }}>
          <PreviewPage />
        </Modal.Body>
      </Modal>

      <>
        {/* Public Profile Visibility */}
        <Form.Group className='mt-2'>
          <Form.Label>Your profile will be visible to the public?</Form.Label>
          <div className='d-flex gap-3'>
            <Form.Check
              type='radio'
              label='Yes'
              value='Yes'
              {...register("publicProfile", {
                required: "Please select an option",
              })}
              defaultChecked={publicProfile === "Yes"}
            />
            <Form.Check
              type='radio'
              label='No'
              value='No'
              {...register("publicProfile", {
                required: "Please select an option",
              })}
              defaultChecked={publicProfile === "No"}
            />
          </div>
          {errors.publicProfile && (
            <p className='text-danger'>{errors.publicProfile.message}</p>
          )}
        </Form.Group>

        {/* About Section */}
        <Form.Group className='mt-3'>
          <Form.Label>About</Form.Label>
          <Form.Control
            as='textarea'
            rows={4}
            placeholder='Write about yourself...'
            {...register("about", {
              required: "This field is required",
              minLength: {
                value: 20,
                message: "Must be at least 20 characters long",
              },
            })}
            defaultValue={about}
          />
          {errors.about && (
            <p className='text-danger'>{errors.about.message}</p>
          )}
        </Form.Group>

        <div className='d-flex justify-content-between mt-3'>
          {step > 0 && (
            <button className='btn btn-secondary' onClick={prevStep}>
              Back
            </button>
          )}
          <button
            type='button'
            className='btn text-white'
            style={{ backgroundColor: "#0095D9" }}
            onClick={handleNext}
          >
            {step < 3 ? "Save and Next" : "Submit Data"}
          </button>
        </div>
      </>
    </div>
  );
};

const PreviewPage = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      setFormData(storedData);
    }
  }, []);

  if (!formData)
    return <p className='mt-5 text-center text-gray-500'>No data found.</p>;

  return (
    <div className='mx-auto max-w-3xl rounded-md bg-white p-6 shadow-lg'>
      <h2 className='mb-4 text-2xl font-semibold'>Profile Preview</h2>

      {/* Personal Details */}
      <section className='mb-6'>
        <h3 className='border-b pb-2 text-lg font-semibold'>
          Personal Details
        </h3>
        <p>
          <strong>Title:</strong> {formData.title || "N/A"}
        </p>
        <p>
          <strong>Full Name:</strong> {formData.fullName || "N/A"}
        </p>
        <p>
          <strong>Nationality:</strong> {formData.nationality || "N/A"}
        </p>
        <p>
          <strong>Language:</strong> {formData.language || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {formData.address || "N/A"}
        </p>
        <p>
          <strong>Same Address:</strong> {formData.sameAddress ? "Yes" : "No"}
        </p>
      </section>

      {/* Qualification & Registration Details */}
      <section className='mb-6'>
        <h3 className='border-b pb-2 text-lg font-semibold'>
          Qualification & Registration Details
        </h3>
        <p>
          <strong>Category:</strong> {formData.category || "N/A"}
        </p>
        <p>
          <strong>Medicine System:</strong> {formData.medicineSystem || "N/A"}
        </p>
        <p>
          <strong>Council:</strong> {formData.council || "N/A"}
        </p>
        <p>
          <strong>Registration Number:</strong>{" "}
          {formData.registrationNumber || "N/A"}
        </p>
        <p>
          <strong>Registration Date:</strong>{" "}
          {formData.registrationDate || "N/A"}
        </p>
        <p>
          <strong>Status:</strong> {formData.status || "N/A"}
        </p>
        <p>
          <strong>Qualification Country:</strong>{" "}
          {formData.qualificationCountry || "N/A"}
        </p>
        <p>
          <strong>Degree:</strong> {formData.degree || "N/A"}
        </p>
        <p>
          <strong>University:</strong> {formData.university || "N/A"}
        </p>
        <p>
          <strong>College:</strong> {formData.college || "N/A"}
        </p>
        <p>
          <strong>Exam Month:</strong> {formData.examMonth || "N/A"}
        </p>
        <p>
          <strong>Exam Year:</strong> {formData.examYear || "N/A"}
        </p>
        <p>
          <strong>Degree/Diploma:</strong>{" "}
          {formData.DegreeDiploma ? (
            <a
              href={formData.DegreeDiploma}
              className='text-blue-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              View File
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          <strong>Registration Certificate:</strong>{" "}
          {formData.registrationCertificate ? (
            <a
              href={formData.registrationCertificate}
              className='text-blue-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              View File
            </a>
          ) : (
            "N/A"
          )}
        </p>
      </section>

      {/* Work Details */}
      <section className='mb-6'>
        <h3 className='border-b pb-2 text-lg font-semibold'>Work Details</h3>
        <p>
          <strong>Working Status:</strong> {formData.workingStatus || "N/A"}
        </p>
        <p>
          <strong>Nature of Work:</strong> {formData.natureOfWork || "N/A"}
        </p>
        <p>
          <strong>Teleconsultation URL:</strong>{" "}
          {formData.teleconsultationURL ? (
            <a
              href={formData.teleconsultationURL}
              className='text-blue-500'
              target='_blank'
              rel='noopener noreferrer'
            >
              {formData.teleconsultationURL}
            </a>
          ) : (
            "N/A"
          )}
        </p>
        <p>
          <strong>Work Status:</strong> {formData.workStatus || "N/A"}
        </p>
        <p>
          <strong>Facility Name:</strong> {formData.facilityName || "N/A"}
        </p>
        <p>
          <strong>Work State:</strong> {formData.workState || "N/A"}
        </p>
        <p>
          <strong>Work District:</strong> {formData.workDistrict || "N/A"}
        </p>
        <p>
          <strong>Facility ID:</strong> {formData.facilityID || "N/A"}
        </p>
      </section>

      {/* Preview Profile */}
      <section>
        <h3 className='border-b pb-2 text-lg font-semibold'>Preview Profile</h3>
        <p>
          <strong>Public Profile:</strong> {formData.publicProfile || "N/A"}
        </p>
        <p>
          <strong>About:</strong> {formData.about || "N/A"}
        </p>
      </section>
    </div>
  );
};

export default PreviewProfile;
