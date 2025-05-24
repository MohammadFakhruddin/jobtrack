import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import GoogleSignIn from '../Components/GoogleSignIn';
import PassWordHide from '../Components/PassWordHide'; 

const LogIn = () => {
    const { signInUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            setError("Please fill in all fields.");
            return;
        }

        setError('');

        signInUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                toast.success('Login successful');
                navigate('/');
            })
            .catch((err) => {
                console.error(err);
                setError(err.message || 'Login failed');
                toast.error(err.message || 'Login failed');
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[--color-base-100] px-4">
            <div className="card w-full max-w-sm bg-white shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center text-[--color-primary]">Login</h2>
                    <form onSubmit={handleLogIn} className="space-y-4 mt-4">
                        <div>
                            <label className="block text-[--color-accent] mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-primary]"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[--color-accent] mb-1">Password</label>
                            <PassWordHide />
                        </div>

                        {error && <p className="text-red-600 text-sm">{error}</p>}

                        <button type="submit" className="w-full bg-[--color-primary] text-white py-2 rounded hover:bg-opacity-90 transition">
                            Login
                        </button>
                    </form>

                    <div className="mt-4 text-center text-sm text-[--color-accent] font-semibold">OR</div>

                    <div className="mt-4">
                        <GoogleSignIn />
                    </div>

                    <p className="mt-6 text-center text-[--color-accent]">
                        Don't have an account?{' '}
                        <Link to="/auth/signup" className="text-[--color-primary] font-semibold hover:underline">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
