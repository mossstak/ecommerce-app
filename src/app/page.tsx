import Link from 'next/link'
import Heading from '@/components/Heading'
import { shoppath } from '@/paths'

const Home = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-4 items-center bg-linear-to-r from-[#d19e74] to-[#50341d] h-lvh">
      <Heading title="Ecommerce" description="Welcome to my Shop" />
      <div className="flex-1 flex flex-col items-center">
        <Link href={shoppath()} className="text-sm underline">
          Go to Shop
        </Link>
      </div>
    </div>
  )
}

export default Home
