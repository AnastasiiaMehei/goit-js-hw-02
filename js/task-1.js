function makeTransaction(quantity, pricePerDroid, customerCredits) {
  const totalPrice = quantity * pricePerDroid;
  customerCredits === totalPrice;
  if (totalPrice > customerCredits) {
    return `Insufficient funds!`;
  } else {
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
  }
  return makeTransaction;
}
