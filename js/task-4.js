function getShippingCost(country) {
  let price;
  switch (country) {
    case 1:
      country = China;
      price = 100;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case 2:
      country = Chile;
      price = 250;
      return '';
      break;
    case 3:
      country = Australia;
      price = 170;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    case 3:
      country = Jamaica;
      price = 120;
      return `Shipping to ${country} will cost ${price} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
  return getShippingCost(country);
}
