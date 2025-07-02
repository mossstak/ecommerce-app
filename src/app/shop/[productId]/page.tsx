'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useCart } from '@/context/CartContext'

type Product = {
  id: number // Make sure this matches your database/API!
  productName: string
  productType: string
  roastLevel: string
  description: string
  farmName: string
  farmRegion: string
  farmCountry: string
  farmAltitude: string
  producer: string
  varietal: string
  harvestSeason: string
  farmingPractice?: string[]
  farmStory: string
  processingMethod: string
  roastDate: string
  roastProfile: string
  tastingNotes?: string[]
  brewingRecommendation?: string[]
  weight?: string[]
  price?: string[]
}

async function getProduct(productId: string) {
  const res = await fetch(`/api/products/${productId}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Product not found')
  return res.json()
}

interface ProductPageProps {
  params: Promise<{ productId: string }>
}

const ProductPage: React.FC<ProductPageProps> = ({ params: paramsPromise }) => {
  const params = React.use(paramsPromise)
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    getProduct(params.productId)
      .then(setProduct)
      .catch((err) => setError(err.message))
  }, [params.productId])

  if (error) return <div>{error}</div>
  if (!product) return <div>Loading...</div>

  return (
    <div className="mt-[100px]">
      <Link href="/shop" className="text-blue-500 underline mb-4">
        Back to Products
      </Link>
      <h1>{product.productName}</h1>
      <p>
        <strong>Type:</strong> {product.productType}
      </p>
      <p>
        <strong>Roast Level:</strong> {product.roastLevel}
      </p>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Farm Name:</strong> {product.farmName}
      </p>
      <p>
        <strong>Region:</strong> {product.farmRegion}
      </p>
      <p>
        <strong>Country:</strong> {product.farmCountry}
      </p>
      <p>
        <strong>Altitude:</strong> {product.farmAltitude}
      </p>
      <p>
        <strong>Producer:</strong> {product.producer}
      </p>
      <p>
        <strong>Varietal:</strong> {product.varietal}
      </p>
      <p>
        <strong>Harvest Season:</strong> {product.harvestSeason}
      </p>
      <p>
        <strong>Farming Practice:</strong> {product.farmingPractice?.join(', ')}
      </p>
      <p>
        <strong>Farm Story:</strong> {product.farmStory}
      </p>
      <p>
        <strong>Processing Method:</strong> {product.processingMethod}
      </p>
      <p>
        <strong>Roast Date:</strong> {product.roastDate}
      </p>
      <p>
        <strong>Roast Profile:</strong> {product.roastProfile}
      </p>
      <p>
        <strong>Tasting Notes:</strong> {product.tastingNotes?.join(', ')}
      </p>
      <p>
        <strong>Brewing Recommendation:</strong>{' '}
        {product.brewingRecommendation?.join(', ')}
      </p>
      <p>
        <strong>Weight:</strong>{' '}
        {product.weight?.map((w) => `${w} grams`).join(', ')}
      </p>
      <p>
        <strong>Price:</strong> {product.price?.map((p) => `£${p}`).join(', ')}
      </p>
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="ml-2 w-16 border rounded px-2 py-1"
      />
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => addToCart(product, quantity)}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductPage
