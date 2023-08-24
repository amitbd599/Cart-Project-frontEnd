import { useRef } from "react";
import { ErrorTost, IsEmpty } from "../Helpers/FormHelper";
import { createProduct__Request__API } from "../Api/Api";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Helpers/SessionHelper";

const CreateProductPage = () => {
  const navigate = useNavigate();
  let titleRef,
    short_desRef,
    priceRef,
    discountRef,
    discountPriceRef,
    imgRef,
    stockRef,
    starRef,
    remarkRef = useRef();

  const createProduct = () => {
    let title = titleRef.value;
    let short_des = short_desRef.value;
    let price = parseInt(priceRef.value);
    let discount = parseInt(discountRef.value);
    let discountPrice = parseInt(discountPriceRef.value);
    let img = imgRef.value;
    let stock = stockRef.value;
    let star = starRef.value;
    let remark = remarkRef.value;

    if (IsEmpty(title)) {
      ErrorTost("Title Required!");
    } else if (IsEmpty(short_des)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(price)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(discount)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(discountPrice)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(img)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(stock)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(star)) {
      ErrorTost("Short_des Required!");
    } else if (IsEmpty(remark)) {
      ErrorTost("Short_des Required!");
    } else if (getToken()) {
      createProduct__Request__API(
        title,
        short_des,
        price,
        discount,
        discountPrice,
        img,
        stock,
        star,
        remark
      ).then((res) => {
        if (res) {
          navigate("/");
        }
      });
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="container  mx-auto flex justify-center items-center py-[100px]">
      {/* component */}
      <div className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="nick"
              type="text"
              ref={(input) => (titleRef = input)}
            />
            <p className="text-gray-600 text-xs italic">Remove if not needed</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Short_des
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              ref={(input) => (short_desRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="number"
              ref={(input) => (priceRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Discount
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="number"
              ref={(input) => (discountRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Discount_price
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="number"
              ref={(input) => (discountPriceRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              ref={(input) => (imgRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              stock
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              ref={(input) => (stockRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              star
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              ref={(input) => (starRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Remark
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              ref={(input) => (remarkRef = input)}
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={createProduct}
            >
              Create Product
            </button>
          </div>
          <div className="md:w-2/3" />
        </div>
      </div>
    </div>
  );
};

export default CreateProductPage;
