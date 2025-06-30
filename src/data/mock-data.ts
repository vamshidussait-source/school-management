import type {
  Student,
  Teacher,
  SchoolClass,
  Subject,
  TimetableSlot,
  AttendanceMonthly,
  EnrollmentTrendPoint,
  FeeStatusSlice,
  ClassPerformancePoint,
  ExamResult,
  FeeRecord,
  LibraryBook,
  TransportRoute,
  HostelRoom,
  Admission,
  NotificationItem,
  AttendanceRecord,
  Assignment,
  PerformancePoint,
} from "@/lib/types";

// ============================================================
// SAMPLE / MOCK DATA
// This mirrors the original prototype's in-memory data so every
// page renders with realistic content. Swap these for real API
// calls (e.g. in a data-fetching layer) when the backend is ready.
// ============================================================

export const STUDENTS: Student[] = [
  { id: "STU001", name: "Aiden Carter", class: "10-A", roll: 1, gender: "Male", dob: "2008-03-15", phone: "555-0101", email: "aiden@school.edu", attendance: 94, fees: "Paid", guardian: "Michael Carter", address: "123 Elm St", gpa: 3.8, status: "Active" },
  { id: "STU002", name: "Sofia Hernandez", class: "10-A", roll: 2, gender: "Female", dob: "2008-07-22", phone: "555-0102", email: "sofia@school.edu", attendance: 98, fees: "Paid", guardian: "Elena Hernandez", address: "456 Oak Ave", gpa: 4.0, status: "Active" },
  { id: "STU003", name: "Liam Johnson", class: "9-B", roll: 3, gender: "Male", dob: "2009-01-10", phone: "555-0103", email: "liam@school.edu", attendance: 87, fees: "Pending", guardian: "Robert Johnson", address: "789 Pine Rd", gpa: 3.2, status: "Active" },
  { id: "STU004", name: "Emma Williams", class: "9-B", roll: 4, gender: "Female", dob: "2009-05-18", phone: "555-0104", email: "emma@school.edu", attendance: 91, fees: "Paid", guardian: "Sarah Williams", address: "321 Maple Dr", gpa: 3.6, status: "Active" },
  { id: "STU005", name: "Noah Davis", class: "11-C", roll: 5, gender: "Male", dob: "2007-11-03", phone: "555-0105", email: "noah@school.edu", attendance: 96, fees: "Overdue", guardian: "James Davis", address: "654 Cedar Ln", gpa: 3.9, status: "Active" },
  { id: "STU006", name: "Olivia Martinez", class: "11-C", roll: 6, gender: "Female", dob: "2007-09-25", phone: "555-0106", email: "olivia@school.edu", attendance: 89, fees: "Paid", guardian: "Carlos Martinez", address: "987 Birch Blvd", gpa: 3.5, status: "Active" },
  { id: "STU007", name: "Ethan Brown", class: "12-A", roll: 7, gender: "Male", dob: "2006-04-07", phone: "555-0107", email: "ethan@school.edu", attendance: 92, fees: "Paid", guardian: "David Brown", address: "147 Walnut St", gpa: 3.7, status: "Active" },
  { id: "STU008", name: "Ava Wilson", class: "12-A", roll: 8, gender: "Female", dob: "2006-08-14", phone: "555-0108", email: "ava@school.edu", attendance: 99, fees: "Paid", guardian: "Mark Wilson", address: "258 Spruce Ave", gpa: 4.0, status: "Active" },
  { id: "STU009", name: "James Anderson", class: "8-D", roll: 9, gender: "Male", dob: "2010-02-28", phone: "555-0109", email: "james@school.edu", attendance: 85, fees: "Pending", guardian: "Paul Anderson", address: "369 Fir Rd", gpa: 2.9, status: "Active" },
  { id: "STU010", name: "Isabella Taylor", class: "8-D", roll: 10, gender: "Female", dob: "2010-12-05", phone: "555-0110", email: "isabella@school.edu", attendance: 93, fees: "Paid", guardian: "Susan Taylor", address: "741 Ash Dr", gpa: 3.4, status: "Active" },
  { id: "STU011", name: "William Thomas", class: "7-A", roll: 11, gender: "Male", dob: "2011-06-19", phone: "555-0111", email: "william@school.edu", attendance: 90, fees: "Paid", guardian: "John Thomas", address: "852 Hickory Ln", gpa: 3.1, status: "Active" },
  { id: "STU012", name: "Mia Jackson", class: "7-A", roll: 12, gender: "Female", dob: "2011-10-30", phone: "555-0112", email: "mia@school.edu", attendance: 97, fees: "Paid", guardian: "Linda Jackson", address: "963 Poplar Blvd", gpa: 3.9, status: "Active" },
];

