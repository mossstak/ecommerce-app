'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Product = {
  id: string
  productName: string
  productType: string
  roastLevel: string
  // Add other fields as needed
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/products`,
          { cache: 'no-store' }
        )
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        setProducts(data)
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message)
        } else {
          setError('Unknown error')
        }
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto p-[100px]">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      <ul className="lg:grid lg:grid-cols-3 gap-6 flex flex-col justify-center items-center">
        {products.map((product: Product) => (
          <li key={product.id} className='flex justify-around'>
            <Link href={`/shop/${product.id}`}>
              <div className="border w-[300px] lg:w-[350px] p-4 rounded-lg hover:shadow-lg transition-shadow">
                <h1 className='!text-[24px] lg:!text-[32px] text-center'>{product.productName}</h1>
                <div className="flex justify-around">
                  <div>{product.productType}</div>
                  <div>{product.roastLevel}</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
