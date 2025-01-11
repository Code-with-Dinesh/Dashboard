import React, { useState } from 'react';
import { FaUserAlt } from "react-icons/fa";
import { Button } from '@mui/material';
import { FaCartShopping } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";
import Rating from '@mui/material/Rating';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Dashboard = () => {
  const [age, setAge] = useState('')
  const [category,setcategory] = useState('')
  return (
    <>
    <div className={`gap-4 mt-11 z-10   flex flex-wrap justify-center items-center bg-zinc-300 p-4`}>
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

    <div className='heading  flex justify-between ml-12 p-4'>
       <p className='text-lg font-semibold'>Best Selling Products</p>
       <p className='mr-6'><CiMenuKebab color='black' size={20}/></p>
    </div>
    <div className="flex flex-col ml-12 p-3 gap-2 sm:flex-row sm:items-center sm:gap-5">
  <div className="flex items-center gap-2 ">
    <h1 className="text-sm font-medium">Show By</h1>
    <Box style={{ width: "250px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Rows</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
         
          value={age}
          label="Age"
          onChange={(e) => setAge(e.target.value)}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>

  <div className="flex items-center  justify-between">
    <h1 className="text-sm font-medium">Category</h1>
    <Box style={{ width: "250px" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          
          label="Category"
          onChange={(e) => setcategory(e.target.value)}
        >
          <MenuItem value={10}>Men</MenuItem>
          <MenuItem value={20}>Women</MenuItem>
          <MenuItem value={30}>Child</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </div>
    </div>

    <div className="overflow-x-auto p-4">
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr className="bg-blue-500">
        <th className="px-4 py-2 border">UID</th>
        <th className="px-4 py-2 border">Product</th>
        <th className="px-4 py-2 border">Category</th>
        <th className="px-4 py-2 border">Brand</th>
        <th className="px-4 py-2 border">Price</th>
        <th className="px-4 py-2 border">Stock</th>
        <th className="px-4 py-2 border">Rating</th>
      </tr>
    </thead>
    <tbody>
      {[
        { uid: 1, product: "Laptop", category: "Electronics", brand: "Dell", price: "$899", stock: 25, rating: "4.5" },
        { uid: 2, product: "Smartphone", category: "Electronics", brand: "Apple", price: "$1099", stock: 15, rating: "4.7" },
        { uid: 3, product: "Headphones", category: "Accessories", brand: "Sony", price: "$199", stock: 50, rating: "4.3" },
        { uid: 4, product: "Watch", category: "Fashion", brand: "Fossil", price: "$249", stock: 30, rating: "4.6" },
        { uid: 5, product: "Shoes", category: "Footwear", brand: "Nike", price: "$129", stock: 40, rating: "4.4" },
        { uid: 6, product: "Tablet", category: "Electronics", brand: "Samsung", price: "$499", stock: 20, rating: "4.5" },
        { uid: 7, product: "Backpack", category: "Accessories", brand: "Adidas", price: "$79", stock: 60, rating: "4.2" },
        { uid: 8, product: "Camera", category: "Photography", brand: "Canon", price: "$599", stock: 10, rating: "4.8" },
        { uid: 9, product: "T-shirt", category: "Fashion", brand: "H&M", price: "$29", stock: 100, rating: "4.1" },
        { uid: 10, product: "Sunglasses", category: "Accessories", brand: "Ray-Ban", price: "$149", stock: 35, rating: "4.6" },
      ].map((item) => (
        <tr key={item.uid}>
          <td className="px-4 py-2 border text-center">{item.uid}</td>
          <td className="px-4 py-2 border">{item.product}</td>
          <td className="px-4 py-2 border">{item.category}</td>
          <td className="px-4 py-2 border">{item.brand}</td>
          <td className="px-4 py-2 border text-right">{item.price}</td>
          <td className="px-4 py-2 border text-center">{item.stock}</td>
          <td className="px-4 py-2 border text-center"><Rating size='medium' defaultValue={2}></Rating></td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </>
  );
};

export default Dashboard;
