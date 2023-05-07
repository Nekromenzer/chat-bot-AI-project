import { hiArray, educationHashMap } from './sampleData'

//  helper functions

// emotion for static bot replies
function getEmotions (type) {
  if (type === 'hi') {
    return 1
  }
  return 0
}

// get random value from array provided
function getRandomValueFromArray (arr, type) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return {
    data: arr[randomIndex],
    msgType: null,
    emotion: getEmotions(type)
  }
}

export const communicateWithUser = (userText, cb) => {
  //user input covert to lowercase
  const lowercasedUserText = userText.toLowerCase()
  // static replies
  if (lowercasedUserText === 'hi') {
    return cb(getRandomValueFromArray(hiArray, 'hi'))
  }
  // get values from educationHashMap
  if (
    lowercasedUserText.includes('course') ||
    lowercasedUserText.includes('courses')
  ) {
    const value = educationHashMap['courses']
    return cb(value)
  } else {
    return cb({
      data: 'Man dan nah yakooo!',
      msgType: null,
      emotion: 0
    })
  }
}
