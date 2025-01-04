import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart, cart } = useCart();
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="p-4 border rounded shadow-md">
      <img src={product.image} alt={product.title} className="h-48 mx-auto" />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        className={`px-4 py-2 mt-2 text-white rounded ${
          isInCart ? 'bg-red-500' : 'bg-blue-500'
        }`}
        onClick={() => addToCart(product)}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
