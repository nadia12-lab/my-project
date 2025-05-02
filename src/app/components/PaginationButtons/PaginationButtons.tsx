"use client";
import styles from "./PaginationButtons.module.scss";
import React, { useState, useEffect } from "react";
import { fetchProducts } from "../../../services/productService";
import ProductGrid from "../Product/ProductGrid"; // Import your product grid component

const Pagination = () => {
  const [page, setPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<any[]>([]); // Explicitly define type for products

  const limit = 10;
  const offset = Math.max(0, page * limit); // ✅ Ensures offset is never negative

  console.log("📌 Debug: Fetching with limit:", limit, "offset:", offset);

  useEffect(() => {
    setLoading(true);
    setProducts([]); // ✅ Clear previous products immediately before fetching new ones
  
    fetchProducts(limit, offset)
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error))
      .finally(() => setLoading(false));
  }, [page]);  

  return (
    <div>
    </div>
  );
};

export default Pagination;
