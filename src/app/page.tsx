"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TikTokCarousel from "./components/TikTokCarousel";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import styles from "./page.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/Navbar/Navbar";

console.log("NavBar:", NavBar);  
interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

const localProducts: ProductType[] = [
  { id: 101, title: "iPhone 11", price: 25000.0, image: "/images/iphone11.jpg" },
  { id: 102, title: "iPhone 12", price: 29000.0, image: "/images/iphone12.jpg" },
  { id: 103, title: "iPhone 13", price: 35000.0, image: "/images/iphone13.jpg" },
  { id: 104, title: "iPhone 14", price: 40000.0, image: "/images/iphone14.jpg" },
  { id: 105, title: "iPhone 15", price: 45000.0, image: "/images/iphone15.jpg" },
];

export default function HomePage() {
  const [apiProducts, setApiProducts] = useState<ProductType[]>([]);

  // Fetch API products on client side
  useEffect(() => {
    async function fetchApiProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch API products");
        const data = await res.json();
        setApiProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApiProducts();
  }, []);

  // Combine local and API products
  const products = [...localProducts, ...apiProducts];

  const handleAddToCart = (title: string) => {
    toast.success(`"${title}" added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Background image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: 'url("/images/bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />
      {/* Dark overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // adjust opacity as needed
          zIndex: 1,
        }}
      />
      {/* Page content */}
      <main
        style={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          padding: "1rem",
          minHeight: "100vh",
          width: "100%",
        }}
      >
        {/* NavBar at the top */}
        <NavBar />

      
        <TikTokCarousel />
        <ToastContainer />

        <h1 style={{ textAlign: "center", margin: "2rem 0" }}>All Products</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: 12,
                padding: 16,
                background: "#fff",
                color: "#000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                style={{ objectFit: "contain", marginBottom: 12 }}
                unoptimized={product.image.startsWith("http") === false ? false : true}
              />
              <h2 style={{ fontSize: 18, margin: "12px 0 6px" }}>{product.title}</h2>
              <p style={{ fontWeight: "bold", color: "#a86a1a" }}>${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product.title)}
                style={{
                  marginTop: 12,
                  padding: "8px 16px",
                  background: "#a86a1a",
                  color: "#fff",
                  border: "none",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
