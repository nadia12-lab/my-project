import { NextResponse } from 'next/server';

// Your existing local iPhone products
const localProducts = [
  { id: 1, name: "iPhone 11", price: 25000, image: "/images/iphone11.jpg" },
  { id: 2, name: "iPhone 12", price: 29000, image: "/images/iphone12.jpg" },
  { id: 3, name: "iPhone 13", price: 35000, image: "/images/iphone13.jpg" },
  { id: 4, name: "iPhone 14", price: 40000, image: "/images/iphone14.jpg" },
  { id: 5, name: "iPhone 15", price: 45000, image: "/images/iphone15.jpg" },
  { id: 6, name: "iPhone 16", price: 50000, image: "/images/iphone16.jpg" },
  { id: 7, name: "iPhone 16 Promax", price: 60000, image: "/images/iphone16promax.jpg" },
  { id: 8, name: "iPhone 16 Pro", price: 65000, image: "/images/iphone16pro.jpg" },
];

export async function GET() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      // Return local products if external API fails
      return NextResponse.json(localProducts);
    }

    const externalProducts = await response.json();

    // Map external products to your format
    const mappedExternalProducts = externalProducts.map((product: any, index: number) => ({
      id: 100 + index,
      name: product.title,
      price: Math.round(product.price * 100),
      image: product.image,
    }));

    const allProducts = [...localProducts, ...mappedExternalProducts];

    return NextResponse.json(allProducts);
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(localProducts);
  }
}
