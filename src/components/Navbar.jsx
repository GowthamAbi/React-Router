import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4">
    <div className="container mx-auto flex justify-between">
      <Link to="/" className="text-lg font-bold">Product Store</Link>
      <Link to="/cart" className="text-lg">Cart</Link>
    </div>
  </nav>
);

export default Navbar;
