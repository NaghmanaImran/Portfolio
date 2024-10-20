import React, { useEffect } from 'react';
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="hero"
      className="min-h-screen bg-no-repeat bg-[url(/banner9.png)] bg-left-bottom z-40 lg:bg-[15%] bg-cover"
      style={{ backgroundSize: '55%', backgroundPosition: 'left 100px top 80px' }}
    >
      <Navbar />
      <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
        <div className="hidden lg:block"></div>
        <div className="text-[30px] sm:text-[110px] font-bold leading-tight flex justify-center items-center">
          <div>
            <p
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              I m
            </p>
            <p data-aos="flip-left">Naghmana</p>
            <p data-aos="flip-left">Imran</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
