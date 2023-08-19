// eslint-disable-next-line react/prop-types
const CartItem = ({ product, remove }) => {
  const { id, title, image, price } = product || {};
  return (
    <div className="card card-side bg-white shadow-xl">
      <figure>
        <img className="w-40" src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h6 className="text-black">{title}</h6>
        <h3 className="text-xl font-bold text-gray-700">Price: Tk {"price"}</h3>
        <div className="card-actions justify-end">
          <button
            className="btn btn-sm btn-primary btn-outline"
            onClick={() => remove(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
