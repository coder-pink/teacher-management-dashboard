
'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { TeacherFormData, teacherFormSchema } from './TeacherFormSchema';
import Modal from '@/components/Modal';
import { useTeacherModal } from './TeacherContext';

export default function TeacherForm() {
  const {
    isOpen,
    closeModal,
    selectedTeacher,
    mode,
    handleAdd,
    handleUpdate,
  } = useTeacherModal();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TeacherFormData>({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      status: 'Active',
    },
  });

  useEffect(() => {
    reset(
      selectedTeacher || {
        name: '',
        email: '',
        subject: '',
        status: 'Active',
      }
    );
  }, [selectedTeacher, reset]);

  const onSubmit = (data: TeacherFormData) => {
    if (mode === 'add' && handleAdd) {
      handleAdd({ id: Date.now().toString(), ...data });
    } else if (mode === 'edit' && selectedTeacher && handleUpdate) {
      handleUpdate({ ...selectedTeacher, ...data });
    }

    closeModal();
    reset();
  };

  return (
    <Modal
      title={mode === 'add' ? 'Add Teacher' : 'Edit Teacher'}
      isOpen={isOpen}
      onClose={() => {
        closeModal();
        reset();
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 text-sm text-gray-800"
      >
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            {...register('name')}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            {...register('email')}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block font-medium mb-1">
            Subject
          </label>
          <input
            id="subject"
            {...register('subject')}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.subject && (
            <p className="text-xs text-red-600 mt-1">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block font-medium mb-1">
            Status
          </label>
          <select
            id="status"
            {...register('status')}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="pt-2 text-right">
          <button
            type="submit"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-5 py-2 rounded-md transition-colors duration-200"
          >
            {mode === 'add' ? 'Add Teacher' : 'Update Teacher'}
          </button>
        </div>
      </form>
    </Modal>
  );
}
