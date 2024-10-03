"use client"

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import HeroImage from "../../../public/Animated SS.png";

const SecondSection: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  const simulationX = useTransform(scrollYProgress, [0, 0.2, 0.6], ['-100%', '-50%', '0%']);
  const medicineX = useTransform(scrollYProgress, [0.6, 0.8, 1], ['100%', '50%', '0%']);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 1.2]);

  return (
    <div className="py-16">
      <div className="text-[#2b1c50] px-6 md:w-3/5 mx-auto text-center flex justify-center items-center text-xl font-bold mb-16">
        We're founders and researchers from some of the most prestigious medical institutions in the world
      </div>
      <div className="h-[150vh] mt-[-10rem] relative overflow-hidden">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-between py-16">
          <motion.h1 
            className="absolute top-[15%] left-0 right-0 text-[15vw] font-bold text-gray-200 z-10 whitespace-nowrap overflow-visible"
            style={{ x: simulationX }}
          >
            SIMULATION
          </motion.h1>

          <motion.div
            className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-3xl aspect-video rounded-xl shadow-2xl shadow-zinc-800 z-20"
            style={{ scale: imageScale }}
          >
            <Image 
              src={HeroImage}
              alt="Simulation Medicine" 
              layout="fill"
              objectFit="cover"
              className='rounded-xl'
            />
          </motion.div>

          <motion.h1 
            className="absolute top-[100%] left-0 right-0 text-[15vw] font-bold text-gray-200 z-10 whitespace-nowrap"
            style={{ x: medicineX }}
          >
            MEDICINE
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;