import { hiArray, educationHashMap } from './sampleData'

//  helper functions
// get random value from array provided
function getRandomValueFromArray (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export const communicateWithUser = (userText, cb) => {
  //user input covert to lowercase
  const lowercasedUserText = userText.toLowerCase()
  // static replies
  if (lowercasedUserText === 'hi') {
    return cb(getRandomValueFromArray(hiArray))
  }
  // get values from educationHashMap
  if (
    lowercasedUserText.includes('course') ||
    lowercasedUserText.includes('courses')
  ) {
    const value = educationHashMap['courses']
    return cb(value)
  } else {
    return cb('man dan nah yakoo')
  }
}
