'use client';

import { createContext, useContext, useState } from 'react';
import { Teacher } from '@/types/teacher';

interface TeacherModalContextProps {
  isOpen: boolean;
  mode: 'add' | 'edit';
  selectedTeacher: Teacher | null;
  openModal: (mode: 'add' | 'edit', teacher?: Teacher) => void;
  closeModal: () => void;
  handleAdd?: (teacher: Teacher) => void;
  handleUpdate?: (teacher: Teacher) => void;
  setTeachersContext: (handlers: {
    handleAdd: (teacher: Teacher) => void;
    handleUpdate: (teacher: Teacher) => void;
  }) => void;
}

const TeacherModalContext = createContext<TeacherModalContextProps | undefined>(undefined);

export const TeacherModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<'add' | 'edit'>('add');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const [handlers, setHandlers] = useState<{
    handleAdd: (teacher: Teacher) => void;
    handleUpdate: (teacher: Teacher) => void;
  } | null>(null);

  const openModal = (mode: 'add' | 'edit', teacher?: Teacher) => {
    setMode(mode);
    setSelectedTeacher(teacher || null);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const setTeachersContext = (handlersParam: {
    handleAdd: (teacher: Teacher) => void;
    handleUpdate: (teacher: Teacher) => void;
  }) => {
    if (!handlers) setHandlers(handlersParam); // prevent re-setting
  };

  return (
    <TeacherModalContext.Provider
      value={{
        isOpen,
        mode,
        selectedTeacher,
        openModal,
        closeModal,
        handleAdd: handlers?.handleAdd,
        handleUpdate: handlers?.handleUpdate,
        setTeachersContext,
      }}
    >
      {children}
    </TeacherModalContext.Provider>
  );
};

export const useTeacherModal = () => {
  const context = useContext(TeacherModalContext);
  if (!context) {
    throw new Error('useTeacherModal must be used within a TeacherModalProvider');
  }
  return context;
};