export const TEACHERS: Teacher[] = [
  { id: "TCH001", name: "Dr. Rebecca Stone", subject: "Mathematics", class: "10-A, 11-C", phone: "555-0201", email: "rstone@school.edu", experience: 12, status: "Active", salary: 78000, joined: "2012-08-01", qualification: "Ph.D Mathematics" },
  { id: "TCH002", name: "Mr. Daniel Chen", subject: "Physics", class: "11-C, 12-A", phone: "555-0202", email: "dchen@school.edu", experience: 8, status: "Active", salary: 72000, joined: "2016-07-15", qualification: "M.Sc Physics" },
  { id: "TCH003", name: "Ms. Patricia Moore", subject: "English Literature", class: "9-B, 10-A", phone: "555-0203", email: "pmoore@school.edu", experience: 15, status: "Active", salary: 74000, joined: "2009-06-01", qualification: "M.A. English" },
  { id: "TCH004", name: "Mr. Kevin Walsh", subject: "History", class: "8-D, 9-B", phone: "555-0204", email: "kwalsh@school.edu", experience: 6, status: "Active", salary: 68000, joined: "2018-08-01", qualification: "M.A. History" },
  { id: "TCH005", name: "Dr. Maria Santos", subject: "Chemistry", class: "11-C, 12-A", phone: "555-0205", email: "msantos@school.edu", experience: 10, status: "Active", salary: 76000, joined: "2014-07-01", qualification: "Ph.D Chemistry" },
  { id: "TCH006", name: "Ms. Jennifer Park", subject: "Computer Science", class: "10-A, 12-A", phone: "555-0206", email: "jpark@school.edu", experience: 5, status: "Active", salary: 70000, joined: "2019-08-01", qualification: "B.Tech CS" },
  { id: "TCH007", name: "Mr. Robert Hughes", subject: "Physical Education", class: "All", phone: "555-0207", email: "rhughes@school.edu", experience: 9, status: "On Leave", salary: 62000, joined: "2015-06-15", qualification: "B.P.Ed" },
  { id: "TCH008", name: "Mrs. Angela Foster", subject: "Biology", class: "9-B, 10-A", phone: "555-0208", email: "afoster@school.edu", experience: 11, status: "Active", salary: 73000, joined: "2013-07-01", qualification: "M.Sc Biology" },
];

export const CLASSES: SchoolClass[] = [
  { id: 1, name: "Class 7", sections: ["7-A", "7-B"], students: 58, classTeacher: "Mr. Kevin Walsh", room: "Block A" },
  { id: 2, name: "Class 8", sections: ["8-C", "8-D"], students: 62, classTeacher: "Mrs. Angela Foster", room: "Block A" },
  { id: 3, name: "Class 9", sections: ["9-A", "9-B"], students: 65, classTeacher: "Ms. Patricia Moore", room: "Block B" },
  { id: 4, name: "Class 10", sections: ["10-A", "10-B"], students: 70, classTeacher: "Dr. Rebecca Stone", room: "Block B" },
  { id: 5, name: "Class 11", sections: ["11-C", "11-D"], students: 68, classTeacher: "Dr. Maria Santos", room: "Block C" },
  { id: 6, name: "Class 12", sections: ["12-A", "12-B"], students: 64, classTeacher: "Mr. Daniel Chen", room: "Block C" },
];

