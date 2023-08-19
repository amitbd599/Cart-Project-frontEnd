export default function guestAutoAddToCart(token, productID) {
  const res = fetch(
    `https://cart-api.teamrabbil.com/api/create-cart/${productID}`,
    {
      method: "GET",
      headers: {
        token: token,
      },
    }
  );
  console.log(res);
  const data = res.json();

  return data;
}
