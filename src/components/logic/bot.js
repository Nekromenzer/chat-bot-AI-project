import { hiArray, educationHashMap, stopWords } from './dataMaps'

// emotion for static bot replies
const getEmotions = type => {
  if (type === 'hi') {
    return 1
  }
  return 0
}

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
      data: getGreeting(),
      emotion: 2,
      msgType: 'greeting',
      customText: 'How can i help you?'
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
  // good bye
  if (optimizedUserInput(userText).includes('goodbye')) {
    return cb({
      data: `Thank you for considering our institute. Have a great day! ${
        userName && userName
      }`,
      emotion: 2,
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
        emotion: 6,
        msgType: 'self-learned'
      }
      // add to hashmap
      const hashMapCopy = hashMapState
      hashMapCopy[secondLastElementMsg] = newHashObj
      setHashMapState(hashMapCopy)

      // send msg to user after adding his answer
      const msgFromBot = {
        msg: 'Thanks! Added to my database, Now I know even than before',
        emotion: 7, // thanks
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
        emotion: 5
      })
    }
  }
}

// +++emotions+++
// 1 - hi
// 2- greetings
