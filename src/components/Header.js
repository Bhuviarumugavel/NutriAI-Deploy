import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-green-800 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/" className="text-2xl font-bold">NutriAI</Link>
        <nav className="space-x-6 text-sm font-semibold">
          <Link href="/about" className="hover:text-yellow-300">About</Link>
          <Link href="/recipes" className="hover:text-yellow-300">Recipes</Link>
          <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
