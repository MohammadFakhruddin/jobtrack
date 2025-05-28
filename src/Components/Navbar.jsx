import React, { useState } from 'react';
import logo from '../assets/reciepe-logo.png';
import { Link } from 'react-router';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-primary shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img src={logo} alt="Recipe Logo" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center space-x-6">
                        <Link to="/" className="text-[--color-accent] hover:text-[--color-primary] font-medium">Home</Link>
                        <Link to="/all" className="text-[--color-accent] hover:text-[--color-primary] font-medium">All Recipes</Link>
                        <Link to="/add" className="text-[--color-accent] hover:text-[--color-primary] font-medium">Add Recipe</Link>
                        <Link to="/myrecipe" className="text-[--color-accent] hover:text-[--color-primary] font-medium">My Recipes</Link>
                        <Link to='/auth/login' className="ml-4 text-[--color-primary] font-semibold hover:underline">Log In</Link>
                        <Link to="/auth/signup" className="ml-2 bg-[--color-primary] text-white px-4 py-2 rounded hover:bg-opacity-80 transition">Sign Up</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-[--color-accent] focus:outline-none">
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

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-[--color-base-100] px-4 pb-4 space-y-2">
                    <Link to="/" className="block text-[--color-accent] hover:text-[--color-primary]">Home</Link>
                    <Link to="/all" className="block text-[--color-accent] hover:text-[--color-primary]">All Recipes</Link>
                    <Link to="/add" className="block text-[--color-accent] hover:text-[--color-primary]">Add Recipe</Link>
                    <Link to="/myrecipes" className="block text-[--color-accent] hover:text-[--color-primary]">My Recipes</Link>
                    <Link to="/auth/login" className="block text-[--color-primary] font-medium">Log In</Link>
                    <Link to="/auth/signup" className="block bg-[--color-primary] text-white text-center py-2 rounded">Sign Up</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
