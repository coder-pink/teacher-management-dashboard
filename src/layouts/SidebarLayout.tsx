'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaChalkboardTeacher,
  FaMoneyCheckAlt,
  FaBars,
  FaTimes,
  FaChartBar,
} from 'react-icons/fa';

const menu = [
  { name: 'Dashboard', href: '/', icon: <FaChartBar /> },
  { name: 'Teachers', href: '/teachers', icon: <FaChalkboardTeacher /> },
  { name: 'Payments', href: '/payments', icon: <FaMoneyCheckAlt /> },
];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white border-r border-gray-200 shadow-md transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0`}
      >
        <div className="h-16 flex items-center justify-center text-xl font-bold border-b border-gray-200 text-blue-700">
          Teacher Panel
        </div>

        <nav className="flex flex-col gap-1 mt-4 px-3">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-all ${
                isActive(item.href)
                  ? 'bg-blue-100 text-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between bg-white shadow-md px-4 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
            aria-label="Toggle sidebar"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="text-lg font-semibold text-gray-800">
            Teacher Management
          </div>
        </header>

        {/* Main Page Content */}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
