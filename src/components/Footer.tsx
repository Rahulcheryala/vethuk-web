import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden">

      {/* Main Footer Content */}
      <div className="pt-[60px] pb-9 tablet:px-[100px] mobile:max-sm:p-10 sm:p-[60px] px-5 bg-[#0C214C] flex flex-col tablet:gap-y-12 gap-y-9">
        <div className="flex flex-wrap justify-between items-start gap-y-9">
          {/* Left Side - Logo and Name */}
          <div className="w-fit">
            <Link href="#" className="tablet:h-[120px] mobile:h-20 h-[72px] flex-shrink-0 flex items-center gap-x-8">
              <Image
                src="/images/Logo.svg"
                alt="Vethuk Logo"
                width={24}
                height={24}
                className="w-24 h-24 rounded-full object-cover"
              />
              <span className="tablet:text-[56px] mobile:text-[38px] text-[34px] font-semibold leading[49px] text-white">Vethuk</span>
            </Link>
          </div>
        </div>

        <div className='flex flex-col gap-y-4'>
          <div className="border-t border-[#D9D9DA]"></div>

          <div className="flex flex-col mobile:flex-row justify-between mobile:items-center">
            <div className="text-white mobile:text-base text-sm font-normal leading-5 mobile:m-0 mb-6">
              All Rights Reserved
            </div>
            <div className="flex mobile:flex-row flex-col gap-6 mobile:items-center">
              <Link href="/terms_conditions" className="text-white tablet:text-base text-sm font-normal leading-5">Terms of Use</Link>
              <Link href="/privacy_policy" className="text-white tablet:text-base text-sm font-normal leading-5">Privacy Policy</Link>
              <Link href="#" className="text-white tablet:text-base text-sm font-normal leading-5">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
