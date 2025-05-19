"use client";

import { useRouter } from 'next/navigation';
import React from 'react';

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Order placed successfully!');
    router.push('/');
  };
  return (
    <>
      <h1>Order Your Product</h1>
      <section>
        <p>Welcome to our ordering system</p>
        <button onClick={handleClick}>Place Order</button>
      </section>
    </>
  );
}