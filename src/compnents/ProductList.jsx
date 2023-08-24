import { useEffect, useState } from "react";
import Product from "./Product";

import Loader from "./Loader";
import { GetAllProduct__Request__API } from "../Api/Api";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    GetAllProduct__Request__API().then((res) => {
      if (res) {
        setProducts(res.data);
      }
    });
  }, []);

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      {products === null ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
          {products?.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