export const SUBJECTS: Subject[] = [
  { id: 1, name: "Mathematics", code: "MTH", teacher: "Dr. Rebecca Stone", classes: "9,10,11,12", periods: 6, type: "Core" },
  { id: 2, name: "Physics", code: "PHY", teacher: "Mr. Daniel Chen", classes: "11,12", periods: 5, type: "Core" },
  { id: 3, name: "Chemistry", code: "CHM", teacher: "Dr. Maria Santos", classes: "11,12", periods: 5, type: "Core" },
  { id: 4, name: "Biology", code: "BIO", teacher: "Mrs. Angela Foster", classes: "9,10,11", periods: 5, type: "Core" },
  { id: 5, name: "English Literature", code: "ENG", teacher: "Ms. Patricia Moore", classes: "7,8,9,10", periods: 5, type: "Core" },
  { id: 6, name: "History", code: "HIS", teacher: "Mr. Kevin Walsh", classes: "7,8,9", periods: 4, type: "Core" },
  { id: 7, name: "Computer Science", code: "CS", teacher: "Ms. Jennifer Park", classes: "10,11,12", periods: 4, type: "Elective" },
  { id: 8, name: "Physical Education", code: "PE", teacher: "Mr. Robert Hughes", classes: "All", periods: 3, type: "Activity" },
];

export const TIMETABLE: Record<string, TimetableSlot[]> = {
  "10-A": [
    { period: 1, time: "8:00–8:45", Mon: "Mathematics", Tue: "English", Wed: "Physics", Thu: "Mathematics", Fri: "Chemistry" },
    { period: 2, time: "8:45–9:30", Mon: "English", Tue: "Mathematics", Wed: "Chemistry", Thu: "Biology", Fri: "Mathematics" },
    { period: 3, time: "9:45–10:30", Mon: "Physics", Tue: "Chemistry", Wed: "Mathematics", Thu: "English", Fri: "Biology" },
    { period: 4, time: "10:30–11:15", Mon: "Chemistry", Tue: "Biology", Wed: "English", Thu: "Physics", Fri: "CS" },
    { period: 5, time: "11:30–12:15", Mon: "Biology", Tue: "CS", Wed: "PE", Thu: "CS", Fri: "English" },
    { period: 6, time: "12:15–1:00", Mon: "CS", Tue: "PE", Wed: "Biology", Thu: "PE", Fri: "Physics" },
  ],
};

export const ATTENDANCE_MONTHLY: AttendanceMonthly[] = [
  { month: "Aug", present: 95, absent: 5 },
  { month: "Sep", present: 93, absent: 7 },
  { month: "Oct", present: 97, absent: 3 },
  { month: "Nov", present: 91, absent: 9 },
  { month: "Dec", present: 89, absent: 11 },
  { month: "Jan", present: 94, absent: 6 },
  { month: "Feb", present: 96, absent: 4 },
  { month: "Mar", present: 92, absent: 8 },
];

export const ENROLLMENT_TREND: EnrollmentTrendPoint[] = [
  { month: "Aug", students: 1180 },
  { month: "Sep", students: 1210 },
  { month: "Oct", students: 1225 },
  { month: "Nov", students: 1230 },
  { month: "Dec", students: 1235 },
  { month: "Jan", students: 1240 },
  { month: "Feb", students: 1244 },
  { month: "Mar", students: 1247 },
];

export const FEE_STATUS: FeeStatusSlice[] = [
  { name: "Paid", value: 68, color: "#10b981" },
  { name: "Pending", value: 22, color: "#f59e0b" },
  { name: "Overdue", value: 10, color: "#ef4444" },
];

export const CLASS_PERFORMANCE: ClassPerformancePoint[] = [
  { class: "Class 7", avg: 76 },
  { class: "Class 8", avg: 79 },
  { class: "Class 9", avg: 74 },
  { class: "Class 10", avg: 82 },
  { class: "Class 11", avg: 78 },
  { class: "Class 12", avg: 85 },
];

export const EXAM_RESULTS: ExamResult[] = [
  { id: 1, student: "Aiden Carter", class: "10-A", math: 92, english: 88, physics: 85, chemistry: 90, biology: 87, total: 442, percentage: 88.4, grade: "A", rank: 3 },
  { id: 2, student: "Sofia Hernandez", class: "10-A", math: 98, english: 95, physics: 93, chemistry: 96, biology: 94, total: 476, percentage: 95.2, grade: "A+", rank: 1 },
  { id: 3, student: "Emma Williams", class: "9-B", math: 84, english: 91, physics: 79, chemistry: 82, biology: 88, total: 424, percentage: 84.8, grade: "B+", rank: 2 },
  { id: 4, student: "Liam Johnson", class: "9-B", math: 72, english: 78, physics: 68, chemistry: 74, biology: 71, total: 363, percentage: 72.6, grade: "B", rank: 5 },
  { id: 5, student: "Noah Davis", class: "11-C", math: 95, english: 89, physics: 94, chemistry: 91, biology: 0, total: 369, percentage: 92.3, grade: "A+", rank: 1 },
  { id: 6, student: "Olivia Martinez", class: "11-C", math: 86, english: 92, physics: 81, chemistry: 88, biology: 0, total: 347, percentage: 86.8, grade: "A", rank: 2 },
];

