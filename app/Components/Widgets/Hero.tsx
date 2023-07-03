import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import HeroImg from "@/app/Assets/app-screen.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Shared/Button'

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='bg-[#EFF3F8] '>


                    <div className=' lg:px-10 md:flex lg:space-x-36 md:space-x-14  justify-center items-center lg:mx-20 pt-10 '>
                        <div className='space-y-3'>
                            <h1 className='font-extrabold text-4xl font-serif'>Everyday Health Care Connected
                            </h1>
                            <p className='text-[#8A8FB9] font-normal '>Get started today, it is free

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
            </Wrapper>
        </section>

    )
}

export default Hero
