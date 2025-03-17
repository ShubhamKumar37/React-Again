import "bootstrap/dist/css/bootstrap.min.css";
import React, { useCallback, useState } from "react";
import "react-modern-drawer/dist/index.css";
import { HiMenu } from "react-icons/hi";
import {
  Button,
  Col,
  Form,
  Image,
  InputGroup,
  Navbar,
  Row,
} from "react-bootstrap";
import { MdVerified, MdErrorOutline } from "react-icons/md";
import Drawer from "react-modern-drawer";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { districts, subDistricts } from "../data/Master_Data_JSON.js";

export const RegisterHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='lg'
        className='d-flex justify-content-between'
        bg='light'
        data-bs-theme='light'
      >
        <Navbar.Brand onClick={toggleDrawer}>
          <HiMenu className='h-[2rem] w-[2rem]' />
        </Navbar.Brand>
        <div>
          <Image
            src='https://avatar.iran.liara.run/public'
            alt='User Avatar'
            roundedCircle
            fluid
            style={{ width: "50px", height: "50px" }}
          />
        </div>
      </Navbar>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='bla bla bla'
      >
        <div className='p-4'>
          <h2>Drawer Content</h2>
          <p>This is the content inside the drawer.</p>
        </div>
      </Drawer>
    </>
  );
};

const RegisterFooter = () => {
  return (
    <footer className='mt-8 overflow-x-hidden text-center'>
      <Row>
        <Col>
          <h2>Need Help?</h2>
          <p>
            If you have questions regarding healthcare Professional ID, please
            go through our{" "}
            <a href='/faqs' className='text-decoration-none text-primary'>
              FAQs section
            </a>
            .
          </p>
          <p>
            If you are not able to register or are facing other issues with
            registration, please contact us at{" "}
            <a
              href='mailto:support@avjp.in'
              className='text-decoration-none text-primary'
            >
              avjp.in
            </a>
          </p>
          <p>
            Or call us at our toll free number -{" "}
            <strong>1800-11-4477 / 14477</strong>
          </p>
          <Button variant='primary' size='lg' className='my-4'>
            Get Help
          </Button>
        </Col>
      </Row>
    </footer>
  );
};

