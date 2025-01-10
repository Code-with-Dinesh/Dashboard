import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Button } from '@mui/material';
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
const Dashboard = () => {
  return (
    <>
    <div className=" gap-4   flex flex-wrap justify-center bg-zinc-300 p-4">
      {/* Card 1 */}
      <div className="w-full sm:w-[48%] md:w-[40%] mt-8  bg-gradient-to-r relative rounded-md from-customGreen1 to-customGreen2 h-44">
        <div className="flex justify-between p-4">
          <p className="text-xl text-white">Total User</p>
          <FaUserAlt size={30} color="white" />
        </div>
        <p className="p-4 text-3xl text-white font-semibold">277</p>
        <div className="absolute bottom-2 left-4 flex items-center">
          <Button variant="outlined" style={{ border: '1px solid white', color: 'white' }}>
            +95%
          </Button>
          <span className="text-white ml-3">Last Month</span>
        </div>
      </div>

      {/* Card 2 */}
      <div className="w-full sm:w-[48%] md:w-[40%] mt-8 bg-gradient-to-r relative rounded-md from-custompink1 to-custompink2 h-44">
        <div className="flex justify-between p-4">
          <p className="text-xl text-white">Total Orders</p>
          <FaCartShopping size={30} color='white' />
        </div>
        <p className="p-4 text-3xl text-white font-semibold">338</p>
        <div className="absolute bottom-2 left-4 flex items-center">
          <Button variant="outlined" style={{ border: '1px solid white', color: 'white' }}>
            +30%
          </Button>
          <span className="text-white ml-3">Last Month</span>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-full  sm:w-[48%] md:w-[40%] bg-gradient-to-r relative rounded-md from-customblue1 to-customblue2 h-44">
        <div className="flex justify-between p-4">
          <p className="text-xl text-white">Total Products</p>
          <FaBagShopping size={30} color='white' />
        </div>
        <p className="p-4 text-3xl text-white font-semibold">89</p>
        <div className="absolute bottom-2 left-4 flex items-center">
          <Button variant="outlined" style={{ border: '1px solid white', color: 'white' }}>
            +20%
          </Button>
          <span className="text-white ml-3">Last Month</span>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-full sm:w-[48%] md:w-[40%] bg-gradient-to-r relative rounded-md from-customyellow1 to-customyellow2 h-44">
        <div className="flex justify-between p-4">
          <p className="text-xl text-white">Revenue</p>
          <MdReviews size={30} color='white' />
        </div>
        <p className="p-4 text-3xl text-white font-semibold">$12,345</p>
        <div className="absolute bottom-2 left-4 flex items-center">
          <Button variant="outlined" style={{ border: '1px solid white', color: 'white' }}>
            +15%
          </Button>
          <span className="text-white ml-3">Last Month</span>
        </div>
      </div>
     
    </div>

    <div className='heading bg-white flex justify-between p-4'>
       <p className='text-lg font-semibold'>Best Selling Products</p>
       <p className='mr-6'><CiMenuKebab color='black' size={20}/></p>
    </div>
    </>
  );
};

export default Dashboard;
