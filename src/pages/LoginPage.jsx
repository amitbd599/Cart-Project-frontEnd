import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorTost, IsEmpty } from "../Helpers/FormHelper";
import { AddToCart__Request__API, login__Request__API } from "../Api/Api";
import { getEmail, getGuestCart } from "../Helpers/SessionHelper";

const LoginPage = () => {
  let emailRef,
    passwordRef = useRef();
  const navigate = useNavigate();

  const handleLogin = () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmpty(email)) {
      ErrorTost("Email Required!");
    } else if (IsEmpty(password)) {
      ErrorTost("Password Required!");
    } else {
      login__Request__API(email, password).then((res) => {
        if (res) {
          if (localStorage.getItem("guest-cart-item").length > 0) {
            AddToCart__Request__API(getEmail(), getGuestCart()).then((res) => {
              if (res) {
                localStorage.removeItem("guest-cart-item");
                navigate(`/cart-list`);
              }
            });
          } else {
            navigate(`/cart-list`);
          }
        }
      });
    }
  };

  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-2">
        <div className="flex items-center w-full justify-center h-screen">
          <div className="card w-8/12 card-side bg-white shadow-xl">
            <figure>
              <img
                className="h-96 w-96"
                src="/images/login-banner.png"
                alt="Movie"
              />
            </figure>
            <div className="card-body justify-center items-center">
              <div className="w-8/12">
                <h1 className="text-2xl my-4">
                  Welcome To Cart Project Web Application
                </h1>
                <p className="mb-4 text-sm text-gray-600">
                  Enter your credentials to access your account
                </p>
                <div>
                  <input
                    ref={(input) => (emailRef = input)}
                    type="email"
                    placeholder="Email.."
                    className="input w-full bg-white rounded-lg input-bordered"
                  />
                </div>
                <br />
                <div>
                  <input
                    ref={(input) => (passwordRef = input)}
                    type="password"
                    placeholder="password"
                    className="input w-full bg-white rounded-lg input-bordered"
                  />
                </div>
                <button
                  className="btn rounded-lg w-full my-4 btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>
                <div>
                  <p>
                    You do not have an account?{" "}
                    <Link to={"/register"}>
                      <strong>Register now</strong>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
