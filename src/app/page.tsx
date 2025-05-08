// HomePage.tsx

"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import TikTokCarousel from "./components/TikTokCarousel";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./components/Navbar/Navbar";
import styles from "./page.module.scss";
import SocialLinks from "./components/SocialLinks";


interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
}

const localProducts: ProductType[] = [
  {
    id: 101,
    title: "iPhone 11",
    price: 25000.0,
    image: "/images/iphone11.jpg",
  },
  {
    id: 102,
    title: "iPhone 12",
    price: 29000.0,
    image: "/images/iphone12.jpg",
  },
  {
    id: 103,
    title: "iPhone 13",
    price: 35000.0,
    image: "/images/iphone13.jpg",
  },
  {
    id: 104,
    title: "iPhone 14",
    price: 40000.0,
    image: "/images/iphone14.jpg",
  },
  {
    id: 105,
    title: "iPhone 15",
    price: 45000.0,
    image: "/images/iphone15.jpg",
  },
];

export default function HomePage() {
  const [apiProducts, setApiProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    async function fetchApiProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch API products");
        const data: ProductType[] = await res.json();
        setApiProducts(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchApiProducts();
  }, []);

  const products = [...localProducts, ...apiProducts];

  const handleAddToCart = (title: string) => {
    toast.success(`"${title}" added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />

      <main className={styles.main}>
        <NavBar />
        <TikTokCarousel />
        <ToastContainer />

        <h1 className={styles.title}>All Products</h1>

        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <Image
                src={product.image}
                alt={product.title}
                width={180}
                height={180}
                className={styles.productImage}
                unoptimized={!product.image.startsWith("http")}
              />
              <h2 className={styles.productTitle}>{product.title}</h2>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product.title)}
                className={styles.addButton}
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
