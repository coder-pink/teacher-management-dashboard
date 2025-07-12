
// import TeacherTable from '@/features/teachers/TeacherTable';

// export default function TeachersPage() {
//   return (
//     <div>
//       <TeacherTable />
//     </div>
//   );
// }


// src/app/teachers/page.tsx

'use client';

import TeacherTable from '@/features/teachers/TeacherTable';

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-gray-150 md:p-4">
      {/* Page Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Teachers</h1>
        <p className="text-gray-500 mt-1">Manage teacher information and assignments.</p>
      </header>

      {/* Teacher Table */}
      <section>
        <TeacherTable />
      </section>
    </main>
  );
}
