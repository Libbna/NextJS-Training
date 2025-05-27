'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectTestPage() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/redirect-me')
      .then((res) => {
        if (res.redirected) {
          router.push(res.url);
        }
      });
  }, []);

  return <p>Checking redirect logic...</p>;
}
