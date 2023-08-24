import { useNavigate } from "react-router-dom";

import { getEmail, getToken, setGuestCart } from "../Helpers/SessionHelper";
import { AddToCart__Request__API } from "../Api/Api";

/* eslint-disable react/prop-types */
const Product = ({ product }) => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (getToken()) {
      AddToCart__Request__API(getEmail(), product._id);
    } else {
      setGuestCart(product._id);
      navigate("/login");
    }
  };
  return (
    <div className="card w-100 bg-white shadow-xl mb-[20px]">
      <figure className="w-full h-[300px]">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.title}
        />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{product.title}</h6>
        <p className="text-sm text-gray-400">{product.short_des}</p>
        <h6 className="font-bold">Price: Tk {product.price}</h6>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-outline btn-primary"
            onClick={handleAddToCart}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
