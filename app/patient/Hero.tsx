import React from 'react'
import { Wrapper } from '../Components/Shared/Wrapper'
import HeroImg from "@/app/Assets/app-screen.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Components/Shared/Button'
import BrandImg from "@/app/Assets/brands.png"
import SC from "@/app/Assets/Screenshot3.png"

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='bg-[#EFF3F8] '>


                    <div className=' lg:px-10 md:flex lg:space-x-36 md:space-x-14  justify-center items-center lg:mx-20 pt-10 '>
                        <div className='space-y-3'>
                            <h1 className='font-extrabold text-4xl font-serif'>Everyday Health Care Connected
                            </h1>
                            <p className='text-[#8A8FB9] font-normal '>Easily and privately connect with your medical provider over your mobile phone. Register today, it is free.

                            </p>
                            <form action="" className='space-y-1'>
                        <input
                            
                            type="text" className='border-2 border-primary rounded px-1.5' required placeholder='Full Name' />
                        <br />
                        <input
                            
                            type="text" className='border-2 border-primary rounded px-1.5' required placeholder='Email Address' />
                        <br />
                       
                    </form>
                            <p className='text-sm'>Are You a Licensed Medical Provider?

</p>
                            <div className='max-w-fit'>
                                <Link href={"/"}>
                                    <Button txt={'GET STARTED'} />
                                </Link>
                            </div>
                        </div>
                        <div className='  mt-5'>
                            <Image src={HeroImg} alt={'Hero '} width={300} height={300} />
                        </div>
                    </div>
                </div>
           
               
                
                <div className='mt-10'>
                <Image src={SC} alt='Brands' />
                </div>
            </Wrapper>
        </section>

    )
}

export default Hero
