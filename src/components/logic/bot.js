export const communicateWithUser = (userText, cb) => {
  if (userText === 'hi') {
    return cb('hi machn kohomada')
  }
  return 'man dan nah yakoo'
}
