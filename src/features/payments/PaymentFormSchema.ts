import { z } from 'zod';

export const paymentFormSchema = z.object({
  teacherId: z.string().min(1, 'Teacher ID is required'),
  amount: z.number().min(1, 'Amount must be greater than 0'),
  date: z.string().min(1, 'Date is required'),
  status: z.enum(['Paid', 'Pending']),
});

export type PaymentFormData = z.infer<typeof paymentFormSchema>;
