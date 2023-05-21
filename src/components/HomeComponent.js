import Image from 'next/image'
import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import 'swiper/css';
import Link from 'next/link';

function HomeComponent() {
  return (
    <main>
        <section className='relative' style={{width: '100vw', overflow: 'hidden', zIndex: -1}}>
            <div className='absolute flex flex-col items-center w-full' style={{top:'50%',left:'50%',transform: 'translate(-50%,-50%)'}}>
                <p className='font-bold text-2xl'>Spesifik Arama</p>
                <div className='flex w-full justify-center'>
                    <input className='z-50 rounded-xl w-1/2' placeholder='Aramanızı Yapın' style={{padding: 10, background: 'white', borderTopRightRadius: 0, borderBottomRightRadius: 0 }} />
                    <a href="#" className='bg-blue-500 text-white p-3 rounded-xl' style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0}}>ARA</a>
                </div>
            </div>
            <Image 
                src="/homebg.jpg"
                width="1920"
                height="100"
                className='z-10'
            />
            <div className='absolute bottom-0 w-full'>
                <Image 
                    src="/wave.svg"
                    width="1920"
                    height="100"
                />
            </div>
        </section>
        <section className='flex justify-center'>
            <div className='w-5/6'>
                <h2 className='font-bold text-xl mb-5'>Özel Fırsatlar</h2>
                <Swiper
                    modules={[A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad111.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad111.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad111.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad111.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad111.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad111.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <section className='flex justify-center mt-20'>
            <div className='w-5/6'>
                <h2 className='font-bold text-xl mb-5'>Influencerlardan İncelemeler</h2>
                <Swiper
                    modules={[A11y]}
                    spaceBetween={50}
                    slidesPerView={4}
                >
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="#" className='w-full h-32 rounded-xl bg-black relative group'>
                            <div className='absolute h-full w-full rounded-xl top-0 z-50 bg-slate-300/90 p-3 opacity-0 group-hover:opacity-100 transition-all'>
                                <p className='text-white'>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <Image 
                                src="/ad11.jpeg"
                                width="500"
                                height="100"
                                className='rounded-xl'
                            />
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        <section className='flex justify-center mt-32 w-11/12'>
            <div className='w-1/2 flex justify-end'>
                <Image 
                    src="/coin.jpeg"
                    width='500'
                    height='500'
                />
            </div>
            <div className='w-1/2 p-3 flex-col'>
                <p>Etstur Puan Sistemi: Tatilinizi daha da özel kılmak için size özel bir puan sistemine sahibiz! Etstur olarak, misafirlerimize teşekkür etmek ve unutulmaz konaklama deneyimlerini ödüllendirmek amacıyla benzersiz bir puan programı sunuyoruz.</p>
                <p className='mt-3'>Nasıl Çalışır: Her Etstur rezervasyonu yaparken, otel konaklamanız boyunca kazanabileceğiniz puanlar elde edersiniz. Ne kadar çok konaklarsanız, o kadar çok puan kazanırsınız. Puanlarınız, gelecekteki rezervasyonlarınızda indirimler, ücretsiz güncellemeler veya ek hizmetler için kullanabileceğiniz harika fırsatlara dönüşür.</p>
                <p className='mt-3'>Puan Kazanma: Rezervasyonlarınızı Etstur üzerinden yaparak başlangıçta puan kazanmaya başlarsınız. Ayrıca, Etstur özel kampanyalarında ve etkinliklerinde de puanlar kazanabilirsiniz. Puanlarınız otel konaklamanızı tamamladıktan sonra hesabınıza otomatik olarak yansıtılır.</p>
                <p className='mt-3'>Puan Kullanma: Biriktirdiğiniz puanları, gelecekteki rezervasyonlarınızda kullanabilirsiniz. Özel indirimler, ücretsiz ekstralar veya yükseltmeler için puanlarınızı değerlendirebilirsiniz. Puanlarınızı kullanmak için sitemizdeki hesabınızı ziyaret edin ve puanlarınızı istediğiniz şekilde kullanın.</p>
                <p className='mt-3'>Etstur Puan Sistemi ile tatil deneyiminizi daha da unutulmaz hale getirin. Her konaklamanızda kazandığınız puanlarla daha fazla ayrıcalık yaşayın. Hemen rezervasyon yapın ve puanlarınızı biriktirmeye başlayın!</p>
                <Link href='/' className='p-3 px-8 border-2 border-orange-300 rounded-full text-orange-300 hover:bg-orange-300 hover:text-white transition-all flex w-full justify-center mt-5'>Harca</Link>
            </div>
        </section>
    </main>
  )
}

export default HomeComponent