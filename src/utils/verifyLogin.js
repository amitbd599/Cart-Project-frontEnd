export default async function varifyLogin(email, otp) {

  try {
    const res = await fetch("https://cart-api.teamrabbil.com/api/verify-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        UserEmail: email,
        OTP: otp,
      }),
    });
    const data = await res.json();

    if (data.msg === "success") {
      localStorage.setItem("token", data.data);
      return true;
    }
  } catch (e) {
    return false
  }

}
