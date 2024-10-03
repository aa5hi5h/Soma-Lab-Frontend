"use client"
import { Blend, Github } from "lucide-react"
import Logo from "../Logo"
import { Button } from "../ui/button"
import { useRouter } from "next/navigation"

const Navbar = () => {

    const router = useRouter()
    return (
        <div
      className="flex items-center justify-between pr-10 lg:px-20 sticky top-0 z-50 bg-white h-[80px]">
      <div className="px-4">
        <div className="w-40">
                    <Logo />
                </div>
                </div>

                <div className="flex lg:space-x-4 items-center">
                    <Button onClick={() => router.push("/contact")} className="bg-[#565add] hover:bg-[#565add]/75">Book a Demo</Button>
                    <Button onClick={() => router.push("https://github.com/aa5hi5h/Soma-Lab-Frontend")} className="flex space-x-2" variant={"ghost"}>
                        <span>Repo</span><Github /></Button>
                </div>
            </div>
    )
}

export default Navbar