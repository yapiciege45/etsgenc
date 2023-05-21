import Link from 'next/link'
import React from 'react'

function NavbarComponent() {
  return (
    <header className='w-full h-16 bg-white flex justify-center border-b'>
        <div className='w-5/6 h-full flex justify-between items-center'>
            <div className='flex items-center'>
                <a href="#" className='relative'>
                    <p className='text-4xl font-bold text-red-500'>ets</p>
                    <p className='text-sm text-red-500 absolute top-7 right-0'>sunum</p>
                </a>
                <nav className='flex items-center ml-12'>
                    <Link href='/' className='text-sm p-2 px-4 rounded-xl hover:bg-slate-100 transition-all uppercase'>Ana Sayfa</Link>
                    <Link href='/rota-olustur' className='ml-5 text-sm p-2 px-4 rounded-xl hover:bg-slate-100 transition-all uppercase'>Rota Oluştur</Link>
                    <Link href='/medya' className='ml-5 text-sm p-2 px-4 rounded-xl hover:bg-slate-100 transition-all uppercase'>Medya</Link>
                </nav>
            </div>
            <div className='flex items-center'>
                <a href='#' className='text-sm p-2 px-4 rounded-xl hover:bg-slate-100 transition-all uppercase'>Giriş Yap</a>
                <a href='#' className='ml-5 text-sm p-2 px-4 rounded-xl hover:bg-slate-100 transition-all uppercase'>Kayıt Ol</a>
            </div>
        </div>
    </header>
  )
}

export default NavbarComponent