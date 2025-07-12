
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SidebarLayout from '@/layouts/SidebarLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Teacher Management',
  description: 'Modern teacher management dashboard with Next.js 14 and Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarLayout>
          {children}
          {/* ✅ Global toast notifications */}
          <ToastContainer position="top-right" autoClose={3000} />
        </SidebarLayout>
      </body>
    </html>
  );
}
