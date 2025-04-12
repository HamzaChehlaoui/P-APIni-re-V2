import React, { useState } from 'react';

// Simple leaf SVG icon component
const LeafIcon = ({ className = "", size = 24 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M11 20A7 7 0 0 1 4 13c0-7 9-11 9-11s9 4 9 11a7 7 0 0 1-7 7h-5z" />
    <path d="M12 13v7" />
  </svg>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', email, password);
    // Handle login logic here
  };
  
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 border border-green-100">
        <div className="flex items-center justify-center mb-6">
          <LeafIcon className="text-green-600 mr-2" size={28} />
          <h1 className="text-3xl font-bold text-green-800">GreenLogin</h1>
        </div>
        
        <p className="text-center text-green-700 mb-6">Welcome back, plant lover!</p>
        
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-green-700 mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-3 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-green-700 mb-1">Password</label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-md border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input id="remember" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-green-300 rounded" />
              <label htmlFor="remember" className="ml-2 text-green-700">Remember me</label>
            </div>
            <a href="#" className="text-green-600 hover:text-green-800 font-medium">Forgot password?</a>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-md transition duration-300 flex items-center justify-center"
          >
            <LeafIcon className="mr-2" size={16} />
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center text-sm">
          <p className="text-green-700">
            Don't have an account? <a href="#" className="text-green-600 hover:text-green-800 font-medium">Sign up</a>
          </p>
        </div>
        
        <div className="mt-8 pt-6 border-t border-green-100">
          <p className="text-xs text-center text-green-500">Grow your plant collection with us 🌿</p>
        </div>
      </div>
    </div>
  );
}