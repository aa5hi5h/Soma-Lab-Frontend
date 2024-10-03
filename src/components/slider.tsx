'use client'

import Slider from 'react-infinite-logo-slider';
import Image from 'next/image';
import Logo1 from "../../public/slider logo 1.png"
import Logo2 from "../../public/slider logo 2.png"
import Logo3 from "../../public/slider logo 3.png"

const LogoSlider = () => {
    return (
        <div className='pt-20 max-w-[420px]  lg:max-w-6xl mx-auto'>
           <Slider width="180px" duration={20} >

            <Slider.Slide>
            <Image src={Logo1} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo2} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo3} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo1} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo2} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo3} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo1} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo2} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
            <Slider.Slide>
            <Image src={Logo3} alt="logo" width={70} height={70}  className=""  />
            </Slider.Slide>
           </Slider>
        </div>
    )
}

export default LogoSlider