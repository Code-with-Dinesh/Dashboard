import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaGreaterThan, FaProductHunt } from "react-icons/fa";
import { FaFileInvoice } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";
import LockIcon from '@mui/icons-material/Lock';
import { IoIosNotifications } from "react-icons/io";

const Sidebar = ({toggle}) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);

  const toggleDashboard = () => setIsDashboardOpen(!isDashboardOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);
  const toggleInvoice = () => setIsInvoiceOpen(!isInvoiceOpen);

  return (
    <div  className={`fixed top-16 left-0 h-screen bg-zinc-200 w-64 p-4 transition-transform duration-300 ${
      toggle ? "transform translate-x-0" : "transform -translate-x-full"
    }`}>
      <ul>
        {/* Dashboard Section */}
        <li className="flex flex-col mb-4 hover:bg-zinc-300 rounded-md ease-in">
          <div
            className="flex items-center justify-between  p-3 cursor-pointer"
            onClick={toggleDashboard}
          >
            <div className="flex items-center">
              <span className="text-xl mr-2"><MdDashboard color='black' /></span>
              <Button variant="text" className="text-white "><span className='text-black text-md'>DASHBOARD</span></Button>
            </div>
            <span className={`transition-transform ${isDashboardOpen ? 'rotate-90' : ''}`}>
              <FaGreaterThan color='black' />
            </span>
          </div>
          {isDashboardOpen && (
            <ul className="ml-8 mt-2 text-black">
              <li className="mb-2  cursor-pointer">Ecommerce</li>
              <li className="mb-2  cursor-pointer">Analytical</li>
              <li className=" cursor-pointer">CRM</li>
            </ul>
          )}
        </li>

        {/* Products Section */}
        <li className="flex flex-col mb-4 rounded-md hover:bg-zinc-300 ease-in">
          <div
            className="flex items-center justify-between  p-3 cursor-pointer"
            onClick={toggleProducts}
          >
            <div className="flex items-center">
              <span className="text-xl mr-2"><FaProductHunt color='black' /></span>
              <Button variant="text" className="text-white"><span className='text-black'>PRODUCTS</span></Button>
            </div>
            <span className={`transition-transform ${isProductsOpen ? 'rotate-90' : ''}`}>
              <FaGreaterThan color='black'/>
            </span>
          </div>
          {isProductsOpen && (
            <ul className="ml-8 mt-2 text-black">
              <li className="mb-2  cursor-pointer">Product List</li>
              <li className="mb-2  cursor-pointer">Product View</li>
              <li className=" cursor-pointer">Product Upload</li>
            </ul>
          )}
        </li>

        {/* Invoice Section */}
        <li className="flex flex-col mb-4 rounded-md ease-in hover:bg-zinc-300">
          <div
            className="flex items-center justify-between  p-3 cursor-pointer"
            onClick={toggleInvoice}
          >
            <div className="flex items-center">
              <span className="text-xl mr-2"><FaFileInvoice color='black' /></span>
              <Button variant="text" className="text-white"><span className='text-black'>INVOICE</span></Button>
            </div>
            <span className={`transition-transform ${isInvoiceOpen ? 'rotate-90' : ''}`}>
              <FaGreaterThan color='black' />
            </span>
          </div>
          {isInvoiceOpen && (
            <ul className="ml-8 mt-2 text-black">
              <li className="mb-2  cursor-pointer">Invoice List</li>
              <li className=" cursor-pointer">Invoice Details</li>
            </ul>
          )}
        </li>

        {/* Other Static Sections */}
        <li className="flex items-center  p-3 mb-4 cursor-pointer hover:bg-zinc-300 ease-in rounded-md">
          <span className="text-xl mr-2"><FaCartShopping color='black'/></span>
          <Button variant="text" className="text-white"><span className='text-black'>INVOICE</span></Button>
        </li>
        <li className="flex items-center hover:bg-zinc-300 ease-in rounded-md mb-4 p-3 cursor-pointer">
          <span className="text-xl mr-2"><FaMessage color='black' />
          </span>
          <Button variant="text" className="text-white"><span className='text-black'>MESSAGE</span></Button>
        </li>
        <li className="flex items-center hover:bg-zinc-300 ease-in rounded-md mb-4 p-3 cursor-pointer">
          <span className="text-xl mr-2"><IoIosSettings color='black' /></span>
          <Button variant="text" className="text-white"><span className='text-black'>SETTING</span></Button>
        </li>
        <li className="flex items-center hover:bg-zinc-300 ease-in rounded-md mb-4 p-3 cursor-pointer">
          <span className="text-xl mr-2"><IoIosNotifications color='black' /></span>
          <Button variant="text" className="text-white"><span className='text-black'>NOTIFICATION</span></Button>
        </li>
      </ul>
      <div className='w-full bg-gray-300 h-28 flex items-center justify-center rounded-md '>
      <Button variant="outlined" startIcon={<LockIcon style={{color:"black", fontSize:'23px'}}/>}>
        <span className='text-black'>Logout</span>
      </Button>
      </div>
    </div>
  );
};

export default Sidebar;
