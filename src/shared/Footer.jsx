import { Icon } from '@iconify/react';
import FooterImage from '../assets/footer.png';
import TopazLogoImage from '../assets/topazLogo.png';

export default function Footer() {
  return (
    <div className='w-full flex justify-center'>
      <img src={FooterImage} className='w-[294px] h-[294px]' />
      <div className='flex flex-col justify-center gap-y-[24px]'>
        <h1 className='font-main text-[48px] leading-[57px]'>Want to become a Bell Boys pioneer?</h1>
        <div className='flex justify-center gap-x-[24px]'>
          <div className='flex gap-x-[12px] justify-center border border-primary rounded-[16px] py-[12px] px-[48px] cursor-pointer'>
            <img src={TopazLogoImage} className='w-[24px] h-[24px]' />
            <p className='font-sub font-bold'>Topaz</p>
          </div>

          <div className='flex gap-x-[12px] justify-center border border-primary rounded-[16px] py-[12px] px-[48px] cursor-pointer'>
            <Icon icon="ri:mail-send-line" width={24} height={24} />
            <p className='font-sub font-bold'>E-mail</p>
          </div>
        </div>
      </div>
    </div>
  )
}
