import React from 'react';


function getRandomNumber(min: number = 1, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const randomNumber = getRandomNumber(2);

  if (randomNumber === 1) {
    // Simulate a 500 error
    throw new Error("error loading product");
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Features Product</h2>
      {children}
    </>
  );
}