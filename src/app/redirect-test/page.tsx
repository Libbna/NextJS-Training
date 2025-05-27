'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RedirectTestPage() {
  const router = useRouter();

  useEffect(() => {
    fetch('/api/redirect-me', {
      headers: {
        'x-user-role': 'guest', // Try changing this to 'guest' to test both cases
      },
    }).then((res) => {
      if (res.redirected) {
        router.push(res.url);
      } else {
        console.log('User is not allowed to redirect.');
      }
    });
  }, []);

  return <p>Checking redirect logic with headers...</p>;
}
