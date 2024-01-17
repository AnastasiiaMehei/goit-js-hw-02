function checkForSpam(message) {
    let newMessage = message.toLowerCase();
    return message.includes("spam", "sale") ? true : false;
  }
  