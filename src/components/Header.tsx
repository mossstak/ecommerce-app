import Link from 'next/link'
import { aboutpath,homepath } from '@/paths'
import  { ThemeSwticher } from "./theme/theme-switcher"
import { buttonVariants } from './ui/button'

const Header = () => {
  return (
    <nav className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between">
      <div className='flex items-center gap-x-2'>
        <Link
          href={homepath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h1 className="text-lg font-semibold">Ecommerce Shop</h1>
        </Link>
      </div>
      <div className='flex items-center gap-x-2'>
        <ThemeSwticher/>
        <Link
          href={aboutpath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <h1 className="text-lg font-semibold">About</h1>
        </Link>
                <Link
          href={aboutpath()}
          className={buttonVariants({ variant: "ghost" })}
        >
          <h1 className="text-lg font-semibold">Shop</h1>
        </Link>
      </div>
    </nav>
  )
}

export default Header
