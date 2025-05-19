"use client";

import "./styles.css";


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from "react";

const navLinks = [
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Register',
    href: '/register',
  },
  {
    name: 'Forgot Password',
    href: '/forgot-password',
  }
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const isActive = pathname;
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <nav>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      {children}
    </div>
  );
}