export interface Payment {
  id: string;
  teacherId: string;
  amount: number;
  date: string; 
  status: 'Paid' | 'Pending';
}
