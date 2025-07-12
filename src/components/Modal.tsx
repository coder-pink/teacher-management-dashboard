

'use client';

import { ReactNode } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function Modal({ title, isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-gray-200 p-6">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          onClick={onClose}
          aria-label="Close modal"
        >
          <FaTimes className="text-lg" />
        </button>

        {/* Modal Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>

        {/* Modal Content */}
        <div className="space-y-4 text-gray-700">
          {children}
        </div>
      </div>
    </div>
  );
}
