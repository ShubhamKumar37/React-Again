import React from "react";
import { MenuSelect, ProfileSelect } from "../components/Form";
import { TbHeartPlus, TbUser } from "react-icons/tb";
import {
  AiOutlineDollar,
  AiOutlineFileDone,
  AiOutlinePlusSquare,
  AiOutlinePoweroff,
} from "react-icons/ai";
import { MdDrafts, MdOutlineNotificationsNone } from "react-icons/md";
import NotificationComp from "../components/NotificationComp";
import { useNavigate } from "react-router-dom";
import { BiChat, BiMenu, BiPlusCircle } from "react-icons/bi";
import MenuDrawer from "../components/Drawer/MenuDrawer";
import { BsBookmark, BsHeartArrow, BsHeartFill } from "react-icons/bs";
import { RiDraftLine } from "react-icons/ri";

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  // toggle drawer
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const DropDown1 = [
    {
      title: "Chats",
      icon: BiChat,
      onClick: () => {
        navigate("/chat");
      },
    },
    {
      title: "Create Ad",
      icon: AiOutlineFileDone,
      onClick: () => {
        navigate("/login");
      },
    },

    {
      title: "Monetization",
      icon: AiOutlineDollar,
      onClick: () => {
        navigate("/login");
      },
    },

    {
      title: "Your content",
      icon: BiPlusCircle,
      onClick: () => {
        navigate("/login");
      },
    },

    {
      title: "Bookmarks",
      icon: BsBookmark,
      onClick: () => {
        navigate("/login");
      },
    },

    {
      title: "Drafts",
      icon: MdDrafts,
      onClick: () => {
        navigate("/login");
      },
    },

    {
      title: "Try Docare +",
      icon: TbHeartPlus,
      onClick: () => {
        navigate("/login");
      },
    },
  ];

  return (
    <>
      {isOpen && <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}

      {/* cmp */}
      <div className='fixed top-0 z-40 grid w-full grid-cols-12 items-center bg-dry bg-opacity-95 px-2 xs:px-8 md:grid-cols-2 xl:w-5/6 2xl:max-w-[1640px]'>
        <div className='col-span-10 flex flex-row items-center gap-0 py-4 sm:col-span-11 md:col-span-1 md:py-0'>
          {/* <button
            onClick={toggleDrawer}
            className="block xl:hidden border text-2xl bg-greyed w-16 md:w-12 h-12 rounded-md flex-colo text-textGray transitions hover:bg-border"
          >
            <BiMenu />
          </button> */}
          {/* <h2 className='text-[28px] font-[500] text-[#0097DB]'>avijo</h2> */}
          {/* search */}
          <div className='flex flex-row items-end px-4 pb-0'>
            <h1 className='text-[34px] font-[600] text-black'>avijo</h1>
            <h6 className='text-[20px] font-[500] italic text-[#FD7979]'>
              Experts
            </h6>
          </div>
        </div>
        <div className='col-span-2 mr-8 items-center justify-end sm:col-span-1 md:col-span-1 md:mr-8'>
          <div className='float-right flex items-center justify-center gap-4'>
            <div className='relative' onClick={() => navigate("/chat")}>
              <BiChat className='text-2xl hover:text-subMain' />
              <span className='absolute -right-2.5 -top-2.5 rounded-full bg-subMain px-1.5 py-0.5 text-center text-xs font-semibold text-white'>
                5
              </span>
            </div>
            <NotificationComp>
              <div className='relative'>
                <MdOutlineNotificationsNone className='text-2xl hover:text-subMain' />
                <span className='absolute -right-2.5 -top-2.5 rounded-full bg-subMain px-1.5 py-0.5 text-center text-xs font-semibold text-white'>
                  5
                </span>
              </div>
            </NotificationComp>
            <div className='mr-2 hidden flex-row items-center md:flex'>
              <ProfileSelect datas={DropDown1}>
                <div className='flex flex-row items-center rounded-lg pl-4'>
                  <img
                    src='/images/user1.png'
                    alt='user'
                    className='h-12 w-12 rounded-full border border-border object-cover'
                  />
                  <p className='pl-2 pt-[10%] text-sm font-medium text-textGray'>
                    Dr. Daudi
                  </p>
                </div>
              </ProfileSelect>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
