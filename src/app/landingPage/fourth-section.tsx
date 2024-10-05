import Image from "next/image"
import HeroImage1 from "../../../public/client Soma Lab.png"
import HeroImage2 from "../../../public/Client-Soma-Lab-2.png"
import HeroImage3 from "../../../public/Client-Soma-Lab-3.png"
import HeroImage4 from '../../../public/Client-Soma-Lab-4.png'


const FourthSection = () => {

    return (
        <div className="md:pt-10 max-w-5xl mx-auto pb-32 px-10">
        <div
  className="text-[#111019] md:text-center flex flex-col justify-center items-center md:text-8xl text-5xl gap-4 font-bold tracking-tighter pb-10 md:pb-20">
  <div>
  Mimic <span className="text-blue-500">real</span> patient
  </div>
  <div>interactions</div>
</div>
<div>
        <div className="mx-auto bg-[#eff0ff] rounded-[40px] md:rounded-[80px] md:p-20  pt-10 items-center justify-center">
                <div className="text-[#2b1c50] mx-auto text-center flex  justify-center items-center text-3xl md:text-6xl py-10  font-bold">
                        Speech-Based Interactions
                    </div> 
                    <div className="md:w-2/3 text-xl md:text-2xl font-normal justify-center text-center w-4/5 mx-auto">

Our AI models can simulate patient speech with emotional expressions, helping you practice delivering bad news, discussing treatment plans, and navigating sensitive conversations.
‍
Interact with patients experiencing different emotional states, such as anxiety, depression, or stress, and learn how to provide compassionate care.

                    </div>

                    <div className=" p-10  md:p-0 md:pt-10 transform rotate-[-2deg]">
      <div className="border-2 rounded-md border-dashed border-[#2b1c50] p-4 inline-block">
        <Image src={HeroImage1} alt="Image" className="rounded-md" />
      </div>
    </div>
        </div>
    </div>
    <div className="py-20 px-0 md:px-10">
    <div className="md:flex items-center justify-between md:space-x-10 space-y-10 md:space-y-0">
            <div className="bg-[#e8f5e3] rounded-[40px] md:w-1/2 p-10 hover:scale-105 w-full hover:shadow-xl">
                <Image
                src={HeroImage2}
                alt="image"
                width={1920}
                height={1080}
                className="
                rounded-xl
                w-80
                "
                />

                <div className="text-2xl items-center justify-center flex pt-10 text-[#224229] font-semibold ">
                Physical Procedures         

                </div>
                <div className="font-normal text-center pt-4">
                Conduct comprehensive head-to-toe assessments on virtual patients, practicing your ability to detect abnormalities and signs of illness.

Learn to perform targeted physical exams based on patient symptoms, such as cardiac, respiratory, neurological, and musculoskeletal assessments.
                </div>
            </div>
            <div className="bg-[#f8edfb] rounded-[40px] md:w-1/2 p-10 hover:scale-105 hover:shadow-xl">
                <Image
                src={HeroImage3}
                alt="image"
                width={1920}
                height={1080}
                className="
                rounded-xl
                w-80
                "
                />

                <div className="text-2xl items-center justify-center font-semibold flex pt-10 text-[#450f3a]">
                Differential Diagnosis Building

                </div>
                <div className=" text-center pt-4">
                Practice building differential diagnoses through interactive case studies, honing your diagnostic skills by considering multiple potential conditions and systematically ruling them out.
                </div>
            </div>
</div>
<div className="md:flex items-center pt-20  justify-between md:space-x-10 space-y-10 md:space-y-0">
<div className="bg-[#e3f3ff]  rounded-[40px] md:w-2/5 md:h-[520px] p-10 hover:scale-105 hover:shadow-xl">

                <div className="text-3xl font-semibold tracking-tight text-center items-center justify-center flex pt-4 text-[#1b224b]">
                Interact with Hospital Providers

                </div>
                <div className=" text-center pt-6">
                Simulate real-world interactions with hospital providers to order and interpret medical tests, ensuring you understand the practical aspects of patient management and collaborative care.
                </div>
            </div>
            <div className="bg-[#eff0ff] rounded-[40px] md:w-3/5 md:h-[520px] overflow-hidden p-10 hover:scale-105 hover:shadow-xl">
                <div className="text-2xl font-semibold items-center justify-center flex pt-10 text-[#2b1c50]">
                Customized Learning Paths

                </div>
                <div className="text-[#2b1c50] text-center pt-4">
                Our system ensures that subtle, often-missed cases, such as patients with underlying issues like substance abuse or mental health crises, are not overlooked. By incorporating bias analysis and communication skill assessments, our feedback helps refine both your clinical and empathetic abilities.
                </div>
                <Image
                src={HeroImage4}
                alt="image"
                width={1920}
                height={1080}
                className="
                rounded-xl
                pt-4
                "
                />
            </div>
            </div>
    </div>
</div>
    )
}

export default FourthSection