import { useCart } from '../contexts/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <h3 className="font-bold">{item.title}</h3>
      <p>${item.price}</p>
      <div className="flex items-center">
        <button
          className="px-2 text-lg"
          onClick={() => updateQuantity(item.id, -1)}
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button className="px-2 text-lg" onClick={() => updateQuantity(item.id, 1)}>
          +
        </button>
      </div>
      <p>${(item.price * item.quantity).toFixed(2)}</p>
      <button className="text-red-500" onClick={() => removeFromCart(item.id)}>
        Remove
      </button>
    </div>
  );
};

export default CartItem;
