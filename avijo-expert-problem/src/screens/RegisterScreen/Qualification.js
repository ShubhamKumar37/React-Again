import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { LuFolderUp } from "react-icons/lu";
import {
  systemofMedicineList,
  medicalCouncils,
  countries,
  states,
  colleges,
} from "../../data/Master_Data_JSON";

export const Qualification = ({
  step,
  nextStep,
  prevStep,
  setRegistrationCertificate,
  setDegreeDiploma,
}) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleNextStep = async (event) => {
    event.preventDefault();
    const isValid = await trigger();
    if (isValid) {
      nextStep();
    }
  };

  return (
    <div>
      <h4 className='commonHeading'>System of Medicine</h4>

      <Form.Group className='w-100 mb-3'>
        <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
          <div className='w-100 mb-md-0 me-md-3 mb-3'>
            <Form.Label>Category</Form.Label>
            <Form.Select
              {...register("category", { required: "Category is required" })}
              defaultValue={watch("category") || "Doctor"}
            >
              <option value=''>Select Category</option>
              <option value='Doctor'>Doctor</option>
            </Form.Select>
            {errors.category && (
              <p className='text-danger'>{errors.category.message}</p>
            )}
          </div>

          <div className='w-100'>
            <Form.Label>System of Medicine</Form.Label>
            <Form.Select
              {...register("medicineSystem", {
                required: "System of Medicine is required",
              })}
              defaultValue={watch("medicineSystem") || "Modern Medicine"}
            >
              <option value={""} disabled>Select an option</option>
              {systemofMedicineList.map((item, index) => (
                <option key={index} value={item.id}>
                  {item["medicalSystem"]}
                </option>
              ))}
            </Form.Select>
            {errors.medicineSystem && (
              <p className='text-danger'>{errors.medicineSystem.message}</p>
            )}
          </div>
        </div>
      </Form.Group>

      <h4 className='commonHeading'>Register Details</h4>
      <Form.Group className='mb-3'>
        <div className='d-flex flex-column flex-md-row justify-content-between mb-3'>
          <div className='w-100 mb-md-0 me-md-3 mb-3'>
            <Form.Label>Register with council</Form.Label>
            <Form.Select
              {...register("council", { required: "Council is required" })}
              defaultValue={watch("council") || "Doctor"}
            >
              <option value={""} disabled>Select an option</option>
              {medicalCouncils.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {errors.council && (
              <p className='text-danger'>{errors.council.message}</p>
            )}
          </div>

          <div className='w-100 mb-md-0 me-md-3 mb-3'>
            <Form.Label>Registration Number</Form.Label>
            <Form.Control
              type='text'
              {...register("registrationNumber", {
                required: "Registration Number is required",
              })}
              defaultValue={watch("registrationNumber") || ""}
            />
            {errors.registrationNumber && (
              <p className='text-danger'>{errors.registrationNumber.message}</p>
            )}
          </div>

          <div className='w-100'>
            <Form.Label>Date of First Registration</Form.Label>
            <Form.Control
              type='date'
              {...register("registrationDate", {
                required: "Registration Date is required",
              })}
              defaultValue={watch("registrationDate") || ""}
            />
            {errors.registrationDate && (
              <p className='text-danger'>{errors.registrationDate.message}</p>
            )}
          </div>
        </div>

        <small className='fs-5'>Is the register permanent or renewal?</small>
        <div className='d-flex flex-column flex-md-row gap-2'>
          <Form.Group>
            <Form.Label>Select Status</Form.Label>
            <Form.Select
              {...register("status", { required: "Please select a status" })}
              defaultValue=''
            >
              <option value='' disabled>
                Select an option
              </option>
              <option value='renewal'>Renewal</option>
              <option value='permanent'>Permanent</option>
            </Form.Select>
            {errors.status && (
              <p className='text-danger'>{errors.status.message}</p>
            )}
          </Form.Group>
        </div>

        {/* File Upload - Registration Certificate */}
        <div className='mt-3'>
          <Form.Group controlId='registrationCertificate'>
            <Form.Label className='fw-semibold'>
              Registration Certificate Attachment
            </Form.Label>
            <div className='file-upload-box'>
              <label
                htmlFor='file-input-registration'
                className='file-upload-label'
              >
                <LuFolderUp className='upload-icon' />
                Drag and Drop File or Browse
                <input
                  type='file'
                  id='file-input-registration'
                  {...register("registrationFile", {
                    required: "Registration certificate is required",
                  })}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setRegistrationCertificate(file);
                    }
                  }}
                />
              </label>
            </div>
            {errors.registrationFile && (
              <p className='text-danger'>{errors.registrationFile.message}</p>
            )}
          </Form.Group>
        </div>

        <h4 className='commonHeading mt-3'>Qualification Details</h4>

        <div className='mt-3'>
          <Form.Group>
            <Form.Label>Country of Qualification</Form.Label>
            <div className='d-flex gap-3'>
              <Form.Check
                type='radio'
                label='India'
                {...register("qualificationCountry", {
                  required: "Qualification Country is required",
                })}
                value='India'
                defaultChecked={watch("qualificationCountry") === "India"}
              />
              <Form.Check
                type='radio'
                label='Other'
                {...register("qualificationCountry")}
                value='Other'
                defaultChecked={watch("qualificationCountry") === "Other"}
              />
            </div>
          </Form.Group>
          {errors.qualificationCountry && (
            <p className='text-danger'>{errors.qualificationCountry.message}</p>
          )}
        </div>

        <div className='mt-3'>
          <Form.Group>
            <Form.Label>Name of Degree/Diploma</Form.Label>
            <Form.Select
              {...register("degree", { required: "Degree is required" })}
              defaultValue={watch("degree") || "MBBS"}
            >
              <option value=''>Select Degree</option>
              <option value='MBBS'>MBBS</option>
              <option value='BDS'>BDS</option>
            </Form.Select>
            {errors.degree && (
              <p className='text-danger'>{errors.degree.message}</p>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Select
              {...register("country", { required: "Country is required" })}
              defaultValue={watch("country") || ""}
            >
              <option value={""} disabled>Select an option</option>
              {countries.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.nationality}
                  </option>
                );
              })}
            </Form.Select>
            {errors.country && (
              <p className='text-danger'>{errors.country.message}</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Select
              {...register("state", { required: "State is required" })}
              defaultValue={watch("state") || ""}
            >
              <option value={""} disabled>Select an option</option>
              {states.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {errors.state && (
              <p className='text-danger'>{errors.state.message}</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>College</Form.Label>
            <Form.Select
              {...register("college", { required: "College is required" })}
              defaultValue={watch("college") || ""}
            >
              <option value={""} disabled>Select an option</option>
              {colleges.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </Form.Select>
            {errors.college && (
              <p className='text-danger'>{errors.college.message}</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>University</Form.Label>
            <Form.Select
              {...register("university", {
                required: "University is required",
              })}
              defaultValue={watch("university") || ""}
            >
              <option value='' disabled>
                Select University
              </option>
              <option value='Delhi University'>Delhi University</option>
              <option value='Harvard University'>Harvard University</option>
              <option value='Oxford University'>Oxford University</option>
            </Form.Select>
            {errors.university && (
              <p className='text-danger'>{errors.university.message}</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Month of Exam</Form.Label>
            <Form.Select
              {...register("examMonth", {
                required: "Month of exam is required",
              })}
              defaultValue={watch("examMonth") || ""}
            >
              <option value='' disabled>
                Select Month
              </option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </Form.Select>
            {errors.examMonth && (
              <p className='text-danger'>{errors.examMonth.message}</p>
            )}
          </Form.Group>

          <Form.Group>
            <Form.Label>Year of Exam</Form.Label>
            <Form.Select
              {...register("examYear", {
                required: "Year of exam is required",
              })}
              defaultValue={watch("examYear") || ""}
            >
              <option value='' disabled>
                Select Year
              </option>
              {[...Array(50)].map((_, index) => {
                const year = new Date().getFullYear() - index;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </Form.Select>
            {errors.examYear && (
              <p className='text-danger'>{errors.examYear.message}</p>
            )}
          </Form.Group>
        </div>

        {/* File Upload - Degree/Diploma */}
        <div className='mt-3'>
          <Form.Group controlId='degreeUpload'>
            <Form.Label className='fw-semibold'>
              Upload Degree/Diploma
            </Form.Label>
            <div className='file-upload-box'>
              <label htmlFor='file-input-degree' className='file-upload-label'>
                <LuFolderUp className='upload-icon' />
                Drag and Drop File or Browse
                <input
                  type='file'
                  id='file-input-degree'
                  {...register("degreeFile", {
                    required: "Degree certificate is required",
                  })}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setDegreeDiploma(file);
                    }
                  }}
                />
              </label>
            </div>
            {errors.degreeFile && (
              <p className='text-danger'>{errors.degreeFile.message}</p>
            )}
          </Form.Group>
        </div>
      </Form.Group>

      <div className='d-flex justify-content-between mt-3'>
        {step > 0 && (
          <button className='btn btn-secondary' onClick={prevStep}>
            Back
          </button>
        )}
        <button
          onClick={handleNextStep}
          className='btn text-white'
          style={{ backgroundColor: "#0095D9" }}
        >
          {step < 3 ? "Save and Next" : "Submit Data"}
        </button>
      </div>
    </div>
  );
};
