"use client";

import { useEffect } from "react";

export default function ErrorPage({ error }: { error: Error; }) {
  useEffect(() => {
    console.error("Error occurred:", error);
  }, [error]);
  return (
    <div>
      <div>Got Error-----OOPS!</div>
    </div>
  );
}