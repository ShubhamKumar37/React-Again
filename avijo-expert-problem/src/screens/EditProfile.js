import React from "react";
import Layout from "../Layout";
import { BiPlusCircle } from "react-icons/bi";
import { AiFillEdit, AiOutlineEdit, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineAddHome, MdOutlineNotifications } from "react-icons/md";
import { RiQuestionnaireLine } from "react-icons/ri";
import { PiDotsThreeOutlineThin } from "react-icons/pi";
import ReactStars from "react-rating-stars-component";
import { BsCalendarDate, BsCameraVideo } from "react-icons/bs";

export default function EditProfile() {
  return (
    <Layout>
      <div>
        <h1 className='text-[24px] font-[600] text-black'>Edit Profile</h1>
        <FirstSect />
        {/* <SecondSect /> */}
        <ThirdSect />
        <ForthSect />
        <FifthSect />
        <FifthSect2 />
        <SixthSect />
      </div>
    </Layout>
  );
}

const ProfileInput = (props) => {
  return (
    <div>
      <div className='flex flex-row items-center'>
        {/* <img src={require(`../Assets/images/${props.image}.png`)} className="h-[30px] w-[30px]" /> */}
        <span className='text-[14px] text-[#797F8F] text-[Gilroy-SemiBold]'>
          {props.Text}
        </span>
      </div>
      <div className='mt-2 flex h-[40px] w-[220px] flex-row items-center rounded-[5px] border p-1'>
        <input
          className='ml-2 w-full text-sm placeholder-[#909090]'
          type='text'
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
        />
        {/* <span className="pr-2 text-[#CDCED0] w-[20%] text-end text-[12px]">{props.unit}</span> */}
      </div>
    </div>
  );
};

const FirstSect = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
    >
      <div className='my-8 flex w-full flex-col items-center bg-white p-5 md:flex-row'>
        <img
          src='https://s3-alpha-sig.figma.com/img/6ba2/3668/1f3399f0b490e29b65a89e0069cd6fbc?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QkINGsm84~mVmYjo6ho4eMiN5YjbDUzBdtABkSFW8CNoJ9q3jDehWVcKCx7yE9drDo6NAlalf7Dwuv1AXZ9xyq84UZ62sIBWYa9DtnrHd-vzcoXJsBS~0mbBWATw6CDDopS~~hk7oLnJWwA--ieXtY6Rk2mqb~0hO21WIx2NvSLibXdQh7-xvu2muJvwyMQdzm2pbT9Z1JTmvpDgdIdZZWpYkNWz0TUNreSEy7MW1Y7z0lhtFzBznHa~~OldjyTPjnXOr7G1TqMoNJIj~n1N4CFSyT6JsNAHimJZnEPbeQ6BsHCbUGtscm4fGCy2LT82wVrJIDDckBbm~OiQARZNqQ__'
          className='h-[156px] w-[156px] rounded-full'
        />
        <div className='ml-6 mt-6 flex w-full flex-col items-center justify-center md:items-start'>
          <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
            {" "}
            Anthony Atkielski
          </span>
          <div className='group flex w-[100px] flex-col items-center hover:text-[blue]'>
            <BiPlusCircle className='mt-4 h-[32px] w-[32px] text-[#0097DB] group-hover:text-[blue]' />
            <span className='mt-4 w-[100px] text-center text-[16px] text-[#0097DB] text-[Gilroy-SemiBold] group-hover:text-[blue]'>
              Change Profile Photo
            </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center p-[1%] pl-[4%] pr-[4%] md:flex-row md:justify-between'>
        <ProfileInput
          Text='Display Name'
          placeholder='Enter your Display Name'
        />
        <ProfileInput Text='Email ' placeholder='Enter your Email ' />
        <ProfileInput
          Text='Mobile number'
          placeholder='Enter your Mobile number'
        />
      </div>
    </div>
  );
};

