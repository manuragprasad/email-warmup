import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Email Warmup App',
  description: 'Manage SMTP servers, campaigns, and emails',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}