'use client';

import { createContext, useContext, useState } from 'react';
import { Payment } from '@/types/payment';


interface PaymentModalContextProps {
  isOpen: boolean;
  mode: 'add' | 'edit';
  selectedPayment: Payment | null;
  openModal: (mode: 'add' | 'edit', payment?: Payment) => void;
  closeModal: () => void;
  handleAdd?: (payment: Payment) => void;
  handleUpdate?: (payment: Payment) => void;
  setPaymentHandlers: (handlers: {
    handleAdd: (payment: Payment) => void;
    handleUpdate: (payment: Payment) => void;
  }) => void;
}

const PaymentModalContext = createContext<PaymentModalContextProps | undefined>(undefined);

export const PaymentModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedPayment, setSelectedPayment] = useState<Payment | null>(null);

  const [handlers, setHandlers] = useState<{
    handleAdd: (payment: Payment) => void;
    handleUpdate: (payment: Payment) => void;
  } | null>(null);

  const openModal = (mode: 'add' | 'edit', payment?: Payment) => {
    setMode(mode);
    setSelectedPayment(payment || null);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const setPaymentHandlers = (handlersParam: {
    handleAdd: (payment: Payment) => void;
    handleUpdate: (payment: Payment) => void;
  }) => {
    if (!handlers) setHandlers(handlersParam);
  };

  return (
    <PaymentModalContext.Provider
      value={{
        isOpen,
        mode,
        selectedPayment,
        openModal,
        closeModal,
        handleAdd: handlers?.handleAdd,
        handleUpdate: handlers?.handleUpdate,
        setPaymentHandlers,
      }}
    >
      {children}
    </PaymentModalContext.Provider>
  );
};

export const usePaymentModal = () => {
  const context = useContext(PaymentModalContext);
  if (!context) {
    throw new Error('usePaymentModal must be used within a PaymentModalProvider');
  }
  return context;
};
