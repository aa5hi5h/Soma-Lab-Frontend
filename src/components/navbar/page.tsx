import { Blend } from "lucide-react"
import Logo from "../Logo"
import { Button } from "../ui/button"


const Navbar = () => {
    return (
        <div
      className="flex items-center justify-between pr-10 lg:px-20 sticky top-0 z-50 bg-white h-[80px]">
      <div className="px-4">
        <div className="w-40">
                    <Logo />
                </div>
                </div>

                <div className="flex lg:space-x-4 items-center">
                    <Button className="bg-[#565add] hover:bg-[#565add]/75">Book a Demo</Button>
                    <Button variant={"ghost"}>SignIn</Button>
                </div>
            </div>
    )
}

export default Navbar