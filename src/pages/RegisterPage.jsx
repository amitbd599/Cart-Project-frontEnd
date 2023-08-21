import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ErrorTost, IsEmpty } from "../Helpers/FormHelper";
import { Register__Request__API } from "../Api/Api";

const RegisterPage = () => {
  let emailRef,
    passwordRef = useRef();
  const navigate = useNavigate();

  const handleRegister = () => {
    let email = emailRef.value;
    let password = passwordRef.value;
    if (IsEmpty(email)) {
      ErrorTost("Email Required!");
    } else if (IsEmpty(password)) {
      ErrorTost("Password Required!");
    } else {
      Register__Request__API(email, password).then((result) => {
        if (result === true) {
          navigate(`/login`);
        }
      });
    }
  };

  return (
    <div className="container  mx-auto">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1 gap-3">
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
                <h1 className="text-2xl my-4">Get Your Free Account Now.</h1>
                <p className="mb-4 text-sm text-gray-600">
                  Free forever. No payment needed.
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
                  onClick={handleRegister}
                >
                  Register
                </button>
                <div>
                  <p>
                    Already have an account?{" "}
                    <Link to={"/login"}>
                      <strong>Login now</strong>
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

export default RegisterPage;
