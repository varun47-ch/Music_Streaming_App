import React from 'react';
import { Music2, Heart } from 'lucide-react';

const favoriteSongs = [
  {
    id: 1,
    title: "Kabira",
    cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Samayama",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60",
  },
];

function Favorites() {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Heart className="h-8 w-8 text-pink-500" />
        <h1 className="text-3xl font-bold">Your Favorites</h1>
      </div>
      
      <div className="grid grid-cols-5 gap-6">
        {favoriteSongs.map((song) => (
          <div key={song.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer group">
            <div className="relative aspect-square">
              <img src={song.cover} alt={song.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-pink-500 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all">
                  <Music2 className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{song.title}</h3>
              <p className="text-sm text-gray-400">Added to favorites</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Favorites;