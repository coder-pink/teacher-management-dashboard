'use client';

import WidgetCard from './WidgetCard';
import {
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaUserCheck,
  FaHourglassHalf,
} from 'react-icons/fa';

export default function DashboardWidgets() {
  const stats = {
    totalTeachers: 25,
    activeTeachers: 20,
    totalPayments: 12000,
    pendingPayments: 3,
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 py-6">
      <WidgetCard
        title="Total Teachers"
        value={stats.totalTeachers}
        icon={<FaChalkboardTeacher className="text-blue-600 w-5 h-5" />}
        iconBg="bg-blue-100"
        textColor="text-blue-800"
      />
      <WidgetCard
        title="Active Teachers"
        value={stats.activeTeachers}
        icon={<FaUserCheck className="text-green-600 w-5 h-5" />}
        iconBg="bg-green-100"
        textColor="text-green-800"
      />
      <WidgetCard
        title="Total Payments"
        value={`$${stats.totalPayments.toLocaleString()}`}
        icon={<FaMoneyBillWave className="text-purple-600 w-5 h-5" />}
        iconBg="bg-purple-100"
        textColor="text-purple-800"
      />
      <WidgetCard
        title="Pending Payments"
        value={stats.pendingPayments}
        icon={<FaHourglassHalf className="text-yellow-600 w-5 h-5" />}
        iconBg="bg-yellow-100"
        textColor="text-yellow-800"
      />
    </div>
  );
}
