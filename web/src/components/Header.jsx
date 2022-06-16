import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = function () {
  return (
    <header className="w-full">
      <nav className="container mx-auto flex gap-4 justify-between items-center px-4 py-3 sm:px-0 border-b border-gray-100">
        <Link
          className="text-gray-700 text-lg font-bebas flex gap-2 items-center"
          to="/"
        >
          <span className="text-xl w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
            📺
          </span>{' '}
          STREAMY
        </Link>

        <GoogleAuth />
      </nav>
    </header>
  );
};

export default Header;
