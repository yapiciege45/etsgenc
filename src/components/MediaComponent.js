import Image from 'next/image';
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

function MediaComponent() {
  return (
    <div className='p-3 flex justify-center'>
        <div className='w-3/4 mt-5 flex flex-col items-center'>
            <div className='flex flex-col mt-8'>
                <div className='flex items-center border rounded-xl p-3' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    <Image
                        width='48'
                        height='48'
                        src='/blank.jpeg'
                        className='rounded-full border-2 border-blue-500'
                    />
                    <p className='ml-2'>egeyapicii</p>
                </div>
                <div>
                    <Image 
                        src='/hotel.jpeg'
                        width='550'
                        height='600'
                    />
                </div>
                <div className='p-3 border rounded-xl' style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    <p className='text-sm text-slate-500'>22.22.2022</p>
                    <p>Otel çok güzeldi. Yemekler müthiş. Mutlaka tavsiye ederim.</p>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className='flex items-center border rounded-xl p-3' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    <Image
                        width='48'
                        height='48'
                        src='/blank.jpeg'
                        className='rounded-full border-2 border-blue-500'
                    />
                    <p className='ml-2'>egeyapicii</p>
                </div>
                <div>
                    <Image 
                        src='/hotel.jpeg'
                        width='550'
                        height='600'
                    />
                </div>
                <div className='p-3 border rounded-xl' style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    <p className='text-sm text-slate-500'>22.22.2022</p>
                    <p>Otel çok güzeldi. Yemekler müthiş. Mutlaka tavsiye ederim.</p>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className='flex items-center border rounded-xl p-3' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    <Image
                        width='48'
                        height='48'
                        src='/blank.jpeg'
                        className='rounded-full border-2 border-blue-500'
                    />
                    <p className='ml-2'>egeyapicii</p>
                </div>
                <div>
                    <Image 
                        src='/hotel.jpeg'
                        width='550'
                        height='600'
                    />
                </div>
                <div className='p-3 border rounded-xl' style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    <p className='text-sm text-slate-500'>22.22.2022</p>
                    <p>Otel çok güzeldi. Yemekler müthiş. Mutlaka tavsiye ederim.</p>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className='flex items-center border rounded-xl p-3' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    <Image
                        width='48'
                        height='48'
                        src='/blank.jpeg'
                        className='rounded-full border-2 border-blue-500'
                    />
                    <p className='ml-2'>egeyapicii</p>
                </div>
                <div>
                    <Image 
                        src='/hotel.jpeg'
                        width='550'
                        height='600'
                    />
                </div>
                <div className='p-3 border rounded-xl' style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    <p className='text-sm text-slate-500'>22.22.2022</p>
                    <p>Otel çok güzeldi. Yemekler müthiş. Mutlaka tavsiye ederim.</p>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className='flex items-center border rounded-xl p-3' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    <Image
                        width='48'
                        height='48'
                        src='/blank.jpeg'
                        className='rounded-full border-2 border-blue-500'
                    />
                    <p className='ml-2'>egeyapicii</p>
                </div>
                <div>
                    <Image 
                        src='/hotel.jpeg'
                        width='550'
                        height='600'
                    />
                </div>
                <div className='p-3 border rounded-xl' style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    <p className='text-sm text-slate-500'>22.22.2022</p>
                    <p>Otel çok güzeldi. Yemekler müthiş. Mutlaka tavsiye ederim.</p>
                </div>
            </div>
            <div className='flex flex-col mt-8'>
                <div className='flex items-center border rounded-xl p-3' style={{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                    <Image
                        width='48'
                        height='48'
                        src='/blank.jpeg'
                        className='rounded-full border-2 border-blue-500'
                    />
                    <p className='ml-2'>egeyapicii</p>
                </div>
                <div>
                    <Image 
                        src='/hotel.jpeg'
                        width='550'
                        height='600'
                    />
                </div>
                <div className='p-3 border rounded-xl' style={{borderTopLeftRadius: 0, borderTopRightRadius: 0}}>
                    <p className='text-sm text-slate-500'>22.22.2022</p>
                    <p>Otel çok güzeldi. Yemekler müthiş. Mutlaka tavsiye ederim.</p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MediaComponent