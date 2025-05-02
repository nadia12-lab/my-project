// src/app/api/products/route.ts
import { NextResponse } from 'next/server';

// Your existing local iPhone products
const localProducts = [
  {
    "id": 1,
    "name": "iPhone 11",
    "price": 25000,
    "image": "/images/iphone11.jpg"
  },
  {
    "id": 2,
    "name": "iPhone 12",
    "price": 29000,
    "image": "/images/iphone12.jpg"
  },
  {
    "id": 3,
    "name": "iPhone 13",
    "price": 35000,
    "image": "/images/iphone13.jpg"
  },
  {
    "id": 4,
    "name": "iPhone 14",
    "price": 40000,
    "image": "/images/iphone14.jpg"
  },
  {
    "id": 5,
    "name": "iPhone 15",
    "price": 45000,
    "image": "/images/iphone15.jpg"
  },
  {
  "id": 6,
  "name" : "Iphone 16",
  "price" : 50000,
  "image" : "/images/iphone16.jpg"
  },
  {
  "id": 7,
  "name" : "Iphone 16 Promax",
  "price": 60000,
  "image": "/images/iphone16promax.jpg"
},
{
  "id": 8,
  "name" : "Iphone 16 Pro",
  "price": 65000,
  "image": "/images/iphone16pro.jpg"
},
  
];

export async function GET() {
  try {
    // Fetch products from Fake Store API
    const response = await fetch('https://fakestoreapi.com/products');
    
    if (!response.ok) {
      // If Fake Store API fails, return only local products
      return NextResponse.json(localProducts);
    }
    
    // Parse the external products
    const externalProducts = await response.json();
    
    // Map external products to match your local product structure
    // and assign IDs starting after your local products
    const mappedExternalProducts = externalProducts.map((product, index) => ({
      id: 100 + index, // Start IDs at 100 to avoid conflicts
      name: product.title, // Fake Store API uses 'title' instead of 'name'
      price: Math.round(product.price * 100), // Convert to your price format
      image: product.image // Keep the external image URL
    }));
    
    // Combine local and external products
    const allProducts = [...localProducts, ...mappedExternalProducts];
    
    // Return the combined products
    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    // If any error occurs, return only the local products
    return NextResponse.json(localProducts);
  }
}
