import Image from "next/image"
import Link from "next/link"
import LogoImage from "../../public/Soma Lab Logo.svg"

const Logo = () => {

    return (
        <div>
            <Link href={"/"}>
            <Image 
            src={LogoImage}
            alt="Logo"
            width={150}
            height={150}
            className="w-40" />
            </Link>
        </div>
    )
}


export default Logo