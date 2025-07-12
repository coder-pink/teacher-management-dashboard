
import { Payment } from '@/types/payment';

export const mockPayments: Payment[] = [
  {
    id: '1',
    teacherId: '101',
    amount: 5000,
    date: '2024-06-01',
    status: 'Paid',
  },
  {
    id: '2',
    teacherId: '102',
    amount: 4500,
    date: '2024-06-15',
    status: 'Pending',
  },
  {
    id: '3',
    teacherId: '103',
    amount: 6000,
    date: '2024-07-01',
    status: 'Paid',
  },
  {
    id: '4',
    teacherId: '104',
    amount: 7000,
    date: '2024-07-10',
    status: 'Pending',
  },
  {
    id: '5',
    teacherId: '105',
    amount: 5500,
    date: '2024-08-01',
    status: 'Paid',
  },
];
