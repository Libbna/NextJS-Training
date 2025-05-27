'use client';

import { useEffect, useState } from 'react';

export default function CookieTestPage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // First set the cookie
    fetch('/api/set-user')
      .then(() => {
        // Then try to read the cookie
        return fetch('/api/get-user');
      })
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
      });
  }, []);

  return (
    <div>
      <h1>🍪 Cookie Test Page</h1>
      <p>{message}</p>
    </div>
  );
}
