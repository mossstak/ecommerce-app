'use client'

import { LucideShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import { aboutpath, homepath, shoppath } from '@/paths'
import { ThemeSwticher } from './theme/theme-switcher'
import { buttonVariants } from './ui/button'

const Header = () => {
  const { cart } = useCart()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white p-4 shadow-md dark:bg-black">
      <div className="flex items-center gap-x-2">
        <Link
          href={homepath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h1 className="text-lg font-semibold">Ecommerce Shop</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <Link
          href={aboutpath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h1 className="text-lg font-semibold">About</h1>
        </Link>
        <Link
          href={shoppath()}
          className={buttonVariants({ variant: 'ghost' })}
        >
          <h1 className="text-lg font-semibold">Shop</h1>
        </Link>
        <ThemeSwticher />
        <Link href="/cart" className={buttonVariants({ variant: 'outline' })}>
          <h1 className="text-lg font-semibold">
            <LucideShoppingCart />
            {cartCount > 0 ? ` (${cartCount})` : ''}
          </h1>
        </Link>
      </div>
    </nav>
  )
}

export default Header
