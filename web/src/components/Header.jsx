import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = function () {
  return (
    <header className="w-full bg-slate-600">
      <nav className="container mx-auto h-12 flex justify-between items-center px-4 sm:px-0">
        <Link className="text-white" to="/">
          Streamy
        </Link>
        <ul className="flex gap-4 text-gray-400">
          <li>
            <Link to="/" className="hover:text-gray-100">
              streams
            </Link>
          </li>
          <li>
            <GoogleAuth />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
