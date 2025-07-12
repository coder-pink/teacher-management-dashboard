'use client';

import DashboardWidgets from '@/features/dashboard/DashboardWidgets';
import PaymentChart from '@/features/dashboard/PaymentChart';

export default function DashboardPage() {
  return (
    <main className="md:p-4 bg-gray-150 min-h-screen">
      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Dashboard Overview
        </h1>
        <p className="text-gray-500 mt-1">Insights and payment stats at a glance.</p>
      </div>

      {/* Widgets */}
      <section>
        <DashboardWidgets />
      </section>

      {/* Charts */}
      <section>
        <h2 className="text-xl font-semibold text-gray-800 mt-10 mb-4">
          Payment Analytics
        </h2>
        <PaymentChart />
      </section>
    </main>
  );
}
