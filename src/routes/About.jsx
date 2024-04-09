import React from 'react'
import Footer from '../shared/Footer';
import Nav from '../shared/Nav';

import Banner from '../assets/banner.png';

export default function About() {
  return (
    <div className='bg-page min-h-screen w-full flex flex-col'>
      <Nav />

      <div className='py-[96px]'>

        <div className='flex flex-col items-center w-auto'>
          <h1 className='font-main text-[96px]'>Manifesto</h1>
          <div className='h-[4px] w-2/12 rounded-[2px] bg-primary divider-shadow'></div>
        </div>

        <div className='flex flex-col gap-y-[44px] pt-[64px] font-sub font-[400] text-[16px] leading-[36px] tracking-[2px]'>
          <div className='text-center'>
            <p>GM, once again, Men of Culture!</p>
          </div>

          <div className='text-center'>
            <p>Bell Boys are here to welcome you.</p>
            <p>To us, NFTs are more than digital assets.</p>
            <p>They're a lifestyle.</p>
          </div>

          <div className='text-center'>
            <p>There's no utility but YOU-tility.</p>
            <p>No roadmap but ART-map.</p>
            <p>No promises but the DEGEN spirit.</p>
          </div>

          <p className='text-center'>If you vibe with this, then join us.</p>

          <div className='text-center'>
            <p>There's no utility but YOU-tility.</p>
            <p>And for Aptos! </p>
          </div>
        </div>
      </div>

      <div className='py-[120px] gap-y-[128px] flex flex-col items-center'>
        <img src={Banner} className='w-[1179px] h-[393px]' />

        <div className=''>
          <div className='flex flex-col items-center w-auto'>
            <h1 className='font-main text-[96px]'>High Quality</h1>
            <div className='h-[4px] w-7/12 rounded-[2px] bg-primary divider-shadow'></div>
          </div>

          <p className='font-sub font-[400] text-[16px] leading-[36px] tracking-[2px] pt-[32px]'>Each Bell Boys is a meticulously crafted artwork, boasting a resolution of HD pictures.</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}

