import React from "react";
import { Form } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import {
  salutations,
  countries,
  languages,
} from "../../data/Master_Data_JSON.js";

const PersonalDetails = ({ step, prevStep, nextStep }) => {
  const {
    register,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      nextStep();
    }
  };

  return (
    <div>
      <h4 className='commonHeading'>Personal Details</h4>
      <Form.Group className='mb-3'>
        <div className='d-flex justify-content-between mb-3 flex-row'>
          <div className='w-50 me-3'>
            <Form.Label>Title</Form.Label>
            <Form.Select
              {...register("title", { required: "Title is required" })}
              defaultValue={watch("title", "")}
            >
              <option value={""} disabled>Select an option</option>
              {salutations.map((item, index) => (
                <option key={index} value={item.id}>
                  {item.salutation}
                </option>
              ))}
            </Form.Select>
            {errors.title && (
              <p className='text-danger'>{errors.title.message}</p>
            )}
          </div>

          <div className='w-50'>
            <Form.Label>Nationality</Form.Label>
            <Form.Select
              {...register("nationality", {
                required: "Nationality is required",
              })}
              defaultValue={watch("nationality", "")}
            >
              <option value={""} disabled>Select an option</option>
              {countries.map((item, index) => (
                <option key={index} value={item.id}>
                  {item["nationality"]}
                </option>
              ))}
            </Form.Select>
            {errors.nationality && (
              <p className='text-danger'>{errors.nationality.message}</p>
            )}
          </div>
        </div>

        <div className='d-flex justify-content-between mb-3 flex-row'>
          <div className='w-50 me-3'>
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Full Name'
              {...register("fullName", { required: "Full Name is required" })}
              defaultValue={watch("fullName", "")}
            />
            {errors.fullName && (
              <p className='text-danger'>{errors.fullName.message}</p>
            )}
          </div>

          <div className='w-50'>
            <Form.Label>Language</Form.Label>
            <Form.Select
              {...register("language", { required: "Language is required" })}
              defaultValue={watch("language", "")}
            >
              <option value={""} disabled>Select an option</option>
              {languages.map((item, index) => (
                <option key={index} value={item.id}>
                  {item["Language"]}
                </option>
              ))}
            </Form.Select>
            {errors.language && (
              <p className='text-danger'>{errors.language.message}</p>
            )}
          </div>
        </div>
      </Form.Group>

      <h4 className='commonHeading'>Address as per KYC</h4>
      <div className='w-50 me-3'>
        <Form.Label>Address</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Address as per KYC'
          {...register("address", { required: "Address is required" })}
          defaultValue={watch("address", "")}
        />
        {errors.address && (
          <p className='text-danger'>{errors.address.message}</p>
        )}
      </div>
      {/* <Form.Group className="mb-3">
                <Form.Label>Name of Degree/Diploma</Form.Label>
                <Form.Select {...register("degree", { required: "Degree is required" })} defaultValue={watch("degree", "")}>
                    <option value="">Select Degree/Diploma</option>
                    <option value="MBBS">MBBS</option>
                    <option value="BDS">BDS</option>
                    <option value="MD">MD</option>
                </Form.Select>
                {errors.degree && <p className="text-danger">{errors.degree.message}</p>}
            </Form.Group> */}

      <h4 className='commonHeading'>Communication Address</h4>
      <Form.Group className='d-flex align-items-center mb-3'>
        <Form.Check
          type='checkbox'
          className='me-2'
          {...register("sameAddress")}
          defaultChecked={watch("sameAddress", false)}
        />
        <Form.Label className='mb-0'>
          Is your communication address the same as above?
        </Form.Label>
      </Form.Group>

      <div className='d-flex justify-content-between mt-3'>
        {step > 0 && (
          <button className='btn btn-secondary' onClick={prevStep}>
            Back
          </button>
        )}
        <button
          className='btn text-white'
          style={{ backgroundColor: "#0095D9" }}
          onClick={handleNext}
        >
          {step < 3 ? "Save and Next" : "Submit Data"}
        </button>
      </div>
    </div>
  );
};

export default PersonalDetails;
