export const profile = {
  name: 'Xushnudbek Hamilton',
  role: 'Full-stack & AI engineer',
  email: 'xushnudbek76n@gmail.com',
  studentId: '202537260',
  major: 'Computer Engineering',
  year: 2,
  gpa: 4.0,
};

export const studentProfiles = [
  {
    id: 'xushnudbek',
    name: profile.name,
    studentId: profile.studentId,
    major: profile.major,
    year: profile.year,
    gpa: profile.gpa,
  },
  {
    id: 'sample-101',
    name: 'Sample Student 1',
    studentId: 'DEMO-101',
    major: 'Computer Engineering',
    year: 1,
    gpa: 3.8,
  },
  {
    id: 'sample-102',
    name: 'Sample Student 2',
    studentId: 'DEMO-102',
    major: 'Computer Engineering',
    year: 2,
    gpa: 3.6,
  },
];

export const notifications = [
  { id: 'saved', type: 'success', message: 'Your profile was saved.' },
  { id: 'deadline', type: 'warning', message: 'The project deadline is approaching.' },
  { id: 'materials', type: 'info', message: 'New lecture notes are available.' },
];

export const studentsForList = [
  { id: 's-01', name: 'Jordan Lee', grade: 'A' },
  { id: 's-02', name: 'Taylor Kim', grade: 'B+' },
  { id: 's-03', name: 'Morgan Park', grade: 'A-' },
];
