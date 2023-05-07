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
  'good'
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
    data: ['Hnd', 'Undergraduate', 'Postgraduate'],
    msgType: 'table-simple',
    emotion: 1
  },
  details: { data: 'The course details are as follows...', emotion: 1 },
  enrollment: 'Please provide your personal and enrollment details...',
  fees: {
    data: [
      { key: 'Hnd', value: '100,000/=' },
      { key: 'Undergraduate', value: '150,000/=' },
      { key: 'Postgraduate', value: '250,000/=' }
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
