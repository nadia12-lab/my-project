"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from './PaginationButtons.module.scss';
import productGridStyles from './ProductGrid.module.scss';

interface ProductType {
  id: number;
  name: string;
  price: number;
  image: string;
}

const ProductGrid = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchCombinedProducts = async () => {
      try {
        const response = await fetch("/api/products"); 
        const data = await response.json(); 
        setProducts(data);
      } catch (error) {
        console.error("Error:", error);
        setProducts([
          { id: 1, name: "iPhone 11", price: 25000.0, image: "/images/iphone11.jpg" },
          { id: 2, name: "iPhone 12", price: 29000.0, image: "/images/iphone12.jpg" },
          { id: 3, name: "iPhone 13", price: 35000.0, image: "/images/iphone13.jpg" },
          { id: 4, name: "iPhone 14", price: 40000.0, image: "/images/iphone14.jpg" },
          { id: 5, name: "iPhone 15", price: 45000.0, image: "/images/iphone15.jpg" },
          { id: 6, name: "iPhone 16", price: 50000.0, image: "/images/iphone16.jpg" },
        ]);
      }
    };

    fetchCombinedProducts();
  }, []);

  const displayedProducts = products.slice(
    currentPage * productsPerPage,
    (currentPage + 1) * productsPerPage
  );

  const handleNext = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Dummy handler for Add to Cart (replace with your logic)
  const handleAddToCart = (product: ProductType) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div>
      {/* Product Grid */}
      <div className={productGridStyles['product-grid']}>
        {displayedProducts.map((product) => (
          <div key={product.id} className={productGridStyles.product}>
            <Image
              src={product.image}
              alt={product.name}
              width={180}
              height={180}
              style={{ objectFit: "contain", borderRadius: "12px", background: "#fff" }}
            />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <button
              className={productGridStyles['add-to-cart']}
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className={styles["pagination-controls"]}>
        <button
          className={styles["pagination-button"]}
          onClick={handlePrevious}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage + 1} of {Math.ceil(products.length / productsPerPage)}
        </span>
        <button
          className={styles["pagination-button"]}
          onClick={handleNext}
          disabled={(currentPage + 1) * productsPerPage >= products.length}
          aria-label="Next page"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;