const SecondSect = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
    >
      <div className='flex w-full flex-row items-center justify-between p-2'>
        <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
          Professional
        </span>
        <AiOutlineEdit className='h-[25px] w-[25px] text-[#0097DB]' />
      </div>
      <div className='my-8 flex w-full flex-col items-center rounded-xl bg-white p-2 pt-0 md:flex-row md:items-start'>
        <div className='relative flex h-[200px] w-[240px] flex-col items-center justify-center overflow-visible rounded-xl bg-[#D4D4D4] md:w-[30%] md:items-start'>
          <img
            src='https://s3-alpha-sig.figma.com/img/1212/143d/5298e884c48c46c03d45e9cc50b9e7e8?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mnfACbjdZNszMM3CREFweq2YlD7WbUksYvbXuXk6k-0M9yyzNc5joabnQXxRz8w3VCQPLASm~GVIC1mK7dEhEAao0kH90ehvawU3El5SlA2O7KUjtIHc9HYI59fFEzEH6nmGiYRnq4L0OPI~afxqxLwvIisNTWiakr5FfwIz~57CkTVXYKamhzvTa35IbxhxebvSxoxTGfjLm4gsrzwUrcB8gufBMDObkAnMlOrcOhP0pNNZKJyqZDjngH0O7OIQNDVpVQfNWHwYbQ7M1K7NI9jISzHqV9CKqRSI-fyNO8NhdDSwPinkxEdH3XolLj8MOTxlP1mXVmYVMlQo2XCNEw__'
            className='absolute -top-[50px] z-10 h-[250px] w-[250px]'
          />
        </div>

        <div className='mt-4 flex w-full flex-col items-center justify-center pl-6 md:mt-0 md:w-[60%] md:items-start'>
          <span className='text-[26px] text-[#747474] text-[Gilroy-SemiBold]'>
            Dr. Jane Cooper
          </span>
          <span className='text-[14px] text-[#7B7B7B] text-[Gilroy-SemiBold]'>
            Psychologist at Apple Hospital
          </span>
          <div className='mt-2 flex w-1/2 flex-row items-center justify-between'>
            <span className='text-[18px] text-[#7B7B7B] text-[Gilroy-SemiBold]'>
              Exp. 22 years
            </span>
            <span className='text-[18px] text-[#7B7B7B] text-[Gilroy-SemiBold]'>
              fees. $30
            </span>
          </div>
          <div className='mt-2 flex w-[65%] flex-row items-center justify-between'>
            <div className='flex flex-row items-center justify-between rounded-full bg-[#0097DB] p-2 pl-4 pr-4'>
              <AiOutlineUserAdd className='h-[16px] w-[16px] text-[white]' />
              <span className='pl-2 text-[12px] text-[Gilroy-SemiBold] text-[white]'>
                Follow
              </span>
            </div>
            <div className='flex flex-row items-center justify-between rounded-full border border-[#0097DB] bg-white p-2 pl-4 pr-4'>
              <MdOutlineNotifications className='h-[14px] w-[14px] text-[#0097DB]' />
              <span className='pl-2 text-[12px] text-[#0097DB] text-[Gilroy-SemiBold]'>
                Notify me
              </span>
            </div>
            <div className='flex flex-row items-center justify-between rounded-full border border-[#0097DB] bg-white p-2 pl-4 pr-4'>
              <RiQuestionnaireLine className='h-[14px] w-[14px] text-[#0097DB]' />
              <span className='pl-2 text-[12px] text-[#0097DB] text-[Gilroy-SemiBold]'>
                Ask
              </span>
            </div>
            <div className='flex flex-row items-center justify-between rounded-full border border-[#0097DB] bg-white p-2'>
              <PiDotsThreeOutlineThin className='h-[14px] w-[14px] text-[#0097DB]' />
            </div>
          </div>
          <div className='mt-2 flex w-[70%] flex-row items-center justify-between'>
            <div className='flex flex-row items-center'>
              <ReactStars
                count={5}
                size={24}
                isHalf={true}
                emptyIcon={<i className='far fa-star-o'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                activeColor='#ffd700'
              />
              <span className='pl-2 text-[16px] text-[#747474] text-[Gilroy-Medium]'>
                (152)
              </span>
            </div>
            <span className='text-[16px] text-[#747474] text-[Gilroy-SemiBold]'>
              <span className='text-[18px] text-[black]'>Distance.</span> 30 Km
              away
            </span>
          </div>
        </div>
        <div className='flex w-full flex-col items-center justify-center md:w-[40%]'>
          <div className='group flex w-full flex-col items-center hover:text-[blue]'>
            <div className='flex w-[140px] flex-row items-center justify-between p-2'>
              <BsCalendarDate className='h-[16px] w-[16px] text-[#00A600]' />
              <span className='text-[12px] text-[#00A600] text-[Gilroy-SemiBold]'>
                Avaliable Today
              </span>
            </div>
            <div className='mt-2 flex w-[140px] flex-row items-center rounded-md border border-[#0097DB] bg-[#0097DB] p-3'>
              <BsCameraVideo className='h-[14px] w-[14px] text-[white]' />
              <span className='pl-2 text-[12px] text-[Gilroy-SemiBold] text-[white]'>
                Online Consult
              </span>
            </div>
            <div className='mt-2 flex w-[140px] flex-row items-center rounded-md border border-[#0097DB] bg-[white] p-2'>
              <MdOutlineAddHome className='ml-4 h-[14px] w-[14px] text-[#0097DB]' />
              <div className='flex flex-col items-center pl-2'>
                <span className='text-center text-[10px] text-[#0097DB] text-[Gilroy-SemiBold]'>
                  Book Visit
                </span>
                <span className='text-center text-[7px] text-[#0097DB] text-[Gilroy-SemiBold]'>
                  No Booking Fee
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ThirdSect = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-[#FAF9F9] p-5'
    >
      <div className='flex w-full flex-row items-center justify-between p-2'>
        <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
          About
        </span>
        <AiOutlineEdit className='h-[25px] w-[25px] text-[#0097DB]' />
      </div>
      <span className='mt-4 pl-2 text-[16px] text-[#898989] text-[Gilroy-SemiBold]'>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software
        like Aldus PageMaker including versions of Lorem Ipsum It was
        popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum software like Aldus PageMaker including versions of Lorem
        Ipsum
      </span>
      <span className='mt-4 pl-2 text-[16px] text-[#898989] text-[Gilroy-SemiBold]'>
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release including versions of Lorem
        Ipsum
      </span>
    </div>
  );
};

