'use client';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function PaymentChart() {
  const pieData = {
    labels: ['Paid', 'Pending'],
    datasets: [
      {
        label: 'Payments',
        data: [12, 3],
        backgroundColor: ['#4ade80', '#facc15'],
        borderColor: ['#22c55e', '#eab308'],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Monthly Payments ($)',
        data: [3000, 2500, 4000, 2800, 3700],
        backgroundColor: '#3b82f6',
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4 sm:px-6">
      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Payment Status</h2>
        <div className="w-full max-w-xs mx-auto">
          <Pie data={pieData} />
        </div>
      </div>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition duration-300">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Payments Overview</h2>
        <div className="w-full overflow-x-auto">
          <Bar data={barData} />
        </div>
      </div>
    </div>
  );
}