const Register = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = methods;

  const mobileValue = watch("mobile", "");
  const isValidMobile = /^[0-9]{10}$/.test(mobileValue);
  const navigate = useNavigate();

  const savePhase1 = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return null;
    }
    console.log("This is the data for this form = ", data);
    try {
      localStorage.setItem("allPersonalDataUser", JSON.stringify([data]));
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
      return;
    }

    React.startTransition(() => {
      navigate("/registerPersonalDetail");
    });
  };

  return (
    <>
      <main className='bg-light min-vh-100'>
        <RegisterHeader />
        <section className='my-2 bg-white p-4 shadow-lg'>
          <h2 className='text-primary'>
            Registration Form (Mobile verification is required)
          </h2>
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(savePhase1)}>
              {/* Mobile Number & Email */}
              <Row className='mb-3'>
                <Col>
                  <Form.Label>Mobile Number</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='tel'
                      placeholder='Enter Your Number'
                      {...register("mobile", {
                        required: "Mobile number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Enter a valid 10-digit number",
                        },
                      })}
                      className={errors.mobile ? "border-danger" : ""}
                    />

                    {/* Show Green Checkmark if Valid, Red Warning if Invalid */}
                    <InputGroup.Text>
                      {mobileValue.length > 0 ? (
                        isValidMobile ? (
                          <MdVerified color='#00FF00' />
                        ) : (
                          <MdErrorOutline color='#FF0000' />
                        )
                      ) : null}
                    </InputGroup.Text>
                  </InputGroup>

                  {/* Show error message only if input is invalid */}
                  {errors.mobile && (
                    <p className='text-danger'>{errors.mobile.message}</p>
                  )}
                </Col>

                <Col>
                  <Form.Label>Email</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type='email'
                      placeholder='Enter Email'
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                          message: "Enter a valid email",
                        },
                      })}
                    />
                    <Button variant='outline-primary'>Verify</Button>
                  </InputGroup>
                  {errors.email && (
                    <p className='text-danger'>{errors.email.message}</p>
                  )}
                </Col>

                <Col>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type='date'
                    {...register("dob", {
                      required: "Date of birth is required",
                    })}
                    max={new Date().toISOString().split("T")[0]}
                  />
                  {errors.dob && (
                    <p className='text-danger'>{errors.dob.message}</p>
                  )}
                </Col>
              </Row>

              {/* District & Sub-District */}
              <Row className='mb-3'>
                <Col xs={12} md={6}>
                  <Form.Label>District</Form.Label>
                  <Form.Select
                    {...register("district", { required: "Select a district" })}
                  >
                    {districts.map((item, index) => {
                      return (
                        <option key={index} value={index}>
                          {item.districtName}
                        </option>
                      );
                    })}
                  </Form.Select>
                  {errors.district && (
                    <p className='text-danger'>{errors.district.message}</p>
                  )}
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label>Sub District</Form.Label>
                  <Form.Select
                    {...register("subDistrict", {
                      required: "Select a sub-district",
                    })}
                  >
                    {subDistricts.map((item, index) => {
                      return (
                        <option key={index} value={index}>
                          {item["subDistrictName"]}
                        </option>
                      );
                    })}
                  </Form.Select>
                  {errors.subDistrict && (
                    <p className='text-danger'>{errors.subDistrict.message}</p>
                  )}
                </Col>
              </Row>

              {/* Roles Selection */}
              <Row className='mb-3'>
                <Col xs={12}>
                  <Form.Label>Roles</Form.Label>
                  <Form.Check
                    type='radio'
                    label='Healthcare Professional'
                    value='healthcare'
                    {...register("role", { required: "Please select a role" })}
                  />
                  <Form.Check
                    type='radio'
                    label='Facility Manager / Administrator'
                    value='manager'
                    {...register("role")}
                  />
                  <Form.Check
                    type='radio'
                    label='Healthcare Professional & Facility Manager'
                    value='both'
                    {...register("role")}
                  />
                  {errors.role && (
                    <p className='text-danger'>{errors.role.message}</p>
                  )}
                </Col>
              </Row>

              {/* Category & Sub-Category */}
              <Row className='mb-3'>
                <Col xs={12} md={6}>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    {...register("category", { required: "Select a category" })}
                  >
                    <option value=''>Select Category</option>
                    <option value='cat1'>Category 1</option>
                    <option value='cat2'>Category 2</option>
                  </Form.Select>
                  {errors.category && (
                    <p className='text-danger'>{errors.category.message}</p>
                  )}
                </Col>

                <Col xs={12} md={6}>
                  <Form.Label>Sub Category</Form.Label>
                  <Form.Select
                    {...register("subCategory", {
                      required: "Select a sub-category",
                    })}
                  >
                    <option value=''>Select Sub-Category</option>
                    <option value='subcat1'>Sub Category 1</option>
                    <option value='subcat2'>Sub Category 2</option>
                  </Form.Select>
                  {errors.subCategory && (
                    <p className='text-danger'>{errors.subCategory.message}</p>
                  )}
                </Col>
              </Row>

              {/* Username & Password */}
              <Row className='mb-3'>
                <Col xs={12} md={4}>
                  <Form.Label>Healthcare Professional ID/Username</Form.Label>
                  <Form.Control
                    placeholder='@hpr.abdm'
                    {...register("username", {
                      required: "Username is required",
                    })}
                  />
                  {errors.username && (
                    <p className='text-danger'>{errors.username.message}</p>
                  )}
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                    })}
                  />
                  {errors.password && (
                    <p className='text-danger'>{errors.password.message}</p>
                  )}
                </Col>

                <Col xs={12} md={4}>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type='password'
                    {...register("confirmPassword", {
                      required: "Confirm your password",
                    })}
                  />
                  {errors.confirmPassword && (
                    <p className='text-danger'>
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </Col>
              </Row>

              {/* Reset & Submit Buttons */}
              <Row className='mb-3'>
                <Col className='d-flex justify-content-between column-gap-2'>
                  <Button
                    variant='secondary'
                    type='reset'
                    className='w-50 bg-secondary ms-2'
                  >
                    Reset
                  </Button>
                  <Button
                    variant='primary'
                    type='submit'
                    className='w-50 bg-primary'
                  >
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </FormProvider>
        </section>
        <RegisterFooter />
      </main>
    </>
  );
};

export default Register;

{
  /* 
                    <Form>
                        <Row className="mb-3">
                            <Col >
                                <Form.Label>Mobile Number</Form.Label>
                                <InputGroup>
                                    <Form.Control placeholder="Enter Your Number"/>
                                    <InputGroup.Text><MdVerified color="#00FF00" /></InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Label>Email</Form.Label>
                                <InputGroup>
                                    <Form.Control placeholder="Enter Email"/>
                                    <Button variant="outline-primary">Verify</Button>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" value="2000-01-01" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={6}>
                                <Form.Label>District</Form.Label>
                                <Form.Select>
                                    <option>example</option>
                                </Form.Select>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label>Sub District</Form.Label>
                                <Form.Select>
                                    <option>example</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12}>
                                <Form.Label>Roles</Form.Label>
                                <Form.Check type="radio" label="I am a Healthcare Professional" name="role" />
                                <Form.Check type="radio" label="I am a Facility Manager / Administrator" name="role" />
                                <Form.Check type="radio" label="I am a Healthcare Professional & Facility Manager" name="role" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={6}>
                                <Form.Label>Category</Form.Label>
                                <Form.Select>
                                    <option>example</option>
                                </Form.Select>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Label>Sub Category</Form.Label>
                                <Form.Select>
                                    <option>example</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col xs={12} md={4}>
                                <Form.Label>Healthcare Professional ID/Username</Form.Label>
                                <Form.Control placeholder="@hpr.abdm" />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" />
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col className='d-flex justify-content-between column-gap-2'>
                                <Button variant="secondary" className="ms-2 w-50 bg-secondary">Reset</Button>
                                <Button variant='primary' type="submit" className='w-50 bg-primary'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                     */
}