export const FEE_RECORDS: FeeRecord[] = [
  { id: 1, student: "Aiden Carter", class: "10-A", term: "Term 1", amount: 4500, paid: 4500, balance: 0, dueDate: "2024-09-15", paidDate: "2024-09-10", status: "Paid" },
  { id: 2, student: "Sofia Hernandez", class: "10-A", term: "Term 1", amount: 4500, paid: 4500, balance: 0, dueDate: "2024-09-15", paidDate: "2024-09-08", status: "Paid" },
  { id: 3, student: "Liam Johnson", class: "9-B", term: "Term 1", amount: 4200, paid: 0, balance: 4200, dueDate: "2024-09-15", paidDate: "—", status: "Pending" },
  { id: 4, student: "Noah Davis", class: "11-C", term: "Term 1", amount: 4800, paid: 0, balance: 4800, dueDate: "2024-08-31", paidDate: "—", status: "Overdue" },
  { id: 5, student: "Emma Williams", class: "9-B", term: "Term 1", amount: 4200, paid: 4200, balance: 0, dueDate: "2024-09-15", paidDate: "2024-09-12", status: "Paid" },
  { id: 6, student: "James Anderson", class: "8-D", term: "Term 1", amount: 3900, paid: 0, balance: 3900, dueDate: "2024-09-15", paidDate: "—", status: "Pending" },
];

