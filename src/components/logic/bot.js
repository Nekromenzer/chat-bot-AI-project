const hiArray = ['Hi', 'Hello', 'Howdy', 'Hello there']

//  helper functions
function getRandomValueFromArray (arr) {
  const randomIndex = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

export const communicateWithUser = (userText, cb) => {
  if (userText === 'hi') {
    return cb(getRandomValueFromArray(hiArray))
  } else {
    return cb('man dan nah yakoo')
  }
}
