import { Teacher } from '@/types/teacher';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function TeacherRow({
  teacher,
  onDelete,
  onEdit,
}: {
  teacher: Teacher;
  onDelete: (id: string) => void;
  onEdit: () => void;
}) {
  return (
    <tr className="hover:bg-gray-50 transition-colors duration-150">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {teacher.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {teacher.email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
        {teacher.subject}
      </td>
      <td className="px-6 py-4">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            teacher.status === 'Active'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {teacher.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
        <button
          onClick={onEdit}
          className="inline-flex items-center justify-center p-2 rounded hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition"
          title="Edit"
          aria-label="Edit teacher"
        >
          <FaEdit size={14} />
        </button>
        <button
          onClick={() => onDelete(teacher.id)}
          className="inline-flex items-center justify-center p-2 rounded hover:bg-red-100 text-red-600 hover:text-red-800 transition"
          title="Delete"
          aria-label="Delete teacher"
        >
          <FaTrash size={14} />
        </button>
      </td>
    </tr>
  );
}

