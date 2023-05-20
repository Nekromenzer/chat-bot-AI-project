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

const instructionsArray = [
  '<span><b>Hi -</b> Get welcome from bot</span>',
  '<span><b>Clear -</b> Delete all chats</span>',
  '<span><b>Talk -</b> Activate bot voice</span>',
  '<span><b>Stop talking -</b> Deactivate bot voice</span>'
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
  languages: {
    data: [
      'English',
      'Sinhala',
      'Tamil',
      'For language courses its related language'
    ],
    msgType: 'table-simple',
    emotion: 1
  },
  paymentOption: {
    data: ['Onliine Payment', 'Credit Card Payment'],
    msgType: 'table-simple',
    emotion: 1
  },
  faculties: {
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
  register: {
    data: "Please provide your personal and enrollment details... <a href='https://landing.esoft.lk/onlineregistrationform/' target='_blank'>register from here</a>",
    emotion: 1
  },
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
  },
  branches: {
    data: 'We have branches in Kandy,Colombo,Galle,Kurunegala',
    emotion: 1
  },
  contact: {
    data: 'Head office No 03, De Fonseka Place Colombo 04 Sri Lanka Tel :+94 117 572 572',
    emotion: 1
  },
  aboutInstitute: {
    data: 'With roots going back to the year 2000, ESOFT has grown to be the largest private sector higher education network in Sri Lanka due to an extensive island-wide network of 40 branches which create opportunities for over 30,000 students each year. Initially starting with Computing, ESOFT today is a diversified education provider in the fields of ICT & Computing, Business Management, Hospitality Management, Engineering, Personal & Professional Development, Language Training and Corporate Training.',
    emotion: 1
  },
  onlinePay: {
    data: 'After getting registered through the app a message will appear to make the payment, which you may follow through that by entering your card details.',
    emotion: 1
  },
  time: {
    data: 'As it is completely online there is no allocated time frame to follow the courses. The greatest part about the app is that it gives you the flexibility of learning anytime from anywhere, simply through your mobile.',
    emotion: 1
  }
}

export { hiArray, educationHashMap, stopWords, instructionsArray }
