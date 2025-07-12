'use client';

import { Teacher } from '@/types/teacher';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function TeacherActions({ teacher }: { teacher: Teacher }) {
  const handleEdit = () => {
    alert(`Edit: ${teacher.name}`);
  };

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete ${teacher.name}?`)) {
      alert('Deleted (simulated)');
    }
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <button
        onClick={handleEdit}
        className="inline-flex items-center justify-center p-2 rounded hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors"
        title="Edit"
        aria-label={`Edit ${teacher.name}`}
      >
        <FaEdit size={14} />
      </button>
      <button
        onClick={handleDelete}
        className="inline-flex items-center justify-center p-2 rounded hover:bg-red-100 text-red-600 hover:text-red-800 transition-colors"
        title="Delete"
        aria-label={`Delete ${teacher.name}`}
      >
        <FaTrash size={14} />
      </button>
    </div>
  );
}