const ForthSect = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
    >
      <div className='flex w-full flex-row items-center justify-between p-2'>
        <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
          Specialization
        </span>
        {/* <AiOutlineEdit className="h-[25px] w-[25px] text-[#0097DB]" /> */}
      </div>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Cardiologist
      </span>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Generalist
      </span>
    </div>
  );
};

const FifthSect = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
    >
      <div className='flex w-full flex-row items-center justify-between p-2'>
        <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
          Experience
        </span>
        {/* <AiOutlineEdit className="h-[25px] w-[25px] text-[#0097DB]" /> */}
      </div>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        22 Years
      </span>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Currently Practicing- From June 2022
      </span>
    </div>
  );
};

const FifthSect2 = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
    >
      <div className='flex w-full flex-row items-center justify-between p-2'>
        <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
          Education
        </span>
        {/* <AiOutlineEdit className="h-[25px] w-[25px] text-[#0097DB]" /> */}
      </div>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Medical University of Health Science
      </span>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Currently Practicing- From June 2022
      </span>
      <div className='mt-4 flex w-[100px] flex-col items-center rounded-full bg-[#E3E3E3] p-2'>
        <span className='text-sm text-[#888B89]'>2022-2024</span>
      </div>
    </div>
  );
};

const SixthSect = () => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='1000'
      data-aos-delay='100'
      data-aos-offset='200'
      className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
    >
      <div className='flex w-full flex-row items-center justify-between p-2'>
        <span className='text-[24px] text-[Gilroy-SemiBold] text-black'>
          Address
        </span>
        {/* <AiOutlineEdit className="h-[25px] w-[25px] text-[#0097DB]" /> */}
      </div>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Pysical examinations and vaccinations
      </span>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        3rd Floor,Headquarter Building,Satya Sai Square,Indore
      </span>
      <span className='mt-4 pl-2 text-[20px] text-[#898989] text-[Gilroy-SemiBold]'>
        Distance. 30 Km away
      </span>
      <span className='mt-4 pl-2 text-[26px] text-[#0095D9] text-[Gilroy-SemiBold]'>
        Get Directions
      </span>
    </div>
  );
};
