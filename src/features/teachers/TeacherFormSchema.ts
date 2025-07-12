
import { z } from 'zod';

export const teacherFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  status: z.enum(['Active', 'Inactive']),
});

export type TeacherFormData = z.infer<typeof teacherFormSchema>;
