// src/components/Nav.js
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="bg-white shadow py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-green-600">NutriAI</Link>
        <div className="space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-green-600">About</Link>
          <Link href="/recipes" className="text-gray-700 hover:text-green-600">Recipes</Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
