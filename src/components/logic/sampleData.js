const hiArray = [
  'Hi',
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
    emotion: 1,
  },
  details: 'The course details are as follows...',
  enrollment: 'Please provide your personal and enrollment details...',
  fees: {
    data: [
      { key: 'Hnd', value: '100,000/=' },
      { key: 'Undergraduate', value: '150,000/=' },
      { key: 'Postgraduate', value: '250,000/=' }
    ],
    msgType: 'stats',
    emotion: 1,
    customText:'Here is the fees for each course'
  },
  scholarship:
    'Based on your academic performance, you are eligible for a scholarship of $2000.',
  admission: 'The admission process includes...',
  opportunities:
    'Our graduates have opportunities in various fields such as...',
  help: 'How can I assist you today?',
  greeting: 'Hello! How may I assist you?',
  goodbye: 'Thank you for considering our institute. Have a great day!',
  life: 'Our campus has various facilities such as a library, sports center, and cafeteria.',
  faculty:
    'Our faculty members are highly qualified and experienced in their respective fields.',
  organizations:
    'We have various student organizations such as clubs, societies, and associations.',
  internships:
    'We offer internship opportunities with top companies in the industry.',
  online:
    'We also offer online courses for those who cannot attend classes in person.',
  prerequisites: 'The prerequisites for the selected course are...'
}

export { hiArray, educationHashMap }
