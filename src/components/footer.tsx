"use client"
import Link from "next/link"
import Image from "next/image"
import LogoImage from "../../public/Soma Lab Logo.svg"
import { useRouter } from "next/navigation";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    const router = useRouter()

    return (
        <div className="max-w-7xl py-8 mx-auto justify-between flex flex-col space-y-4 items-center md:flex-row  "> 

<div>
            <Link href={"/"}>
            <Image 
            src={LogoImage}
            alt="Logo"
            width={100}
            height={100}
            className="w-32" />
            </Link>
        </div>
        <div className="text-gray-600 text-lg font-medium">
                        © {currentYear} SomaLab.ai. All rights reserved.
                    </div>
                    <div className="text-lg font-medium mt-4 text-center">
                    Built by - <span onClick={()  => router.push("https://x.com/de6a5hi5h")}  className="text-blue-500 underline underline-offset-4 cursor-pointer">@Deba5hi5h</span>, <span className="text-[#2EA44F] cursor-pointer">Github</span>
                </div>
        </div>
    )
}

export default Footer