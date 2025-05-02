// src/app/product-grid/page.tsx
import Image from 'next/image';
import React from 'react';

interface ProductType {
  id: number;
  title: string;  // Platzi API uses 'title' not 'name'
  price: number;
  image: string;
}

async function getProducts(): Promise<ProductType[]> {
  const res = await fetch('https://fakestoreapi.com/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products: ProductType[] = await res.json();
  return products;
}

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div>
      <h1>Product Grid</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: 10 }}>
            <Image
              src={product.image}
              alt={product.title}
              width={180}
              height={180}
              style={{ objectFit: 'contain' }}
            />
            <h2>{product.title}</h2>
            <p>${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
