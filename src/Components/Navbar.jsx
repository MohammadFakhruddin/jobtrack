import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '../assets/reciepe-logo.png';
import { AuthContext } from '../Provider/AuthProvider';
import { ThemeContext } from '../Provider/ThemeContext';
import { BsSun, BsMoonStars } from 'react-icons/bs';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => navigate('/'))
      .catch(err => console.error(err));
  };

  return (
    <nav className="bg-primary dark:bg-gray-900 shadow-md text-white dark:text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Recipe Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-yellow-300 font-medium">Home</Link>
            <Link to="/all" className="hover:text-yellow-300 font-medium">All Recipes</Link>

            {user && (
              <>
                <Link to="/add" className="hover:text-yellow-300 font-medium">Add Recipe</Link>
                <Link to="/myrecipe" className="hover:text-yellow-300 font-medium">My Recipes</Link>
              </>
            )}


            {/* Auth Area */}
            <div className="flex items-center gap-3">
              {user ? (
                <>
                  <img
                    src={user.photoURL || 'https://i.ibb.co/2Yy0kZL/avatar.png'}
                    alt="user"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="font-medium">{user.displayName || 'User'}</span>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-opacity-80"
                  >
                    Log Out
                  </button>
                </>
              ) : null}

              {/* Show these even if user is logged in, but moved to end */}
              {!user && (
                <>
                  <Link to="/auth/login" className="ml-4 hover:underline">Log In</Link>
                  <Link to="/auth/signup" className="ml-2 bg-white text-primary px-4 py-2 rounded hover:bg-opacity-80 transition">Sign Up</Link>
                </>
              )}

              {/* Theme Toggle */}
              <button onClick={toggleTheme} className="hover:text-yellow-400 transition" title="Toggle Theme">
                {darkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
              </button>


            </div>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggleTheme} className="hover:text-yellow-400">
              {darkMode ? <BsSun size={20} /> : <BsMoonStars size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 space-y-2 text-gray-800 dark:text-gray-100">
          <Link to="/" className="block hover:text-primary">Home</Link>
          <Link to="/all" className="block hover:text-primary">All Recipes</Link>

          {user && (
            <>
              <Link to="/add" className="block hover:text-primary">Add Recipe</Link>
              <Link to="/myrecipe" className="block hover:text-primary">My Recipes</Link>
            </>
          )}

          {user ? (
            <div className="flex flex-col gap-2 items-start">
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || 'https://i.ibb.co/2Yy0kZL/avatar.png'}
                  alt="user"
                  className="h-8 w-8 rounded-full"
                />
                <span>{user.displayName || 'User'}</span>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-opacity-80"
              >
                Log Out
              </button>
            </div>
          ) : null}

          {!user && (
            <>
              <Link to="/auth/login" className="block">Log In</Link>
              <Link to="/auth/signup" className="block bg-primary text-white text-center py-2 rounded">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
