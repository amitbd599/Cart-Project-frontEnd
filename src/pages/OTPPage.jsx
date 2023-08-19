/* eslint-disable no-debugger */
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import varifyLogin from "../utils/verifyLogin";
import addToCart from "../utils/addToCart";

const OTPPage = () => {
  const [pin, setPin] = useState("");
  // const { email } = useParams();
  const navigate = useNavigate();
  const [searchParam] = useSearchParams();
  const email = searchParam.get("email");

  const handleVarifylogin = async () => {
    varifyLogin(email, pin).then((res) => {
      if (res) {
        navigate("/cart-list");
      } else {
        console.log("Error");
      }
    });
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
                <h1 className="text-2xl my-4">PIN VERIFICATION</h1>
                <p className="mb-4 text-gray-600 text-sm">
                  4 Digit Verification PIN has been send to your email
                </p>
                <input
                  value={pin}
                  onChange={(e) => setPin(e.target.value)}
                  type="text"
                  placeholder="4 Digit Pin"
                  className="input w-full bg-white rounded-lg input-bordered"
                />
                <button
                  className="btn rounded-lg w-full my-4 btn-primary"
                  onClick={handleVarifylogin}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
