// src/services/productservice.tsx
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}
export async function fetchProducts() {
  const response = await fetch('/api/products');

  if (!response.ok) {
    const errorText = await response.text();  // read error response body
    console.error('API error response:', errorText);
    throw new Error(`Failed to fetch products: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

