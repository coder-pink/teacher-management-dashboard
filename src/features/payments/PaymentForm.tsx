'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PaymentFormData, paymentFormSchema } from './PaymentFormSchema';
import { usePaymentModal } from './PaymentContext';
import Modal from '@/components/Modal';

export default function PaymentForm() {
  const {
    isOpen,
    closeModal,
    selectedPayment,
    mode,
    handleAdd,
    handleUpdate,
  } = usePaymentModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PaymentFormData>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      teacherId: '',
      amount: 0,
      date: '',
      status: 'Pending',
    },
  });

  useEffect(() => {
    reset(
      selectedPayment || {
        teacherId: '',
        amount: 0,
        date: '',
        status: 'Pending',
      }
    );
  }, [selectedPayment, reset]);

  const onSubmit = (data: PaymentFormData) => {
    const payment = selectedPayment
      ? { ...selectedPayment, ...data }
      : { ...data, id: Date.now().toString() };

    if (mode === 'add' && handleAdd) handleAdd(payment);
    if (mode === 'edit' && handleUpdate) handleUpdate(payment);

    closeModal();
    reset();
  };

  return (
    <Modal
      title={mode === 'add' ? 'Add Payment' : 'Edit Payment'}
      isOpen={isOpen}
      onClose={() => {
        closeModal();
        reset();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Teacher ID
          </label>
          <input
            {...register('teacherId')}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
          />
          {errors.teacherId && (
            <p className="text-red-500 text-sm mt-1">{errors.teacherId.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            step="0.01"
            {...register('amount', { valueAsNumber: true })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
          />
          {errors.amount && (
            <p className="text-red-500 text-sm mt-1">{errors.amount.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            {...register('date')}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
          />
          {errors.date && (
            <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            {...register('status')}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
          >
            <option value="Paid">Paid</option>
            <option value="Pending">Pending</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-medium text-sm px-4 py-2 rounded-md transition"
        >
          {mode === 'add' ? 'Add Payment' : 'Update Payment'}
        </button>
      </form>
    </Modal>
  );
}
