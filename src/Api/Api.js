import axios from "axios";
import { getToken, setEmail, setToken } from "../Helpers/SessionHelper";
import { ErrorTost, SuccessTost } from "../Helpers/FormHelper";
const BaseURL = "http://localhost:5000/api";

//! ================== Register User API ====================
export const Register__Request__API = async (email, password) => {
  let URL = BaseURL + "/user-register";

  let postBody = {
    email,
    password,
  };
  try {
    const result = await axios.post(URL, postBody);
    if (result.status === 200) {
      SuccessTost("Registration Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong -1");
      return false;
    }
  } catch (e) {
    if (e.response.data.error.name === "ValidationError") {
      ErrorTost("User Already registered!");
    } else {
      ErrorTost("Something Went Wrong -3");
    }

    return false;
  }
};

//! ==================  Login API ===================
export const login__Request__API = async (email, password) => {
  let URL = BaseURL + "/user-login";
  let postBody = {
    email,
    password,
  };

  try {
    const result = await axios.post(URL, postBody);

    if (result.status === 200) {
      if (result.data["status"] === "success") {
        setToken(result.data["token"]);
        setEmail(email);
        SuccessTost("Login Success!");
        return true;
      } else {
        ErrorTost("Unauthorized");
        return false;
      }
    } else {
      ErrorTost("Login Fail!-2");
      return false;
    }
  } catch (e) {
    ErrorTost("Login Fail!-3");
    return false;
  }
};

//! ================== Get All Product API ===================
export const GetAllProduct__Request__API = async () => {
  let URL = BaseURL + "/get-all-products";

  try {
    const result = await axios.get(URL);

    if (result.status === 200) {
      return result.data;
    } else {
      ErrorTost("Something Went Wrong -1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong -2");
    return false;
  }
};

//! ================== Add to Cart API ====================
export const AddToCart__Request__API = async (user_email, product_id) => {
  let URL = BaseURL + "/create-cart";
  let TokenData = { headers: { Token: getToken() } };
  let postBody = {
    user_email,
    product_id,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    if (result.status === 200) {
      SuccessTost("Product Add Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong -1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong -3");
    return false;
  }
};

//! ================== Get All Cart List API ===================
export const AllCartList__Request__API = async (user_email) => {
  let URL = BaseURL + "/cart-list";
  let TokenData = { headers: { Token: getToken() } };
  let postBody = {
    user_email,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);

    if (result.status === 200) {
      return result.data;
    } else {
      ErrorTost("Something Went Wrong -1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong -2");
    return false;
  }
};

//!====================== Delete Cart API =====================

export const deleteCart__Request__API = async (id) => {
  let URL = BaseURL + "/delete-cart/" + id;
  let TokenData = { headers: { Token: getToken() } };
  try {
    const result = await axios.delete(URL, TokenData);

    if (result.status === 200) {
      return true;
    } else {
      ErrorTost("Something Went Wrong");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong");

    return false;
  }
};

//! ================== Create Product API ====================
export const createProduct__Request__API = async (
  title,
  short_des,
  price,
  discount,
  discount_price,
  image,
  stock,
  star,
  remark
) => {
  let URL = BaseURL + "/create-product";
  let TokenData = { headers: { Token: getToken() } };
  let postBody = {
    title,
    short_des,
    price,
    discount,
    discount_price,
    image,
    stock,
    star,
    remark,
  };

  try {
    const result = await axios.post(URL, postBody, TokenData);
    if (result.status === 200) {
      SuccessTost("Product Create Success");
      return true;
    } else {
      ErrorTost("Something Went Wrong -1");
      return false;
    }
  } catch (e) {
    ErrorTost("Something Went Wrong -2");
    return false;
  }
};
