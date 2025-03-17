import { Menu } from "@headlessui/react";
import React from "react";
import { FaBirthdayCake } from "react-icons/fa";
import { notificationsData } from "./Datas";
import { BiCalendar } from "react-icons/bi";

function NotificationComp({ children }) {
  return (
    <Menu>
      <Menu.Button>{children}</Menu.Button>
      <Menu.Items className='absolute right-0 top-20 z-50 flex w-full flex-col gap-4 rounded-md bg-white px-6 py-4 shadow-lg ring-1 ring-border focus:outline-none sm:w-8/12 md:w-6/12 xl:w-2/6'>
        <div className='flex-btn flex-wrap gap-4'>
          <h2 className='text-md font-medium text-main'>Notifications</h2>
          <button className='rounded-md px-4 py-2 text-sm text-subMain hover:bg-text'>
            Mark all read
          </button>
        </div>
        {/* notif */}
        <div className='flex max-h-[500px] flex-col gap-4 overflow-y-scroll'>
          {notificationsData.map((item) => (
            <div
              key={item.id}
              className='w-full rounded-lg border border-border p-4'
            >
              <div className='grid items-center gap-4 xs:grid-cols-12'>
                <div className='xs:col-span-2'>
                  <div
                    className={`${
                      item.action === 1
                        ? "bg-subMain text-white"
                        : "bg-text text-subMain"
                    } text-md flex-colo h-12 w-12 rounded-full border-[.5px] border-subMain`}
                  >
                    {item.action === 1 ? <FaBirthdayCake /> : <BiCalendar />}
                  </div>
                </div>
                <div className='xs:col-span-10'>
                  {item.action === 1 ? (
                    <p className='text-sm text-textGray'>
                      Its{" "}
                      <span className='font-medium text-main'>
                        {item.user.title}
                      </span>{" "}
                      birthday today
                    </p>
                  ) : (
                    <p className='text-sm text-textGray'>
                      Recent appointment with{" "}
                      <span className='font-medium text-main'>
                        {item.user.title}
                      </span>{" "}
                      at 2:00 PM
                    </p>
                  )}
                  <div className='flex-btn gap-4'>
                    <p className='mt-2 text-xs font-light text-textGray'>
                      {item.time}
                    </p>
                    <p className='text-xs text-textGray'>2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Menu.Items>
    </Menu>
  );
}

export default NotificationComp;
