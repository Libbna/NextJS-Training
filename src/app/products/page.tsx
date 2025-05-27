'use client';

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category"); // Example: "shoes"
  const sort = searchParams.get("sort"); // Example: "price"
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products List</h1>
      <h2><Link href="products/1">Product 1</Link></h2>
      <h2><Link href="products/2">Product 2</Link></h2>
      <h2><Link href="products/3" replace>Product 3</Link></h2>

      <div>
        <h1>Category: {category}</h1>
        <p>Sorted by: {sort}</p>
      </div>
    </>
  );
}
