class SessionHelper {
  setToken(token) {
    localStorage.setItem("Token", token);
  }
  getToken() {
    return localStorage.getItem("Token");
  }
  setEmail(email) {
    localStorage.setItem("Email", email);
  }

  getEmail() {
    return localStorage.getItem("Email");
  }
  setGuestCart(productId) {
    localStorage.setItem("guest-cart-item", productId);
  }

  getGuestCart() {
    return localStorage.getItem("guest-cart-item");
  }

  convertPriceStringToNumber(getStringPrice) {
    const stringPrice = getStringPrice.cartList.price;
    const price = parseInt(stringPrice);
    return price;
  }

  removeSession() {
    localStorage.clear();
    window.location.href = "/";
  }
}

export const {
  setToken,
  getToken,
  setEmail,
  getEmail,
  setGuestCart,
  getGuestCart,
  convertPriceStringToNumber,
  removeSession,
} = new SessionHelper();
