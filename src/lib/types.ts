// ============================================================
// SHARED TYPES
// ============================================================

export type Portal = "admin" | "teacher" | "student" | "parent";

export type Student = {
  id: string;
  name: string;
  class: string;
  roll: number;
  gender: string;
  dob: string;
  phone: string;
  email: string;
  attendance: number;
  fees: string;
  guardian: string;
  address: string;
  gpa: number;
  status: string;
};

export type Teacher = {
  id: string;
  name: string;
  subject: string;
  class: string;
  phone: string;
  email: string;
  experience: number;
  status: string;
  salary: number;
  joined: string;
  qualification: string;
};

export type SchoolClass = {
  id: number;
  name: string;
  sections: string[];
  students: number;
  classTeacher: string;
  room: string;
};

export type Subject = {
  id: number;
  name: string;
  code: string;
  teacher: string;
  classes: string;
  periods: number;
  type: string;
};

export type TimetableSlot = {
  period: number;
  time: string;
  Mon: string;
  Tue: string;
  Wed: string;
  Thu: string;
  Fri: string;
};

export type AttendanceMonthly = { month: string; present: number; absent: number };
export type EnrollmentTrendPoint = { month: string; students: number };
export type FeeStatusSlice = { name: string; value: number; color: string };
export type ClassPerformancePoint = { class: string; avg: number };

export type ExamResult = {
  id: number;
  student: string;
  class: string;
  math: number;
  english: number;
  physics: number;
  chemistry: number;
  biology: number;
  total: number;
  percentage: number;
  grade: string;
  rank: number;
};

export type FeeRecord = {
  id: number;
  student: string;
  class: string;
  term: string;
  amount: number;
  paid: number;
  balance: number;
  dueDate: string;
  paidDate: string;
  status: string;
};

export type LibraryBook = {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  copies: number;
  available: number;
  issued: number;
};

export type TransportRoute = {
  id: number;
  route: string;
  bus: string;
  driver: string;
  students: number;
  stops: string;
  departure: string;
  return: string;
};

export type HostelRoom = {
  room: string;
  type: string;
  capacity: number;
  occupied: number;
  students: string;
  warden: string;
  block: string;
};

export type Admission = {
  id: string;
  name: string;
  applyClass: string;
  date: string;
  status: string;
  score: number;
  contact: string;
  fee: string;
};

export type NotificationItem = {
  id: number;
  title: string;
  message: string;
  type: string;
  audience: string;
  date: string;
  sent: number;
};

export type AttendanceRecord = {
  date: string;
  day: string;
  status: string;
  period: string;
  reason?: string;
};

export type Assignment = {
  id: number;
  title: string;
  subject: string;
  class: string;
  due: string;
  submitted: number;
  total: number;
  status: string;
};

export type PerformancePoint = { month: string; math: number; science: number; english: number };

// Auth-related types (new — for login/registration)
export type UserRole = Portal;

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  initials: string;
};
