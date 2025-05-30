import React, { useState } from 'react';
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";

const ShowHidePassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name="password"
          required
          placeholder="Password"
          className="w-full px-4 py-2 pr-10 border border-[#FFD19C] rounded focus:outline-none focus:ring-2 focus:ring-[#FF725E]"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {showPassword ? (
            <FaRegEyeSlash className="text-[#FF725E]" size={18} />
          ) : (
            <FaRegEye className="text-[#FF725E]" size={18} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ShowHidePassword;
