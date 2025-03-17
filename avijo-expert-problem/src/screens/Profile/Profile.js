import React, { useState } from "react";
import Layout from "../../Layout";
import { AiOutlineEdit, AiOutlineUserAdd } from "react-icons/ai";
import { IoChatbubbleOutline, IoShareSocialOutline } from "react-icons/io5";
import {
  PiArrowFatDown,
  PiArrowFatUp,
  PiDotsThreeOutline,
} from "react-icons/pi";
import { FiRefreshCcw } from "react-icons/fi";
import ReactStars from "react-rating-stars-component";
import { BsThreeDots } from "react-icons/bs";
import { MdAddCircleOutline, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { RiCompass3Line } from "react-icons/ri";

const data = [
  "Profile",
  "56.1K Answers",
  "16 Questions",
  "4.9K Followers",
  "16 Following",
  "2 Reviews",
  "Spaces",
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState(0);

  const tabPanel = () => {
    switch (activeTab) {
      case 0:
        return <ProfileComponent />;
      case 1:
        return <Answers />;
      case 2:
        return <Questions />;
      case 3:
        return <Followers />;
      case 4:
        return <Following />;
      case 5:
        return <Reviews />;
      case 6:
        return <Spaces />;
      default:
        return;
    }
  };

  return (
    <Layout>
      <div className='items-centerv flex w-full flex-col rounded-xl bg-white p-4'>
        <div className='flex w-full flex-col items-center md:flex-row'>
          <img
            src={require("../../Assets/images/profile2.png")}
            className='h-[200px] w-[150px]'
          />
          <div className='ml-6 flex flex-col'>
            <span className='text-[35px] text-[Gilroy-SemiBold] text-[black]'>
              {" "}
              Anthony Atkielski
            </span>
            <span className='text-[20px] text-[#5D5D5D] text-[Gilroy-SemiBold]'>
              {" "}
              5677 Followers . 234 Following
            </span>
            <div className='mt-4 flex w-full flex-row items-center'>
              <div className='flex w-32 flex-row items-center rounded-md border border-[#0095D9] p-2'>
                <AiOutlineEdit className='ml-2 h-4 w-4 text-[#0095D9]' />
                <span className='pl-2 text-sm text-[#0095D9]'>
                  Edit Profile
                </span>
              </div>
              <div className='ml-4 flex w-32 flex-row items-center rounded-md border border-[#0095D9] p-2'>
                <IoShareSocialOutline className='ml-2 h-4 w-4 text-[#0095D9]' />
                <span className='pl-2 text-sm text-[#0095D9]'>Share</span>
              </div>
              <div className='ml-4 flex flex-row items-center rounded-full border border-[#0095D9] p-2'>
                <PiDotsThreeOutline className='h-4 w-4 text-[#0095D9]' />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-6 flex w-full flex-row overflow-x-scroll border-b-2'>
          {data.map((item, index) => (
            <div
              onClick={() => setActiveTab(index)}
              className={`${activeTab === index ? `border-b-2 border-[#0095D9]` : `border-0`} m-2 ml-6 items-center`}
            >
              <span
                className={`${activeTab === index ? `text-[#0095D9]` : `text-[#313131]`} text-md text-center`}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
        <div className='ml-4 mt-4 flex w-[70%] flex-row items-center justify-between border-b-2 pb-2'>
          <span className='text-md'>{data[activeTab]}</span>
          <div className='flex flex-row items-center'>
            <span className='text-md'>Most Recent</span>
            <MdOutlineKeyboardArrowDown className='h-[24px] w-[24px]' />
          </div>
        </div>
        {tabPanel()}
      </div>
    </Layout>
  );
}

const ProfileComponent = () => {
  return (
    <div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='100'
        data-aos-offset='200'
        className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
      >
        <div className='flex w-full flex-row items-start justify-between p-2'>
          <div className='flex flex-row items-center'>
            <span className='h-[40px] w-[40px] rounded-full bg-[#0095D9] text-center text-[28px] text-[Gilroy-SemiBold] text-white'>
              S
            </span>
            <div className='flex flex-col pl-4'>
              <div className='flex flex-row'>
                <span className='text-[22px] text-[Gilroy-SemiBold] text-[black]'>
                  Stuff man have to deal with
                </span>
                {/* <span className="text-[18px] text-[Gilroy-SemiBold] text-[#0097DB]">. Follow</span> */}
              </div>
              <span className='text-md text-[#555555]'>
                Answered by Anthony 7h
              </span>
            </div>
          </div>
          {/* <RxCross2 className="h-[20px] w-[20px] text-black" /> */}
        </div>
        <span className='mt-4 pl-2 text-[20px] text-[Gilroy-SemiBold] text-[black]'>
          How do I care for my health without doing anything?
        </span>
        <span className='mt-2 pl-2 text-[14px] text-[#898989] text-[Gilroy-SemiBold]'>
          No answer yet . Last followed 14m
        </span>
        <div className='flex w-full flex-row items-center justify-between p-2'>
          <div className='mt-4 flex w-full flex-row items-center'>
            <div className='flex w-36 flex-row items-center justify-between rounded-xl border border-[#DEDEDE] p-2 pl-4 pr-4'>
              <PiArrowFatUp className='h-4 w-4 text-[#0095D9]' />
              <span className='text-md text-[#717171]'>Upvote</span>
              <PiArrowFatDown className='h-4 w-4' />
            </div>
            <IoChatbubbleOutline className='ml-2 h-6 w-6 text-black' />
            <FiRefreshCcw className='ml-2 h-6 w-6 text-black' />
          </div>
          <BsThreeDots className='ml-2 h-6 w-6 text-black' />
        </div>
      </div>
    </div>
  );
};

const Answers = () => {
  return (
    <div>
      <div
        data-aos='fade-up'
        data-aos-duration='1000'
        data-aos-delay='100'
        data-aos-offset='200'
        className='my-8 flex w-full flex-col rounded-xl border-[1px] border-border bg-white p-5'
      >
        <div className='flex w-full flex-row items-start justify-between p-2'>
          <div className='flex flex-row items-center'>
            <span className='h-[40px] w-[40px] rounded-full bg-[#0095D9] text-center text-[28px] text-[Gilroy-SemiBold] text-white'>
              S
            </span>
            <div className='flex flex-col pl-4'>
              <div className='flex flex-row'>
                <span className='text-[22px] text-[Gilroy-SemiBold] text-[black]'>
                  Stuff man have to deal with
                </span>
                {/* <span className="text-[18px] text-[Gilroy-SemiBold] text-[#0097DB]">. Follow</span> */}
              </div>
              <span className='text-md text-[#555555]'>
                Answered by Anthony 7h
              </span>
            </div>
          </div>
          {/* <RxCross2 className="h-[20px] w-[20px] text-black" /> */}
        </div>
        <span className='mt-4 pl-2 text-[20px] text-[Gilroy-SemiBold] text-[black]'>
          How do I care for my health without doing anything?
        </span>
        <span className='mt-2 pl-2 text-[14px] text-[#898989] text-[Gilroy-SemiBold]'>
          No answer yet . Last followed 14m
        </span>
        <div className='flex w-full flex-row items-center justify-between p-2'>
          <div className='mt-4 flex w-full flex-row items-center'>
            <div className='flex w-36 flex-row items-center justify-between rounded-xl border border-[#DEDEDE] p-2 pl-4 pr-4'>
              <PiArrowFatUp className='h-4 w-4 text-[#0095D9]' />
              <span className='text-md text-[#717171]'>Upvote</span>
              <PiArrowFatDown className='h-4 w-4' />
            </div>
            <IoChatbubbleOutline className='ml-2 h-6 w-6 text-black' />
            <FiRefreshCcw className='ml-2 h-6 w-6 text-black' />
          </div>
          <BsThreeDots className='ml-2 h-6 w-6 text-black' />
        </div>
      </div>
    </div>
  );
};

const Questions = () => {
  const data1 = [
    {
      id: 0,
      heading:
        "Do real fighter pilots really fly around with their masks hanging loose half the time like they do in the movies?",
      text: "4 answers Last followed 8mo",
    },
    {
      id: 1,
      heading:
        "Do real fighter pilots really fly around with their masks hanging loose half the time like they do in the movies?",
      text: "4 answers Last followed 8mo",
    },
    {
      id: 2,
      heading:
        "Do real fighter pilots really fly around with their masks hanging loose half the time like they do in the movies?",
      text: "4 answers Last followed 8mo",
    },
  ];

  return (
    <>
      {data1.map((item) => (
        <div
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='100'
          data-aos-offset='200'
          className='my-8 flex w-full flex-col border-b-[1px] border-[#C3C3C3] bg-white p-5'
        >
          <div className='flex w-full flex-row items-start justify-between p-2'>
            <div className='flex w-full flex-row items-center'>
              <span className='text-[20px] text-[Gilroy-SemiBold] text-black'>
                {item.heading}
              </span>
            </div>
          </div>
          <span className='mt-2 pl-2 text-[14px] text-[#898989] text-[Gilroy-SemiBold]'>
            {item.text}
          </span>
          <div className='flex w-full flex-row items-center justify-between p-2'>
            <div className='mt-4 flex w-full flex-row items-center'>
              <div className='flex w-32 flex-row items-center rounded-full bg-[#F8F8F8] p-2'>
                <img
                  src={require("../../Assets/images/answer.png")}
                  className='ml-2 h-4 w-4'
                />
                <span className='text-md pl-2 text-[#717171]'>Answer</span>
              </div>
            </div>
            <PiArrowFatDown className='mr-2 h-[19] w-[18] text-[#555555]' />
            <BsThreeDots className='ml-2 h-6 w-6 text-black' />
          </div>
        </div>
      ))}
    </>
  );
};

const Followers = () => {
  return (
    <div>
      {data.map((item) => (
        <div className='m-2 mt-4 flex w-full flex-row items-center justify-between border p-2 pl-4 pr-4'>
          <div className='flex flex-row items-center'>
            <img
              src={require("../../Assets/images/profile2.png")}
              className='h-[40px] w-[40px] rounded-full bg-[#0095D9] text-center text-[28px] text-[Gilroy-SemiBold] text-white'
            />
            <div className='flex flex-col pl-4'>
              <div className='flex flex-row items-center'>
                <span className='text-[18px] text-[#555555] text-[Gilroy-SemiBold]'>
                  Nancy Johnson{" "}
                </span>
                <span className='text-md ml-2 text-[#6A6A6A]'>
                  {" "}
                  studied at University of Cambridge (2012)
                </span>
              </div>
              <span className='text-md text-[#6A6A6A]'>
                6.3k views last week
              </span>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center rounded-lg border border-[#0097DB] p-2'>
            <AiOutlineUserAdd className='h-[17px] w-[14px] text-[#0097DB]' />
            <span className='ml-2 text-sm text-[#0097DB]'>Follow</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const Following = () => {
  const data2 = [
    {
      id: 0,
      image: require("../../Assets/images/following1.png"),
      text: "Assignment Forum",
    },
    {
      id: 1,
      image: require("../../Assets/images/following2.png"),
      text: "Space",
    },
    {
      id: 2,
      image: require("../../Assets/images/following3.png"),
      text: "United states",
    },
  ];

  return (
    <div>
      {data2.map((item) => (
        <div className='m-2 mt-4 flex w-[65%] flex-row items-center justify-between border-b pb-8 pl-4 pr-4 pt-8'>
          <div className='flex flex-row items-center'>
            <img
              src={item.image}
              className='h-[44px] w-[44px] rounded-lg bg-[#0095D9] text-center text-[28px] text-[Gilroy-SemiBold] text-white'
            />
            <div className='flex flex-col pl-4'>
              <div className='flex flex-row items-center'>
                <span className='text-[16px] text-[Gilroy-SemiBold] text-black'>
                  {item.text}
                </span>
                {/* <span className="text-md text-[#6A6A6A] ml-2"> studied at University of Cambridge (2012)</span> */}
              </div>
              <span className='text-[14px] text-[#6A6A6A]'>32K followers</span>
              <span className='text-[14px] text-[#6A6A6A]'>
                Questions and discussions regarding academia, assignments,
                homework, school, etc.
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Reviews = () => {
  return (
    <>
      {data.map((item) => (
        <div className='mt-6 flex flex-col items-center border p-8 shadow-lg'>
          <div className='flex w-[90%] flex-row items-start justify-between'>
            <div className='flex flex-row items-center'>
              <img
                src={require("../../Assets/images/profile3.png")}
                className='h-[120px] w-[120px] rounded-full'
              />
              <div className='flex flex-col pl-4'>
                <span className='text-[30px] text-[#555555] text-[Gilroy-SemiBold]'>
                  Theodore{" "}
                </span>
                <div className='mt-4 flex flex-row'>
                  <span className='text-[18px] text-[#8E8E8E] text-[Gilroy-SemiBold]'>
                    Visited For
                  </span>
                  <span className='ml-2 text-[18px] text-[Gilroy-SemiBold] text-black'>
                    Food Poisining
                  </span>
                </div>
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
                  <span className='text-md ml-2 text-[#555555]'>(152)</span>
                </div>
              </div>
            </div>
            <span className='text-md text-[#8E8E8E]'>12 May,2024</span>
          </div>
          <span className='text-md mt-4 w-[90%] text-[#8E8E8E]'>
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release.
          </span>
          <span className='text-md mt-4 w-[90%] text-[#8E8E8E]'>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum software like Aldus PageMaker including
            versions of Lorem Ipsum
          </span>
        </div>
      ))}
    </>
  );
};

const Spaces = () => {
  const images = [
    "https://s3-alpha-sig.figma.com/img/4ad3/218e/91325235b506925419c879025ee57826?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S2kGcY0tcN8Z5roNl-0TGZBfI4ldIYcL40ZTFPE2~oNFTJFj1v-OzFcmaL4F2FXpXZr3MzD-PuigQ0TAnU2i2yxlhcJDk2M1rcDZBc1Xccq8SiOgT-subdoqMEicY-xyETDUHhQsDMozGa8jc9C5Ig4qAmmRhEaDo7GG94xCY0oOvUGR8MoRii~AynKv4m9GiewiXc8ffEI86iQhizisbJ6glzwzgvdUqnTCAKwz6efnYgS1V52LiQz~FG1LQwguCQKWg~syVcTKV~JOhzwGcD7uiJlWhFLtQYkARF8JbAJwyVSJnh8axkINvNQVyvzAdOcmt4hU4SfuNivv7R1f5Q__",
    "https://s3-alpha-sig.figma.com/img/0a26/80a5/323e67e62a1eb1cbc3dd70c08baaa8ee?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILSoYXX5uCgUXy28kKAI3~9sKpBTqfdaN2aN7C9ReHSMHv~tOiumaZHJPYTXt9ro7wGdww7KRSDc7MeiFp8lu~d7DJFjwMduxZFRzQScEl2aiM79dDM3UkcMlO3ya93gXgOlPI71K4pDtWGfphe2RSTmAyTDPbCBOX2mCa9fOHg3fXuE5ZIMlnee1UDin2tNSWLz~vEFVCfyzPeChqHhT5qLIGb7LicNVjJTmnoTGROwP0XQ3LWhkzz-2pNk-PFc0bbNQ4-0DLY4Wmoolvlh~5iiUxPCD3B49XV4ajCrPKxqz2BKe5kfdpMrj48LqxxYgVuXZ~0MOis7Gq6YuoherA__",
    "https://s3-alpha-sig.figma.com/img/6b6a/324a/72a7b49edcd031fee6bf1bdc073c5c10?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRSC16yIoxR5CjiYGjBFi5~Gp1ywE7hjt6eqvwvwGUoyGqXZq4BBHnRhk0Nu9DAq5eVT7pkv6xNZJhDd02iURU4IUSrfDvTyYw6PpMy8tG3na0wCPimiWrnov61Yrvxj1S6fW-eIOs-8KHrrZOcn6XuvaSiuMxjOrJKliCXTccniti4PU-k~SuTcgbGVP4y8n8quRnYmp04nRr8xxpHOD2EQI2VF~I1qgrQYPeqs-t-ZQz17NAtQW-vc4EfixWg6N7U1rajK4D6gFTq7It7AH1OJt4k9GxL7aHM891ZkckdFJuxdIucMXozDFUBD340g3tDdFlAV6oZZlb1s48w0XQ__",
    "https://s3-alpha-sig.figma.com/img/4ad3/218e/91325235b506925419c879025ee57826?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S2kGcY0tcN8Z5roNl-0TGZBfI4ldIYcL40ZTFPE2~oNFTJFj1v-OzFcmaL4F2FXpXZr3MzD-PuigQ0TAnU2i2yxlhcJDk2M1rcDZBc1Xccq8SiOgT-subdoqMEicY-xyETDUHhQsDMozGa8jc9C5Ig4qAmmRhEaDo7GG94xCY0oOvUGR8MoRii~AynKv4m9GiewiXc8ffEI86iQhizisbJ6glzwzgvdUqnTCAKwz6efnYgS1V52LiQz~FG1LQwguCQKWg~syVcTKV~JOhzwGcD7uiJlWhFLtQYkARF8JbAJwyVSJnh8axkINvNQVyvzAdOcmt4hU4SfuNivv7R1f5Q__",
    "https://s3-alpha-sig.figma.com/img/0a26/80a5/323e67e62a1eb1cbc3dd70c08baaa8ee?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ILSoYXX5uCgUXy28kKAI3~9sKpBTqfdaN2aN7C9ReHSMHv~tOiumaZHJPYTXt9ro7wGdww7KRSDc7MeiFp8lu~d7DJFjwMduxZFRzQScEl2aiM79dDM3UkcMlO3ya93gXgOlPI71K4pDtWGfphe2RSTmAyTDPbCBOX2mCa9fOHg3fXuE5ZIMlnee1UDin2tNSWLz~vEFVCfyzPeChqHhT5qLIGb7LicNVjJTmnoTGROwP0XQ3LWhkzz-2pNk-PFc0bbNQ4-0DLY4Wmoolvlh~5iiUxPCD3B49XV4ajCrPKxqz2BKe5kfdpMrj48LqxxYgVuXZ~0MOis7Gq6YuoherA__",
    "https://s3-alpha-sig.figma.com/img/6b6a/324a/72a7b49edcd031fee6bf1bdc073c5c10?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRSC16yIoxR5CjiYGjBFi5~Gp1ywE7hjt6eqvwvwGUoyGqXZq4BBHnRhk0Nu9DAq5eVT7pkv6xNZJhDd02iURU4IUSrfDvTyYw6PpMy8tG3na0wCPimiWrnov61Yrvxj1S6fW-eIOs-8KHrrZOcn6XuvaSiuMxjOrJKliCXTccniti4PU-k~SuTcgbGVP4y8n8quRnYmp04nRr8xxpHOD2EQI2VF~I1qgrQYPeqs-t-ZQz17NAtQW-vc4EfixWg6N7U1rajK4D6gFTq7It7AH1OJt4k9GxL7aHM891ZkckdFJuxdIucMXozDFUBD340g3tDdFlAV6oZZlb1s48w0XQ__",
  ];

  return (
    <div>
      <div className='mt-6 flex flex-col items-center p-8'>
        <div className='flex w-[90%] flex-col items-center md:flex-row md:items-start md:justify-between'>
          <div className='flex flex-row items-center'>
            <div className='flex flex-col pl-4'>
              <span className='text-[30px] text-[#555555] text-[Gilroy-SemiBold]'>
                Welcome to Spaces!{" "}
              </span>
              <div className='mt-2 flex flex-row'>
                <span className='text-[18px] text-[#8E8E8E] text-[Gilroy-SemiBold]'>
                  Follow Spaces to explore your interests on Quora.
                </span>
              </div>
              <div className='mt-8 flex w-full flex-row items-center'>
                <div className='flex flex-row items-center rounded-full border border-[#0095D9] p-2 pl-4 pr-4'>
                  <MdAddCircleOutline className='ml-2 h-4 w-4 text-[#0095D9]' />
                  <span className='pl-2 text-sm text-[#0095D9]'>
                    Create a Space
                  </span>
                </div>
                <div className='ml-4 flex flex-row items-center rounded-full border border-[#0095D9] p-2 pl-4 pr-4'>
                  <RiCompass3Line className='ml-2 h-4 w-4 text-[#0095D9]' />
                  <span className='pl-2 text-sm text-[#0095D9]'>
                    Discover Spaces
                  </span>
                </div>
              </div>
            </div>
          </div>
          <img
            src='https://s3-alpha-sig.figma.com/img/29b2/7009/84a716b85814569d689635d2ec454fa2?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GHXTETXoK1NFGWtXjeoY9BxOWT24eljCxiCWOJxEwTuY75vzsam4TvoyatrSf06oOUAkHg5ILhMQ7-UhhrcipdK6V6Q4cLBXR5MYl6TcDFYikilXq7a5XCtbAM-3cKfbHrfcvwcN-kJC~pLn2YUflJzSNg63KamazLr~bNnWRZvrBAZwFlTK2QsIihoMx5ldFuID-I7hkl06Kh2OLbJlMqLhXs9FhHGzsX~DoHISJEAh63d0G8HO4BgV5lU3SJ36x63H~~QEjTLckvrw45nPrFdUZ2NDkgQLTS-VAyuITH4Z-jhaAcq7l5fQeGKntiggIIp6II7Wu7JFISu6kfQQsw__'
            className='h-[140px] w-[240px] sm:mt-4'
          />
        </div>
        <div className='mt-6 flex w-[90%] flex-col'>
          <span className='text-[30px] text-[#555555] text-[Gilroy-SemiBold]'>
            Discover Spaces{" "}
          </span>
          <div className='mt-2 flex flex-row'>
            <span className='text-[18px] text-[#565656] text-[Gilroy-SemiBold]'>
              Spaces you might like
            </span>
          </div>
        </div>
        <div className='mt-4 grid w-[80%] grid-cols-1 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {images.map((item, index) => (
            <div className='flex flex-col items-center sm:w-full md:w-[100%] lg:w-[220px]'>
              <img
                src={item}
                className='h-[180px] w-full rounded-tl-xl rounded-tr-xl'
                alt={`pic-${index}`}
              />
              <span className='mt-4 text-center text-[18px] text-[Gilroy-SemiBold] text-[black]'>
                United State of America
              </span>
              <span className='mt-2 text-center text-[12px] text-[#636363]'>
                Erectile Dystunction, Premoture Ejaculation, Testicular` Pain
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
