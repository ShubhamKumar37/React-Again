import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useFormContext } from "react-hook-form";
import { natureOfWork } from "../../data/Master_Data_JSON";

export const WorkDetail = ({ step, nextStep, prevStep }) => {
  const {
    register,
    formState: { errors },
    trigger,
    watch,
  } = useFormContext();

  const handleNext = async () => {
    const isValid = await trigger();
    if (isValid) {
      nextStep();
    }
  };

  return (
    <div className='mt-3'>
      <h4 className='commonHeading'>Current Work Details</h4>

      {/* Are You Currently Working? */}
      <Form.Group className='mt-3'>
        <Form.Label>Are you currently working?</Form.Label>
        <div className='d-flex gap-3'>
          <Form.Check
            type='radio'
            {...register("workingStatus", {
              required: "Please select your working status",
            })}
            value='Yes'
            label='Yes'
            defaultChecked={watch("workingStatus") === "Yes"}
          />
          <Form.Check
            type='radio'
            {...register("workingStatus", {
              required: "Please select your working status",
            })}
            value='No'
            label='No'
            defaultChecked={watch("workingStatus") === "No"}
          />
        </div>
        {errors.workingStatus && (
          <p className='text-danger'>{errors.workingStatus.message}</p>
        )}
      </Form.Group>

      {/* Nature of Work & Teleconsultation URL */}
      <Row className='mt-3'>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Nature Of Work</Form.Label>
            <Form.Select
              {...register("natureOfWork", {
                required: "Please select the nature of work",
              })}
              defaultValue={watch("natureOfWork") || ""}
            >
              <option value={""} disabled>Select an option</option>
              {natureOfWork.map((item, index) => {
                return <option key={index} value={item}>{item}</option>
              })}
            </Form.Select>
            {errors.natureOfWork && (
              <p className='text-danger'>{errors.natureOfWork.message}</p>
            )}
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label>Teleconsultation URL</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter URL'
              {...register("teleconsultationURL", { required: true })}
              defaultValue={watch("teleconsultationURL") || ""}
            />
            {errors.teleconsultationURL && (
              <p className='text-danger'>
                {errors.teleconsultationURL.message}
              </p>
            )}
          </Form.Group>
        </Col>
      </Row>

      {/* Work Status */}
      <Form.Group className='mt-3'>
        <Form.Label>Work Status</Form.Label>
        <div className='d-flex gap-3'>
          {["Govt", "Private", "Both"].map((status) => (
            <Form.Check
              key={status}
              type='radio'
              {...register("workStatus", {
                required: "Please select work status",
              })}
              value={status}
              label={status}
              defaultChecked={watch("workStatus") === status}
            />
          ))}
        </div>
        {errors.workStatus && (
          <p className='text-danger'>{errors.workStatus.message}</p>
        )}
      </Form.Group>

      {/* Place of Work Section */}
      <h4 className='commonHeading mt-4'>Place Of Work</h4>

      <Row className='mt-3'>
        <Col md={4}>
          <Form.Group>
            <Form.Label>Facility Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter facilityName'
              {...register("facilityName", {
                required: "Facility Name is required",
              })}
              defaultValue={watch("facilityName") || ""}
            />
            {errors.facilityName && (
              <p className='text-danger'>{errors.facilityName.message}</p>
            )}
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter state'
              {...register("workState", { required: "State is required" })}
              defaultValue={watch("workState") || ""}
            />
            {errors.workState && (
              <p className='text-danger'>{errors.workState.message}</p>
            )}
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group>
            <Form.Label>District</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter district'
              {...register("workDistrict", {
                required: "District is required",
              })}
              defaultValue={watch("workDistrict") || ""}
            />
            {errors.workDistrict && (
              <p className='text-danger'>{errors.workDistrict.message}</p>
            )}
          </Form.Group>
        </Col>
      </Row>

      {/* OR Divider */}
      <div className='mt-3 text-center'>or</div>

      {/* Facility ID */}
      <Form.Group className='mt-3'>
        <Form.Label>Facility ID</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter Facility ID'
          {...register("facilityID", { required: "Facility ID is required" })}
          defaultValue={watch("facilityID") || ""}
        />
        {errors.facilityID && (
          <p className='text-danger'>{errors.facilityID.message}</p>
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
    </div>
  );
};
