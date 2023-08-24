import { useEffect, useState } from "react";
import Loader from "./Loader";
import {
  AllCartList__Request__API,
  deleteCart__Request__API,
} from "../Api/Api";
import {
  convertPriceStringToNumber,
  getEmail,
  getToken,
} from "../Helpers/SessionHelper";
import { SuccessTost } from "../Helpers/FormHelper";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const [CartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken()) {
      AllCartList__Request__API(getEmail()).then((res) => {
        if (res) {
          setCartItems(res.data);
        }
      });
    } else {
      navigate("/login");
    }
  }, []);

  const handleRemoveCart = (productId) => {
    deleteCart__Request__API(productId).then((res) => {
      if (res) {
        SuccessTost("Remove Cart Successful!");
        AllCartList__Request__API(getEmail()).then((res) => {
          setCartItems(res.data);
        });
      }
    });
  };

  const calculateTotalAmount = () => {
    const totalPrice = CartItems.reduce((total, currentValue) => {
      const price = convertPriceStringToNumber(currentValue);
      return total + price;
    }, 0);
    return totalPrice.toLocaleString();
  };

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      <div className="grid grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-3 gap-3">
        <div className="container col-span-2">
          <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-1 gap-3">
            {CartItems?.length <= 0 ? (
              <Loader />
            ) : (
              CartItems.map((item, index) => {
                return (
                  <div
                    className="card card-side bg-white shadow-xl"
                    key={index}
                  >
                    <figure>
                      <img
                        className="w-40"
                        src={item?.cartList?.image}
                        alt="Movie"
                      />
                    </figure>
                    <div className="card-body">
                      <h6 className="text-black">{item?.cartList?.title}</h6>
                      <h3 className="text-xl font-bold text-gray-700">
                        Price: Tk {item?.cartList?.price}
                      </h3>
                      <div className="card-actions justify-end">
                        <button
                          className="btn btn-sm btn-primary btn-outline"
                          onClick={() => handleRemoveCart(item._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        <div className="card shadow-xl h-44 w-100 bg-white">
          <div className="card-body">
            <h2 className="card-title">Total Item: {CartItems.length}</h2>
            <h6>Total Price: Tk {calculateTotalAmount()}</h6>
            <div className="card-actions">
              <button className="btn btn-sm my-4 btn-primary btn-outline">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartList;
