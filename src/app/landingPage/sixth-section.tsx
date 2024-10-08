"use client"
import { Button } from "@/components/ui/button"
import { CircleArrowRight, ExternalLink } from "lucide-react"
import HeroImage from "../../../public/Dashboard Soma Lab.png"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {motion } from "framer-motion"
import AnimatedCone from "../../../public/Animated Cone.webp"
import AnimatedDonut from "../../../public/Animated Donut.webp"

const SixthSection = () => {

    const router = useRouter()

    const circularMotion = {
        animate: {
          x: ["0%", "50%", "0%", "-50%", "0%"],
          y: ["-50%", "0%", "50%", "0%", "-50%"],
        },
        transition: {
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        },
      }

      
  const Rotation = {
    animate: {
        rotate: [0, 360],
      },
      transition: {
        duration: 40,
        repeat: Infinity,
        ease: "linear"
      },
    };



    return (
        <div className="flex flex-col space-y-8  pt-8 items-center justify-center">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#111019] items-center justify-center flex">
      <div className="relative flex flex-col items-center justify-center py-20">
          <div className="flex text-white flex-col justify-center items-center space-y-10">
            <div className="text-4xl px-8 md:px-0 md:text-8xl md:w-2/3 md:mx-auto text-center">
            Let&apos;s create more healthcare jobs.
            </div>
            <Button onClick={() => router.push("/contact") } className="w-48 bg-[#565add] hover:bg-[#565add]/75">Book a Demo</Button>
          </div>

          <motion.div
        className="absolute z-10 left-[8%] top-[35%] w-1/4"
        animate={Rotation.animate}
        transition={Rotation.transition}
      >
        <Image
          src={AnimatedCone}
          alt="Left animated image"
          width={200}
          height={200}
          className="w-32 h-32 md:w-52 md:h-52"
        />
      </motion.div>

      <motion.div
        className="absolute z-10 right-[8%] top-[35%] w-1/4"
        animate={circularMotion.animate}
        transition={circularMotion.transition}
      >
        <Image
          src={AnimatedDonut}
          alt="Right animated image"
          width={200}
          height={200}
          className="w-32 h-32 md:w-60 md:h-60"
        />
      </motion.div>

          <Image className=" w-2/3 mt-20 z-20 rounded-[40px] mx-auto shadow-indigo-400 shadow-2xl "
          src={HeroImage}
          alt="Image"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex md:flex-row items-center pb-16 max-w-7xl border-b border-slate-400 space-y-4 md:space-y-0 pt-16 w-full space-x-16 justify-between px-8 md:px-16">
        <div className=" flex space-x-2 items-center">
            <CircleArrowRight className="w-12 h-12" />
        <span className="text-3xl font-medium">founders@somalab.ai</span>
        </div>
         <h2 className=" md:text-4xl text-2xl font-bold tracking-tight md:w-[45%]">
         Creating meaningful healthcare jobs with AI-based simulation.
         </h2>
      </div>
    </div>
    )
}

export default SixthSection