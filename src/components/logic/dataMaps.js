const stopWords = [
  'a',
  'an',
  'and',
  'are',
  'as',
  'at',
  'be',
  'by',
  'for',
  'from',
  'has',
  'he',
  'in',
  'is',
  'it',
  'its',
  'of',
  'on',
  'that',
  'the',
  'to',
  'was',
  'were',
  'with',
  'i',
  'know',
  'can',
  'good',
  'about',
  'wht'
]

const hiArray = [
  'Hi',
  'Hy',
  'Hello',
  'Howdy',
  'Hello there',
  'Hey',
  'What’s up',
  'Good day',
  'Hiya',
  'Hey there',
  'Hi-ya',
  'Hola'
]

const educationHashMap = {
  courses: {
    data: [
      'School of computing',
      'School of business and law',
      'School of tourism and hospitality',
      'School of engineering',
      'School of languages',
      'School of life science'
    ],
    msgType: 'table-simple',
    emotion: 1,
    customText: 'These are the courses available'
  },
  computing: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  businessAndLaw: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  hospitality: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  tourism: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  engineering: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  languages: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  science: {
    data: [
      'Certificate course',
      'Hnd course',
      'Diploma course',
      'Undergraduate course',
      'Post graduate course',
      'Doctoral course'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  option: {
    data: ['Onliine Payment', 'Credit Card Payment'],
    msgType: 'table-simple',
    emotion: 1
  },
  Faculties: {
    data: [
      'IT Lab',
      'Networking practical Lab',
      'library',
      'Network practical Lab',
      ' A/C Class Rooms',
      'Auditorium',
      'Sports',
      'GYM'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  details: { data: 'The course details are as follows...', emotion: 1 },
  enrollment: 'Please provide your personal and enrollment details...',
  fees: {
    data: [
      { key: 'Certificate course', value: '74,000/=' },
      { key: 'Hnd course', value: '150,000/=' },
      { key: 'Diploma course', value: '250,000/=' },
      { key: 'Undergraduate course ', value: '400,000/=' },
      { key: 'Post graduate course', value: '650,000/=' },
      { key: 'Post graduate course', value: '870,000/=' }
    ],
    msgType: 'stats',
    emotion: 1,
    customText: 'Here is the fees for each course'
  },
  scholarship: {
    data: 'Based on your academic performance, you are eligible for a scholarship of $2000.',
    emotion: 1
  },
  admission: { data: 'The admission process includes...', emotion: 1 },
  opportunities: {
    data: 'Our graduates have opportunities in various fields such as...',
    emotion: 1
  },
  help: { data: 'How can I assist you today?', emotion: 1 },
  greeting: { data: 'Hello! How may I assist you?', emotion: 1 },
  goodbye: {
    data: 'Thank you for considering our institute. Have a great day!',
    emotion: 1
  },
  life: {
    data: 'Our campus has various facilities such as a library, sports center, and cafeteria.',
    emotion: 1
  },
  faculty: {
    data: 'Our faculty members are highly qualified and experienced in their respective fields.',
    emotion: 1
  },
  organizations: {
    data: 'We have various student organizations such as clubs, societies, and associations.',
    emotion: 1
  },
  internships: {
    data: 'We offer internship opportunities with top companies in the industry.',
    emotion: 1
  },
  online: {
    data: 'We also offer online courses for those who cannot attend classes in person.',
    emotion: 1
  },
  prerequisites: {
    data: 'The prerequisites for the selected course are...',
    emotion: 1
  }
}
export { hiArray, educationHashMap, stopWords }
