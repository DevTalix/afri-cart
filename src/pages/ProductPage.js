import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // Assuming you have this component for related products

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch product details
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);

        // Fetch related products (for now, it's static, but you can fetch from an API)
        const relatedResponse = await fetch("/api/products/related");
        const relatedData = await relatedResponse.json();
        setRelatedProducts(relatedData);
      } catch (error) {
        console.error("Error fetching product data", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading product details...</p>;
  if (!product) return <p className="text-center">Product not found</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={product.name}
              className={`cursor-pointer ${
                product.image === img ? "border-4 border-blue-500" : ""
              }`}
              onClick={() => setProduct((prev) => ({ ...prev, image: img }))}
            />
          ))}
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-96 object-cover rounded-lg shadow-lg"
        />

        {/* Product Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-gray-700 mt-2">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600 mt-3">
            UGX {product.price.toLocaleString()}
          </p>

          {/* Ratings and Reviews */}
          <div className="mt-4">
            <span className="text-yellow-500">
              {"★".repeat(product.rating)}{" "}
              {"☆".repeat(5 - product.rating)}
            </span>
            <p className="text-gray-500 mt-1">{product.reviews.length} Reviews</p>
          </div>

          {/* Buy Button */}
          <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-8">
        <h2 className="text-xl font-bold text-gray-800">Related Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
          {relatedProducts.length === 0 ? (
            <p>No related products available.</p>
          ) : (
            relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
