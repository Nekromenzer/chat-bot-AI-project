import { hiArray, educationHashMap, stopWords } from './dataMaps'

// get random value from array provided
const getRandomValueFromArray = (arr, type, userName) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return {
    data: `${arr[randomIndex]}${
      !(userName === null || userName === '') && type === 'hi'
        ? `, ${
            userName.charAt(0).toUpperCase() + userName.slice(1)
          } Welcome back!`
        : ''
    }`,
    msgType: null,
    emotion: !(userName === null || userName === '') && type === 'hi' ? 2 : 1,
    customText: null
  }
}

//user input covert to lowercase -> split into words -> remove stop words
const optimizedUserInput = userText => {
  return userText
    .toLowerCase()
    .split(' ')
    .filter(word => !stopWords.includes(word))
    .join(' ')
}

const getGreeting = () => {
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  if (currentHour < 12) {
    return 'Good morning!'
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good afternoon!'
  } else if (currentHour >= 18 && currentHour < 24) {
    return 'Good evening!'
  } else {
    return 'Hello!'
  }
}

export const communicateWithUser = (
  userText,
  cb,
  hashMapState,
  conversation,
  setHashMapState,
  setConversation,
  userName,
  setUserName
) => {
  // hi
  if (
    hiArray.some(hiWord =>
      optimizedUserInput(userText).split(' ').includes(hiWord.toLowerCase())
    )
  ) {
    return cb(getRandomValueFromArray(hiArray, 'hi', userName))
  }
  // greetings
  if (
    optimizedUserInput(userText).includes('morning') ||
    optimizedUserInput(userText).includes('afternoon') ||
    optimizedUserInput(userText).includes('evening') ||
    optimizedUserInput(userText).includes('night')
  ) {
    return cb({
      data: `${getGreeting()} How can i help you?`,
      emotion: 2,
      msgType: null,
      customText: null
    })
  }
  // name
  if (optimizedUserInput(userText).includes('name')) {
    return cb({
      data: `My name is Talktron${
        !(userName === null || userName === '')
          ? `, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`
          : ''
      }`,
      emotion: 3,
      // check userName available , if name is there avoid asking "What is your name ?" again
      msgType: !(userName === null || userName === '') ? '' : 'duel-msg',
      customText: 'What is your name ?'
    })
  }
  // course
  if (
    (optimizedUserInput(userText).includes('course') ||
      optimizedUserInput(userText).includes('courses')) &&
    !(
      optimizedUserInput(userText).includes('fee') ||
      optimizedUserInput(userText).includes('price') ||
      optimizedUserInput(userText).includes('amount')
    )
  ) {
    const value = hashMapState['courses']
    return cb(value)
  }
  // languages
  if (
    optimizedUserInput(userText).includes('languages') ||
    optimizedUserInput(userText).includes('language') ||
    optimizedUserInput(userText).includes('medium')
  ) {
    const value = hashMapState['languages']
    return cb(value)
  }
  // payment methods
  if (optimizedUserInput(userText).includes('payment')) {
    const value = hashMapState['paymentOption']
    return cb(value)
  }
  // faculties
  if (
    optimizedUserInput(userText).includes('facilities') ||
    optimizedUserInput(userText).includes('facility')
  ) {
    const value = hashMapState['facilities']
    return cb(value)
  }
  // fees
  if (
    optimizedUserInput(userText).includes('fee') ||
    optimizedUserInput(userText).includes('price') ||
    optimizedUserInput(userText).includes('amount')
  ) {
    const value = hashMapState['fees']
    return cb(value)
  }
  // scholarship
  if (
    optimizedUserInput(userText).includes('scholarship') ||
    optimizedUserInput(userText).includes('scholar')
  ) {
    const value = hashMapState['scholarship']
    return cb(value)
  }
  // admission
  if (optimizedUserInput(userText).includes('admission')) {
    const value = hashMapState['admission']
    return cb(value)
  }
  // opportunities
  if (
    optimizedUserInput(userText).includes('opportunities') ||
    optimizedUserInput(userText).includes('vacancies') ||
    optimizedUserInput(userText).includes('opportunity') ||
    optimizedUserInput(userText).includes('vacancy')
  ) {
    const value = hashMapState['opportunities']
    return cb(value)
  }
  // life
  if (optimizedUserInput(userText).includes('life')) {
    const value = hashMapState['life']
    return cb(value)
  }
  // lectures
  if (
    optimizedUserInput(userText).includes('lectures') ||
    optimizedUserInput(userText).includes('lecture')
  ) {
    const value = hashMapState['lectures']
    return cb(value)
  }
  // organizations
  if (
    optimizedUserInput(userText).includes('organization') ||
    optimizedUserInput(userText).includes('union') ||
    optimizedUserInput(userText).includes('societies') ||
    optimizedUserInput(userText).includes('society') ||
    optimizedUserInput(userText).includes('association') ||
    optimizedUserInput(userText).includes('club')
  ) {
    const value = hashMapState['organizations']
    return cb(value)
  }
  // internships
  if (
    optimizedUserInput(userText).includes('internships') ||
    optimizedUserInput(userText).includes('internship')
  ) {
    const value = hashMapState['internships']
    return cb(value)
  }
  // online
  if (
    optimizedUserInput(userText).includes('online') ||
    optimizedUserInput(userText).includes('remote')
  ) {
    const value = hashMapState['online']
    return cb(value)
  }
  // prerequisites
  if (
    optimizedUserInput(userText).includes('prerequisite') ||
    optimizedUserInput(userText).includes('requirement')
  ) {
    const value = hashMapState['prerequisites']
    return cb(value)
  }
  // branches
  if (optimizedUserInput(userText).includes('branch')) {
    const value = hashMapState['branches']
    return cb(value)
  }
  // contact
  if (optimizedUserInput(userText).includes('contact')) {
    const value = hashMapState['contact']
    return cb(value)
  }
  // aboutInstitute
  if (optimizedUserInput(userText).includes('institute')) {
    const value = hashMapState['aboutInstitute']
    return cb(value)
  }
  // onlinePay
  if (
    optimizedUserInput(userText).includes('online payment') ||
    optimizedUserInput(userText).includes('card')
  ) {
    const value = hashMapState['onlinePay']
    return cb(value)
  }
  // time
  if (optimizedUserInput(userText).includes('time')) {
    const value = hashMapState['time']
    return cb(value)
  }
  // good bye
  if (optimizedUserInput(userText).includes('goodbye')) {
    return cb({
      data: `Thank you for considering our institute. Have a great day! ${
        userName && userName
      }`,
      emotion: 9,
      msgType: 'greeting',
      customText: null
    })
  }
  // check in hash map keys = user input
  if (hashMapState[optimizedUserInput(userText)]) {
    const value = hashMapState[optimizedUserInput(userText)]
    return cb(value)
  } else {
    // store user name
    if (
      conversation &&
      conversation.length &&
      conversation[conversation.length - 1].msg === 'What is your name ?'
    ) {
      // store in local storage
      localStorage.setItem('userName', optimizedUserInput(userText))
      // store in state
      setUserName(userText)
      return cb({
        data: 'Thank you!, Now I can remember your name',
        msgType: null,
        emotion: 4
      })
    }
    // learn from user
    if (
      conversation &&
      conversation.length &&
      conversation[conversation.length - 1].msgType === 'learn'
    ) {
      // get asked question
      const secondLastElement = conversation[conversation.length - 2]
      const secondLastElementMsg = secondLastElement.msg
      // add answer
      const newHashObj = {
        data: optimizedUserInput(userText),
        emotion: 5,
        msgType: 'self-learned'
      }
      // add to hashmap
      const hashMapCopy = hashMapState
      hashMapCopy[secondLastElementMsg] = newHashObj
      setHashMapState(hashMapCopy)

      // send msg to user after adding his answer
      const msgFromBot = {
        msg: 'Thanks! Added to my database, Now I know even than before',
        emotion: 8, // thanks
        msgType: null,
        customText: null,
        type: 'bot'
      }
      setConversation(preArray => [...preArray, msgFromBot])
    } else {
      // ask answer form user question which don't know
      return cb({
        data: "I couldn't find Answer for this in my database, <b>Can you say the answer please?</b>",
        msgType: 'learn',
        emotion: 9
      })
    }
  }
}

// +++emotions+++
// 1 - hi
// 2- greetings
