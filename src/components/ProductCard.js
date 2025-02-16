import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition bg-white">
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Product Details */}
      <div className="mt-2">
        <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
        <p className="text-gray-600">UGX {product.price.toLocaleString()}</p>
      </div>

      {/* View Details Button */}
      <Link
        to={`/product/${product.id}`}
        className="block mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 text-center"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
