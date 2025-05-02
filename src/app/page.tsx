import React from "react";
import ProductGrid from "./components/Product/ProductGrid";
import Pagination from "./components/PaginationButtons/PaginationButtons";
import styles from './Product.module.scss';
const localProducts = [
  { id: 1, name: "iPhone 11", price: 25000.0, image: "/images/iphone11.jpg" },
  { id: 2, name: "iPhone 12", price: 29000.0, image: "/images/iphone12.jpg" },
  { id: 3, name: "iPhone 13", price: 35000.0, image: "/images/iphone13.jpg" },
  { id: 4, name: "iPhone 14", price: 40000.0, image: "/images/iphone14.jpg" },
  { id: 5, name: "iPhone 15", price: 45000.0, image: "/images/iphone15.jpg" },
];

const Page = () => (
  <main>
    <h1>
      <center>Our Products</center>
    </h1>
    <ProductGrid Product={localProducts} />
    <Pagination />
  </main>
);

export default Page;
