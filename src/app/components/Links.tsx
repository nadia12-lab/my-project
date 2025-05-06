import Link from "next/link";
import React from "react";

const Links = () => (
  <nav style={{ display: "flex", justifyContent: "center", gap: "2rem", marginBottom: "2rem" }}>
    <Link href="/about">About</Link>
    <Link href="/products">Products</Link>
    <Link href="/contact">Contact</Link>
    {/* Add more links as needed */}
  </nav>
);

export default Links;
