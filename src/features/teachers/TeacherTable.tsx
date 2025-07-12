'use client';

import { useEffect, useState } from 'react';
import { Teacher } from '@/types/teacher';
import { mockTeachers } from './mockTeachers';
import TeacherRow from './TeacherRow';
import TeacherForm from './TeacherForm';
import { TeacherModalProvider, useTeacherModal } from './TeacherContext';
import { toast } from 'react-toastify';

function InnerTable() {
  const { openModal, setTeachersContext } = useTeacherModal();
  const [teachers, setTeachers] = useState<Teacher[]>(mockTeachers);

  const handleAdd = (teacher: Teacher) => {
    setTeachers((prev) => [...prev, { ...teacher, id: Date.now().toString() }]);
    toast.success('Teacher added successfully!');
  };

  const handleUpdate = (updated: Teacher) => {
    setTeachers((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
    toast.success('Teacher updated successfully!');
  };

  const handleDelete = (id: string) => {
    setTeachers((prev) => prev.filter((t) => t.id !== id));
    toast.info('Teacher deleted');
  };

  useEffect(() => {
    setTeachersContext({ handleAdd, handleUpdate });
  }, [setTeachersContext]);

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800">Teachers</h2>
        <button
          onClick={() => openModal('add')}
          className="mt-2 sm:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          + Add Teacher
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 uppercase tracking-wider text-xs border-b">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Subject</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teachers.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center px-6 py-4 text-black">
                  No teachers found.
                </td>
              </tr>
            ) : (
              teachers.map((teacher) => (
                <TeacherRow
                  key={teacher.id}
                  teacher={teacher}
                  onDelete={handleDelete}
                  onEdit={() => openModal('edit', teacher)}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <TeacherForm />
    </div>
  );
}

export default function TeacherTable() {
  return (
    <TeacherModalProvider>
      <InnerTable />
    </TeacherModalProvider>
  );
}
