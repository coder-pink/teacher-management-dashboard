import { Payment } from '@/types/payment';
import { FaEdit, FaTrash } from 'react-icons/fa';

export default function PaymentRow({
  payment,
  onDelete,
  onEdit,
}: {
  payment: Payment;
  onDelete: (id: string) => void;
  onEdit: () => void;
}) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4 font-medium text-gray-800 whitespace-nowrap">
        {payment.teacherId}
      </td>
      <td className="px-6 py-4 text-gray-700">${payment.amount.toFixed(2)}</td>
      <td className="px-6 py-4 text-gray-600">{payment.date}</td>
      <td className="px-6 py-4">
        <span
          className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
            payment.status === 'Paid'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
          }`}
        >
          {payment.status}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <div className="flex justify-end gap-2">
          <button
            onClick={onEdit}
            className="p-2 rounded hover:bg-blue-100 text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Edit payment"
          >
            <FaEdit size={14} />
          </button>
          <button
            onClick={() => onDelete(payment.id)}
            className="p-2 rounded hover:bg-red-100 text-red-600 hover:text-red-800 transition-colors"
            aria-label="Delete payment"
          >
            <FaTrash size={14} />
          </button>
        </div>
      </td>
    </tr>
  );
}
