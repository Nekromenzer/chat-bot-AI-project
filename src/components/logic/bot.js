import { hiArray, educationHashMap, stopWords } from './sampleData'

//  helper functions

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

// check user input in hashmap
// const checkUserInputInHashMapKey = userInput => {
//   const searchWords = optimizedUserInput(userInput).split(' ')
//   const checkIsInHashMap = searchWords?.map(item => educationHashMap[item]).filter(element => element !== undefined);
//   return checkIsInHashMap
// }

// console.log(
//   checkUserInputInHashMapKey('can i know campus life'),
//   'sadaqwdqwdqwd'
// )

export const communicateWithUser = (userText, cb) => {
  // static replies
  if (optimizedUserInput(userText) === 'hi') {
    return cb(getRandomValueFromArray(hiArray, 'hi'))
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
    const value = educationHashMap['courses']
    return cb(value)
  }
  // fees
  if (
    optimizedUserInput(userText).includes('fee') ||
    optimizedUserInput(userText).includes('price') ||
    optimizedUserInput(userText).includes('amount')
  ) {
    const value = educationHashMap['fees']
    return cb(value)
  }
  if (optimizedUserInput(userText).includes('scholarship')) {
    const value = educationHashMap['scholarship']
    return cb(value)
  }
  // check in hash map
  if (educationHashMap.hasOwnProperty(optimizedUserInput)) {
    const value = educationHashMap[optimizedUserInput]
    return cb(value)
  } else {
    return cb({
      data: 'Man dan nah yakooo!',
      msgType: null,
      emotion: 0
    })
  }
}
