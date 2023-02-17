import Image from 'next/image'

import backgroundImage from '@/images/Renora-Assets-Flow.png'
import backgroundImage2 from '@/images/Renora-Assets-Flow (1).png'

export function AuthLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
        <div className="light-bg hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="m-auto my-4"
            src={backgroundImage}
            alt="Automation"
            unoptimized
          />
          <Image
            className="m-auto"
            src={backgroundImage2}
            alt="Automation"
            unoptimized
          />
        </div>
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
