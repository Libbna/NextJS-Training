import React from 'react';

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Features Product</h2>
      {children}
    </>
  );
}