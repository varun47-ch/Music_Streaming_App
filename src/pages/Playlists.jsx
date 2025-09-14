import React from 'react';
import { ListMusic, Plus } from 'lucide-react';

const playlists = [
  {
    id: 1,
    name: "My Mix",
    songCount: 12,
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    name: "Road Trip",
    songCount: 25,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
  },
];

function Playlists() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <ListMusic className="h-8 w-8 text-pink-500" />
          <h1 className="text-3xl font-bold">Your Playlists</h1>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-pink-500 rounded-full hover:bg-pink-600 transition-colors">
          <Plus className="h-5 w-5" />
          Create Playlist
        </button>
      </div>
      
      <div className="grid grid-cols-4 gap-6">
        {playlists.map((playlist) => (
          <div key={playlist.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-colors cursor-pointer group">
            <div className="relative aspect-square">
              <img src={playlist.cover} alt={playlist.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-pink-500 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-all">
                  <ListMusic className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold">{playlist.name}</h3>
              <p className="text-sm text-gray-400">{playlist.songCount} songs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playlists;