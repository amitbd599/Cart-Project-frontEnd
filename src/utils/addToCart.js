

const token = localStorage.getItem("token");
export default async function addToCart(productID) {
  console.log(token);
  const res = await fetch(
    `https://cart-api.teamrabbil.com/api/create-cart/${productID}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    }
  );
  const data = await res.json();

  return data;
}
