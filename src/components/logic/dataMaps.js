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
  '<span><b>Stop talking -</b> Deactivate bot voice</span>',
  "<span className='text-left'><b>Ask bot's name in any way -</b> He will answer your question and Ask your name to remember</span>"
]

const educationHashMap = {
  // done
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
    emotion: 8,
    customText: 'You can find any course related to following fields'
  },
  // languages
  languages: {
    data: [
      'English',
      'Sinhala',
      'Tamil',
      'For language courses its related language'
    ],
    msgType: 'table-simple',
    emotion: 2,
    customText: 'According to learning medium we teach in following languages'
  },
  // payment option
  paymentOption: {
    data: [
      { key: '01. ', value: 'Online Payment' },
      { key: '02.', value: 'Credit Card Payment' },
      { key: '03.', value: 'Cash payment' }
    ],
    msgType: 'stats',
    emotion: 7,
    customText: 'We accept Online Payment,Credit Card Payment & cash payment'
  },
  // faculties
  facilities: {
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
    emotion: 4,
    customText: 'These are the facilities in our institute'
  },
  // register: {
  //   data: "Please provide your personal and enrollment details... <a href='https://landing.esoft.lk/onlineregistrationform/' target='_blank'>register from here</a>",
  //   emotion: 1
  // },
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
    emotion: 7,
    customText: 'Here is the fees for each course'
  },
  scholarship: {
    data: '',
    emotion: 5,
    customText:
      'Based on your academic performance, We have various scholarship according to performance of student, You can get more info from our website'
  },
  admission: {
    data: `To get more information about admission process please visit above link`,
    emotion: 2,
    customText: 'Visit: <a href="" className="text-blue-600">Adamic info</a> '
  },
  opportunities: {
    data: 'Our graduates have opportunities in various top level companies in Sri lanka as well as Overseas',
    emotion: 1
  },
  life: {
    data: 'Our campus has various facilities such as a library, sports center, and cafeteria. Also cultural events ,sports meet and some curricular activities',
    emotion: 4
  },
  lectures: {
    data: 'Our faculty members are highly qualified and experienced in their respective fields.',
    emotion: 8
  },
  organizations: {
    data: 'We have various student organizations such as clubs, societies, and associations.',
    emotion: 4
  },
  internships: {
    data: 'We offer internship opportunities with top companies in the industry.In every programme end',
    emotion: 2
  },
  online: {
    data: 'We also offer online courses for those who cannot attend classes in person.',
    emotion: 2
  },
  prerequisites: {
    data: 'The prerequisites for the selected course are You should have minimum C pass for Maths & English in GCE O/L',
    emotion: 5
  },
  branches: {
    data: 'We have branches in Kandy,Colombo,Galle,Kurunegala',
    emotion: 2
  },
  contact: {
    data: 'Head office No 03, De Fonseka Place Colombo 04 Sri Lanka Tel :+94 117 572 572',
    emotion: 4
  },
  aboutInstitute: {
    data: 'With roots going back to the year 2000, TecSoft has grown to be the largest private sector higher education network in Sri Lanka due to an extensive island-wide network of 40 branches which create opportunities for over 30,000 students each year. Initially starting with Computing, ESOFT today is a diversified education provider in the fields of ICT & Computing, Business Management, Hospitality Management, Engineering, Personal & Professional Development, Language Training and Corporate Training.',
    emotion: 3
  },
  onlinePay: {
    data: 'After getting registered through the app a message will appear to make the payment, which you may follow through that by entering your card details.',
    emotion: 1
  },
  time: {
    data: 'As it is completely online there is no allocated time frame to follow the courses. The greatest part about the app is that it gives you the flexibility of learning anytime from anywhere, simply through your mobile.',
    emotion: 3
  }
}

export { hiArray, educationHashMap, stopWords, instructionsArray }
