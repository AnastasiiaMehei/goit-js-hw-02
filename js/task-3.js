function checkForSpam(message) {
  return message.includes('spam') && message.includes('sale') ? true : false;
}
