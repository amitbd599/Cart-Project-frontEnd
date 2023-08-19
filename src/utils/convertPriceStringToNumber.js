export default function convertPriceStringToNumber(getStringPrice) {
  const stringPrice = getStringPrice.cartList.price;
  const price = parseInt(stringPrice);
  return price;
}
