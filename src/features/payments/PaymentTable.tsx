'use client';

import { useEffect, useState } from 'react';
import { Payment } from '@/types/payment';
import { mockPayments } from './mockPayments';
import PaymentRow from './PaymentRow';
import PaymentForm from './PaymentForm';
import { PaymentModalProvider, usePaymentModal } from './PaymentContext';
import { toast } from 'react-toastify';

function InnerTable() {
  const { openModal, setPaymentHandlers } = usePaymentModal();
  const [payments, setPayments] = useState<Payment[]>(mockPayments);

  const handleAdd = (payment: Payment) => {
    setPayments((prev) => [...prev, { ...payment, id: Date.now().toString() }]);
    toast.success('Payment added successfully');
  };

  const handleUpdate = (updated: Payment) => {
    setPayments((prev) =>
      prev.map((p) => (p.id === updated.id ? updated : p))
    );
    toast.success('Payment updated successfully');
  };

  const handleDelete = (id: string) => {
    setPayments((prev) => prev.filter((p) => p.id !== id));
    toast.info('Payment deleted');
  };

  useEffect(() => {
    setPaymentHandlers({ handleAdd, handleUpdate });
  }, [setPaymentHandlers]);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
      <div className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">Payments</h2>
        <button
          onClick={() => openModal('add')}
          className="bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-5 py-2 rounded-md transition"
        >
          + Add Payment
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase tracking-wider border-b text-xs">
            <tr>
              <th className="px-6 py-3">Teacher ID</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {payments.map((payment) => (
              <PaymentRow
                key={payment.id}
                payment={payment}
                onDelete={handleDelete}
                onEdit={() => openModal('edit', payment)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <PaymentForm />
    </div>
  );
}

export default function PaymentTable() {
  return (
    <PaymentModalProvider>
      <InnerTable />
    </PaymentModalProvider>
  );
}
