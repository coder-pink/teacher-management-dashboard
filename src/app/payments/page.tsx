// // src/app/payments/page.tsx

// import PaymentTable from '@/features/payments/PaymentTable';

// export default function PaymentsPage() {
//   return (
//     <main className="p-6">
//       <PaymentTable />
//     </main>
//   );
// }


// src/app/payments/page.tsx

'use client';

import PaymentTable from '@/features/payments/PaymentTable';

export default function PaymentsPage() {
  return (
    <main className="min-h-screen bg-gray-150 p-6 md:p-4">
      {/* Page Title */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Payments
        </h1>
        <p className="text-gray-500 mt-1">
          Manage and track all teacher payment transactions.
        </p>
      </header>

      {/* Payment Table */}
      <section>
        <PaymentTable />
      </section>
    </main>
  );
}
