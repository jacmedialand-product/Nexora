import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Nexora School OS',
  description: 'Modular Platform for Pre-KG to Grade 12',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
