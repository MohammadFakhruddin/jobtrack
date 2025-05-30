import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';
import ShowHidePassword from '../Components/ShowHidePassword';
import { Link, useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const LogIn = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
       console.log(result);
        toast.success('Login Successful!');
        navigate(location.state || '/');
      })
      .catch((error) => {
        setError(error.code || 'Login failed');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF8F5] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-[#FF725E] mb-6">Login Now</h2>

        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-[#FFD19C] rounded focus:outline-none focus:ring-2 focus:ring-[#FF725E]"
              placeholder="Enter your email"
            />
          </div>

          <ShowHidePassword />

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#FF725E] text-white py-2 rounded mt-4 hover:bg-opacity-90 transition"
          >
            Log In
          </button>

          <div className="text-center my-4 text-sm font-semibold text-gray-600">OR</div>

          <GoogleSignIn />

          <p className="mt-4 text-sm text-center text-gray-600">
            Don't have an account?{' '}
            <Link to="/auth/signup" className="text-[#FF725E] font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
