import React from 'react'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='mt-16 py-6 text-center bg-pink-400 flex gap-4 justify-center items-center'>
    <FaSquareInstagram
      size={30}
      className='hover:text-orange-500 transition duration-300'
    />
    <FaFacebook
      size={30}
      className='hover:text-blue-700 transition duration-300'
    />
    <FaYoutube
      size={30}
      className='hover:text-red-600 transition duration-300'
    />
    <FaTwitter
      size={30}
      className='hover:text-blue-400 transition duration-300'
    />
    <MdAlternateEmail
      size={30}
      className='hover:text-green-500 transition duration-300'
    />
  
  
  <p className='text-blue-800'>Copyright c2024 Designed by NAGHMANA</p>
</div>

  )
}

export default Footer

