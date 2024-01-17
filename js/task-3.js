function checkForSpam(message) {
  let newMessage = message.toLowerCase();
  return newMessage.includes('spam') || newMessage.includes('sale');
}