export const LIBRARY_BOOKS: LibraryBook[] = [
  { id: "LIB001", title: "Advanced Mathematics Vol. 2", author: "Stewart James", isbn: "978-0-13-468599-1", category: "Mathematics", copies: 8, available: 5, issued: 3 },
  { id: "LIB002", title: "Fundamentals of Physics", author: "Halliday & Resnick", isbn: "978-0-470-46908-8", category: "Physics", copies: 6, available: 2, issued: 4 },
  { id: "LIB003", title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0-06-112008-4", category: "Literature", copies: 10, available: 7, issued: 3 },
  { id: "LIB004", title: "A Brief History of Time", author: "Stephen Hawking", isbn: "978-0-553-38016-3", category: "Science", copies: 5, available: 5, issued: 0 },
  { id: "LIB005", title: "Organic Chemistry", author: "Paula Bruice", isbn: "978-0-32-168606-2", category: "Chemistry", copies: 7, available: 3, issued: 4 },
  { id: "LIB006", title: "Computer Science Illuminated", author: "Nell Dale", isbn: "978-1-284-05580-3", category: "Computer Science", copies: 4, available: 4, issued: 0 },
];

export const TRANSPORT_ROUTES: TransportRoute[] = [
  { id: 1, route: "Route A – North Zone", bus: "BUS-001", driver: "Henry Collins", students: 42, stops: "Park Ave, Oak St, Main Rd", departure: "7:20 AM", return: "3:45 PM" },
  { id: 2, route: "Route B – East Zone", bus: "BUS-002", driver: "Frank Turner", students: 38, stops: "Elm Dr, Pine Ave, Cedar Blvd", departure: "7:30 AM", return: "3:55 PM" },
  { id: 3, route: "Route C – West Zone", bus: "BUS-003", driver: "George Simmons", students: 45, stops: "Maple St, Birch Rd, Spruce Ln", departure: "7:15 AM", return: "3:40 PM" },
];

export const HOSTEL_ROOMS: HostelRoom[] = [
  { room: "A-101", type: "Double", capacity: 2, occupied: 2, students: "Ethan Brown, William Thomas", warden: "Mrs. Cooper", block: "Block A" },
  { room: "A-102", type: "Double", capacity: 2, occupied: 1, students: "Noah Davis", warden: "Mrs. Cooper", block: "Block A" },
  { room: "B-201", type: "Triple", capacity: 3, occupied: 3, students: "Liam Johnson, James Anderson, —", warden: "Mr. Patel", block: "Block B" },
  { room: "B-202", type: "Single", capacity: 1, occupied: 0, students: "—", warden: "Mr. Patel", block: "Block B" },
];

export const ADMISSIONS: Admission[] = [
  { id: "ADM001", name: "Lucas Reynolds", applyClass: "9-A", date: "2024-03-01", status: "Approved", score: 88, contact: "555-0301", fee: "Paid" },
  { id: "ADM002", name: "Grace Mitchell", applyClass: "10-A", date: "2024-03-03", status: "Under Review", score: 92, contact: "555-0302", fee: "Pending" },
  { id: "ADM003", name: "Henry Rodriguez", applyClass: "11-C", date: "2024-03-05", status: "Interview Scheduled", score: 85, contact: "555-0303", fee: "Pending" },
  { id: "ADM004", name: "Zoe Phillips", applyClass: "8-D", date: "2024-03-07", status: "Approved", score: 79, contact: "555-0304", fee: "Paid" },
  { id: "ADM005", name: "Nathan Cooper", applyClass: "12-A", date: "2024-03-08", status: "Rejected", score: 55, contact: "555-0305", fee: "Refunded" },
];

export const NOTIFICATIONS_DATA: NotificationItem[] = [
  { id: 1, title: "Fee Payment Reminder", message: "Term 2 fees due by October 15th. Please ensure timely payment.", type: "Fee", audience: "Parents", date: "2024-03-08", sent: 847 },
  { id: 2, title: "Annual Sports Day", message: "Annual Sports Day scheduled for March 20th. All students to report by 8 AM.", type: "Event", audience: "All", date: "2024-03-07", sent: 1247 },
  { id: 3, title: "Exam Schedule Released", message: "Mid-term examination schedule has been published on the portal.", type: "Academic", audience: "Students, Parents", date: "2024-03-06", sent: 1094 },
  { id: 4, title: "Staff Meeting", message: "Mandatory staff meeting on March 12th at 2 PM in the conference room.", type: "Admin", audience: "Teachers", date: "2024-03-05", sent: 89 },
];

export const STUDENT_ATTENDANCE_RECORDS: AttendanceRecord[] = [
  { date: "2024-03-01", day: "Friday", status: "Present", period: "Full Day" },
  { date: "2024-03-04", day: "Monday", status: "Present", period: "Full Day" },
  { date: "2024-03-05", day: "Tuesday", status: "Absent", period: "Full Day", reason: "Medical" },
  { date: "2024-03-06", day: "Wednesday", status: "Present", period: "Full Day" },
  { date: "2024-03-07", day: "Thursday", status: "Late", period: "2nd Period Onwards" },
  { date: "2024-03-08", day: "Friday", status: "Present", period: "Full Day" },
];

export const ASSIGNMENTS: Assignment[] = [
  { id: 1, title: "Calculus – Integration Practice", subject: "Mathematics", class: "10-A", due: "2024-03-15", submitted: 28, total: 35, status: "Active" },
  { id: 2, title: "Essay: Climate Change Impact", subject: "English", class: "10-A", due: "2024-03-12", submitted: 35, total: 35, status: "Closed" },
  { id: 3, title: "Newton's Laws Problems", subject: "Physics", class: "11-C", due: "2024-03-18", submitted: 12, total: 32, status: "Active" },
  { id: 4, title: "Organic Compounds Classification", subject: "Chemistry", class: "11-C", due: "2024-03-20", submitted: 5, total: 32, status: "Active" },
  { id: 5, title: "World War II Analysis", subject: "History", class: "9-B", due: "2024-03-10", submitted: 30, total: 30, status: "Graded" },
];

export const PERFORMANCE_DATA: PerformancePoint[] = [
  { month: "Aug", math: 78, science: 72, english: 80 },
  { month: "Sep", math: 82, science: 76, english: 83 },
  { month: "Oct", math: 79, science: 80, english: 81 },
  { month: "Nov", math: 85, science: 84, english: 86 },
  { month: "Dec", math: 88, science: 86, english: 88 },
  { month: "Jan", math: 84, science: 82, english: 85 },
  { month: "Feb", math: 90, science: 88, english: 89 },
  { month: "Mar", math: 92, science: 90, english: 91 },
];
