import Image from "next/image"

import MedicalPng from "../../../public/undraw_medical_research_qg4d.svg"
import MedicalPng2 from "../../../public/undraw_doctors_p6aq.svg"
import MedicalPng3 from "../../../public/Medicine Heart.svg"
import MedicalPng4 from "../../../public/MEdicine Bin.svg"
const ThirdSection = () => {

    return (
        <div className="md:pt-10 max-w-5xl mx-auto pb-32 px-10">
        <div className="
      text-[#111019]
      text-center
      flex
      flex-col
      justify-center
      items-center
      text-4xl
      md:text-7xl
      font-bold
      tracking-tighter
      py-10
      md:py-20
      px-4
    ">
      <div className="leading-tight">
        Addressing <span className="text-blue-500">global</span> healthcare
      </div>
      <div className="leading-tight">
        challenges
      </div>
    </div>
  
<div className="md:flex items-center justify-center">
        <div className="bg-[#b2b3f1] rounded-[60px] md:p-20">
          <Image
            src={MedicalPng}
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-md
                w-full  
                p-20
                md:p-0
                "
          />
        </div>
        <div className=" md:ml-20">
          <div className="flex gap-6">
            <div className="w-full">
              <div className="text-[#111019] pt-4 pl-4 font-medium leading-normal md:text-3xl text-2xl">
              The world is getting older, and healthcare costs are rising. Chronic diseases among an aging population mean we need more trained healthcare workers.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10 md:pt-20 md:pl-10 md:mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:mx-auto md:space-x-20 items-center justify-center">
          <div>
          <div className="flex gap-6">
            <div className="w-full">
              <div className="text-[#111019] pt-4 pl-4 font-medium leading-normal md:text-3xl text-2xl">
              Despite high demand for healthcare professionals, there&apso;s a persistent shortage. This isn&apos;t due to a lack of interest or low pay, but because of limited clinical training positions.
              </div>
            </div>
            </div>
          </div>

          <div className="bg-[#eff0ff] rounded-[60px] md:p-20">
          <Image
            src={MedicalPng2}
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-md
                w-full   
                p-20
                md:p-0
                "
          />
        </div>
        </div>
      </div>
      <div className="md:flex items-center pt-10 md:pt-20 justify-center">
        <div className="bg-[#b2b3f1] rounded-[60px] md:p-20">
          <Image
            src={MedicalPng3}
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-md
                w-full
                p-20
                md:p-0     
                "
          />
        </div>
        <div className=" md:ml-20">
          <div className="flex gap-6">
            <div className="w-full">
              <div className="text-[#111019] pt-4 pl-4 font-medium leading-normal md:text-3xl text-2xl">
              Medical schools can expand didactic training easily, but clinical training slots and residency positions remain fixed. This bottleneck is a significant barrier to increasing the number of trained doctors and nurses.              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-10 md:pt-20 md:pl-10 md:mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:mx-auto md:space-x-20 items-center justify-center">
          <div>
          <div className="flex gap-6">
            <div className="w-full">
              <div className="text-[#111019] pt-4 pl-4 font-medium leading-normal md:text-3xl text-2xl">
              Our platform allows clinical trainers to oversee more students remotely, increasing the number of professionals trained without the need for more physical resources.              </div>
            </div>
            </div>
          </div>

          <div className="bg-[#eff0ff] rounded-[60px] md:p-20">
          <Image
            src={MedicalPng4}
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-md
                w-full
                p-20
                md:p-0   
                "
          />
        </div>
        </div>
      </div>

          </div>
    )
}

export default ThirdSection