"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import AnimatedBox from "../../../public/Animated Box.webp"
const FifthSection = () => {

    const router = useRouter()

    return (
        <div className=" mt-[-8rem] pb-16 items-center justify-center flex">
      <div className="md:w-5/6 md:rounded-[40px] bg-[#2b1c50] pb-16 items-center justify-center flex">
        <div className="md:py-32 pt-10 ">
          <div className="md:flex md:px-20 md:space-x-20 md:space-y-0">
            <div className="text-white flex space-y-10">
              <div className="space-y-10 flex-col items-center justify-center flex">
                <div className="md:text-7xl text-4xl text-center">
                CME, Pharma, and Device Training
                </div>
                <div className="text-center md:w-3/4 px-4 md:px-0 md:text-xl py-4">
                Continuing Medical Education (CME) keeps practicing doctors updated with the latest medical advancements. CME often relies on outdated methods, like brief videos, which aren&apos;t effective for deep learning.
                </div>

                <div
                  className="pt-10 md:pt-40 md:flex md:space-x-10 space-y-10 md:space-y-0  items-center justify-between">
                  <div className="md:text-6xl md:mt-[-4rem] text-4xl text-center">
                  We Build For Scale
                  <div className="text-center md:w-3/4 md:mt-[2rem] px-4 md:px-0 mx-auto text-lg  md:text-xl py-4">
                  Our platform is crucial for practicing doctors to stay updated with the latest medical advancements. Traditional CME methods, like short videos, are outdated.

We offer interactive, case-based learning modules that provide practical, engaging training on new treatments, drugs, and medical devices.
‍
Experience different patient profiles and conditions to understand treatment impacts.
                 </div>
                 <Button onClick={() => router.push("/contact") } className="bg-[#565add] hover:bg-[#565add]/75 mx-auto mt-[1rem] md:mt-[2rem] flex gap-2">
                    Book Demo
                    <ArrowRight className="w-6 h-6" />
                    </Button>

                </div>
                <div className="md:mx-auto mx-8 py-[5rem] bg-[#9f92ec] rounded-[40px] md:rounded-[60px] space-y-10 items-center justify-center flex flex-col relative">
                                        <div className="text-4xl md:w-[480px] text-center">
                                            Pharma and Device Training
                                        </div>

                                        <p className="items-center text-center flex md:pb-[8rem] justify-center">
                                            Explore how the drug works for different patient demographics.
                                        </p>

                                        <motion.div
                        className="absolute bottom-[-100px] left-0 transform -translate-x-1/2"
                        animate={{
                            x: ["0%", "50%", "0%", "-50%", "0%"],
                            y: ["-50%", "0%", "50%", "0%", "-50%"],
                        }}
                        transition={{
                            duration: 35,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                                            <Image
                                                src={AnimatedBox}
                                                alt="Rotating Image"
                                                width={200}
                                                height={200}
                                                className="w-32 h-32 md:w-48 md:h-48"
                                            />
                                        </motion.div>
                                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default FifthSection