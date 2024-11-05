import React from 'react'
import { Link } from 'react-router-dom'
import blogger from '../../../public/blogger.png'

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#1A202C] dark:bg-[#1A202C] border-t border-t-[#FF9900] dark:border-t-[#FF9900] w-full">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <img src={blogger} width="100px" className="filter grayscale invert dark:filter-none" />
                            </div>
                            <div>
                                <p className="text-sm text-[#D1D5DB] dark:text-[#F7F5F2]">
                                    &copy; Copyright 2023. All Rights Reserved by DevUI.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[#D1D5DB] dark:text-[#F7F5F2]">
                                Company
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Pricing
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Affiliate Program
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Press Kit
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[#D1D5DB] dark:text-[#F7F5F2]">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Account
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Help
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Customer Support
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-[#D1D5DB] dark:text-[#F7F5F2]">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=" text-base font-medium text-[#D1D5DB] dark:text-[#F7F5F2] hover:text-[#FF9900] dark:hover:text-[#FF9900]"
                                        to="/"
                                    >
                                        Licensing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer
