'use client'

import Image from 'next/image'
import Link from 'next/link'
import Heading from '@/components/Heading'
import { shoppath } from '@/paths'

const Home = () => {

  return (
    <div className="bg-gradient-to-r from-[#d19e74] to-[#50341d] h-screen">
      <div className="flex flex-col  gap-3 md:grid md:grid-cols-2 items-center justify-around h-full">
        <div className="flex flex-col items-center justify-center gap-[20px]">
          <Image
            src={'/next.svg'}
            width={256}
            height={256}
            alt="Ecommerce Logo"
            className="object-cover"
          />
          <Heading title="Commerce" description="Welcome to my Shop" />
        </div>
        <div className="flex justify-center">
          <Link href={shoppath()} className="text-lg underline">
            Go to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
