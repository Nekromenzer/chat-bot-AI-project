import { hiArray } from './sampleData'

//  helper functions
function getRandomValueFromArray (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export const communicateWithUser = (userText, cb) => {
  //user input covert to lowercase
  const lowercasedUserText = userText.toLowerCase()

  if (lowercasedUserText === 'hi') {
    return cb(getRandomValueFromArray(hiArray))
  } else {
    return cb('man dan nah yakoo')
  }
}
