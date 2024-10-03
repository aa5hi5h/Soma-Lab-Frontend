import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import YCLogo from "../../../public/YCLogo.png"
import Image from "next/image"
import LogoSlider from "@/components/slider"


const HeroSection = () => {

    return (
        <div className="xl:py-24 py-10 px-4 sm:px-6 md:px-8 bg-[#d1d1f7] flex flex-col space-y-4 items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-5xl xl:text-[84px] tracking-tighter font-bold  mb-2 md:mb-4">
          Soma Lab - <span className="text-blue-600">AI-Based</span> Simulation Medicine
        </h1>
            <p className=" text-lg xl:text-2xl text-muted-foreground font-medium px-4 md:text-center
            ">
We make medical training more effective and scalable with AI-powered simulations.

            </p>

            <div className="flex max-w-md mx-auto gap-4 py-10 xl:pt-14">
            <div className='relative w-full rounded-xl h-14 flex flex-col bg-white'>
            <div className='relative h-14 z-10 rounded-md'>
                <Input  
                placeholder="Your Email"
                type="email"
                 className='absolute rounded-md inset-0 h-full' />
                <Button
          size='sm'
          className='absolute flex gap-1 right-0 inset-y-0 h-full rounded-l-none'>
          Get In Touch
          <Mail />
        </Button>
        </div>
        </div>
            </div>
            <div className="max-w-sm mx-auto pt-[16px] px-10">
                <Image src={YCLogo} alt="YC" width={250} height={150} />
            </div>
            </div>
            <div>
                <LogoSlider />
            </div>
            </div>
    )
}

export default HeroSection