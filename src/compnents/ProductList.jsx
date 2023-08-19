import { useEffect, useState } from "react";
import Product from "./Product";
import getProduct from "../utils/fetchProduct";
import Loader from "./Loader";

const ProductList = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProduct().then((data) => setProducts(data));
  }, []);

  return (
    <div className="container z-10 mx-auto my-12 p-9">
      {products === null ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
