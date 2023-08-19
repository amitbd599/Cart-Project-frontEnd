export default async function getProduct() {
  const res = await fetch("http://localhost:5000/api/get-all-products");
  const data = await res.json();

  return data.data;
}
