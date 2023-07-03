import React from 'react'
import BgImg from "@/app/Assets/herbs2.jpg"
import BgImg2 from "@/app/Assets/family.jpg"

import Image from 'next/image'
import { Wrapper } from '../Shared/Wrapper'


const NewsLetter = () => {
    return (
        <Wrapper>
            <div className='flex'>


                <div className='flex flex-col justify-center items-center space-y-12'>
                    <div className='relative'>
                        <Image src={BgImg} alt='Background' className='opacity-30' height={999} width={999} />
                        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col  '>
                            <h2 className='lg:text-2xl text-[#30207a] text-sm font-medium md:font-bold font-serif text-center'>For Medical Providers
                            </h2>
                            <ul className=' mt-20'>
                            <div className='flex flex-col items-center space-y-2 '>
                             
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                                        <li>
                                            Simple documentation
                                        </li>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                                        <li>
                                            Secure messaging
                                        </li>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                                        <li>
                                            Integrated with Quest
                                        </li>
                                    </div>
                                
                                </div>
                            </ul>
                            <div className='mt-12'>
                            <button
                                className='bg-[#FA6565] md:p-2   text-white rounded-sm text-xs md:text-base font-mono md:font-sans px-1 py-1 md:px-2 mt-0.5 md:mt-4'>
                                LEARN MORE
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center space-y-12 '>
                    <div className='relative'>
                        <Image src={BgImg2} className='opacity-30' alt='Background' height={999} width={999} />
                        <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col  '>
                            <h2 className='lg:text-2xl text-[#30207a] text-sm font-medium md:font-bold font-serif text-center'>For Patients
                            </h2>
                            <ul className='mt-20 '>
                                <div className='flex flex-col items-center space-y-2 '>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                                        <li>
                                            Save a trip to the office
                                        </li>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                                        <li>
                                            Health care in few clicks
                                        </li>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='h-2 w-2 bg-[#30207a] rounded-full mr-2'></div>
                                        <li>
                                            100% price transparency
                                        </li>
                                    </div>
                                </div>
                            </ul>
                            <div className='mt-12'>

                            <button
                                className='bg-[#0AC8D2] md:p-2  text-white rounded-sm text-xs md:text-base font-mono md:font-sans px-1 py-1 md:px-2 mt-0.5 md:mt-4'>
                               LEARN MORE
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>
    )
}
export default NewsLetter
