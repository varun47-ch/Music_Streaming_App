import { Heart, Home, ListMusic, Music2, Search, Settings } from 'lucide-react';
import React, { useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

function Layout() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 h-screen bg-gray-900 p-6 fixed">
          <div className="flex items-center gap-2 mb-8">
            <Music2 className="h-8 w-8 text-pink-500" />
            <h1 className="text-2xl font-bold">Vmusics</h1>
          </div>
          
          <nav className="space-y-6">
            <Link 
              to="/" 
              className={`flex items-center gap-4 ${location.pathname === '/' ? 'text-white' : 'text-gray-300'} hover:text-white`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link 
              to="/favorites" 
              className={`flex items-center gap-4 ${location.pathname === '/favorites' ? 'text-white' : 'text-gray-300'} hover:text-white`}
            >
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </Link>
            <Link 
              to="/playlists" 
              className={`flex items-center gap-4 ${location.pathname === '/playlists' ? 'text-white' : 'text-gray-300'} hover:text-white`}
            >
              <ListMusic className="h-5 w-5" />
              <span>Playlists</span>
            </Link>
            <a href="#" className="flex items-center gap-4 text-gray-300 hover:text-white">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="relative flex-1 max-w-2xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search for music..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => navigate('/signin')}
                className="px-4 py-2 rounded-full bg-transparent border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => navigate('/signup')}
                className="px-4 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors"
              >
                Sign Up
              </button>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;