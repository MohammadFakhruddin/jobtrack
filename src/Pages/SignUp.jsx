import { useState, useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';
import ShowHidePassword from '../Components/ShowHidePassword';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SignUp = () => {
  const { createUser, setUser, updateUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name');
    const photo = formData.get('photo');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters, include 1 uppercase, 1 lowercase, and 1 special character.');
      return;
    }

    const userProfile = {
      name,
      email,
      photo
    };

    createUser(email, password)
      .then(result => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            toast.success('Account Created Successfully!');
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });

        fetch('https://recipe-book-server-zeta.vercel.app/users', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(userProfile)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data.insertedId);
          });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFF8F5] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-[#FF725E] mb-6">Register Now</h2>

        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Full Name"
              className="w-full px-4 py-2 border border-[#FFD19C] rounded focus:outline-none focus:ring-2 focus:ring-[#FF725E]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-[#FFD19C] rounded focus:outline-none focus:ring-2 focus:ring-[#FF725E]"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Link to Profile Photo"
              className="w-full px-4 py-2 border border-[#FFD19C] rounded focus:outline-none focus:ring-2 focus:ring-[#FF725E]"
            />
          </div>

          <ShowHidePassword />

          {passwordError && <p className="text-red-600 text-sm mt-2">{passwordError}</p>}

          <button
            type="submit"
            className="w-full bg-[#FF725E] text-white py-2 rounded mt-4 hover:bg-opacity-90 transition"
          >
            Sign Up
          </button>

          <div className="text-center my-4 text-sm font-semibold text-gray-600">OR</div>

          <GoogleSignIn />

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link to="/auth/login" className="text-[#FF725E] font-semibold hover:underline">
              Log In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
