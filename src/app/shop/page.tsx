'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
// This file is part of the eCommerce app project.
// It is a simple page component for the shop section of the application.
// The page component is exported as the default export of this module.
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/products`, { cache: 'no-store' });
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setProducts(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product: any) => (
          <li key={product.id}>
            <Link href={`/shop/${product.id}`}>
              {product.productName} | {product.productType} | {product.roastLevel}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}