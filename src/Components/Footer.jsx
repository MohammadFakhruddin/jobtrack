import React from 'react';
import logo from '../assets/reciepe-logo.png';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-accent text-white mt-10">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Logo & Site Name */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className='' />
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p>Email: <a href="mailto:contact@tastyrecipes.com" className="underline hover:text-[--color-primary]">contact@tastyrecipes.com</a></p>
                    <p>Phone: <a href="tel:+1234567890" className="underline hover:text-[--color-primary]">+1 234 567 890</a></p>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-primary]">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-primary]">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[--color-primary]">
                            <FaInstagram />
                        </a>
                        <a href="mailto:contact@tastyrecipes.com" className="hover:text-[--color-primary]">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm py-4 border-t border-white border-opacity-20">
                © {new Date().getFullYear()} TastyRecipes. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
