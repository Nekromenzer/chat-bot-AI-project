import { hiArray, educationHashMap, stopWords } from './sampleData'

// emotion for static bot replies
const getEmotions = type => {
  if (type === 'hi') {
    return 1
  }
  return 0
}

// get random value from array provided
const getRandomValueFromArray = (arr, type) => {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return {
    data: arr[randomIndex],
    msgType: null,
    emotion: getEmotions(type),
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
  lastMsgOfConversation
) => {
  // hi
  if (
    hiArray.some(hiWord =>
      optimizedUserInput(userText).split(' ').includes(hiWord.toLowerCase())
    )
  ) {
    return cb(getRandomValueFromArray(hiArray, 'hi'))
  }
  // greetings
  if (
    optimizedUserInput(userText).includes('morning') ||
    optimizedUserInput(userText).includes('afternoon') ||
    optimizedUserInput(userText).includes('evening') ||
    optimizedUserInput(userText).includes('night')
  ) {
    return cb({
      data: getGreeting(),
      emotion: 2,
      msgType: 'greeting',
      customText: 'How can i help you?'
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
  // name
  if (optimizedUserInput(userText).includes('name')) {
    const storedValue = localStorage.getItem('userName')
    return cb({
      data: `My name is Talktron ${
        !(storedValue === null || storedValue === '') ? `,${storedValue.charAt(0).toUpperCase() + storedValue.slice(1)}` : ''
      }`,
      emotion: 3,
      // check userName available , if name is there avoid asking "What is your name ?" again
      msgType: !(storedValue === null || storedValue === '') ? '' : 'duel-msg',
      customText: 'What is your name ?'
    })
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
  // check in hash map
  if (hashMapState.hasOwnProperty(optimizedUserInput)) {
    const value = hashMapState[optimizedUserInput]
    return cb(value)
  } else {
    if (lastMsgOfConversation.msg === 'What is your name ?') {
      localStorage.setItem('userName', optimizedUserInput(userText))
    }
    return cb({
      data: 'Man dan nah yakooo!',
      msgType: null,
      emotion: 0
    })
  }
}

// +++emotions+++
// 1 - hi
// 2- greetings
