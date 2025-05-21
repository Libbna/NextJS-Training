"use client";

import { notFound } from "next/navigation";

function getRandomNumber(count: number): number {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
  }) {
  // const randomNumber = getRandomNumber(2);

  // if (randomNumber === 1) {
  //   // Simulate a 500 error
  //   throw new Error("Server review error");
  // }
  
  if (parseInt(params.reviewId) > 1000) { 
    // Simulate a 404 error
    notFound();   
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
} 