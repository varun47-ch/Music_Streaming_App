import React from 'react';
import { Music2 } from 'lucide-react';

const songs = [
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
  {
    id: 3,
    title: "Mellamma",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Pottu Thala",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Zami",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&auto=format&fit=crop&q=60",
  },
];

const genres = [
  { id: 1, name: "Pop", icon: "🎵" },
  { id: 2, name: "Classical", icon: "🎻" },
  { id: 3, name: "Bass", icon: "🎸" },
  { id: 4, name: "Hip-Hop", icon: "🎤" },
  { id: 5, name: "Rap", icon: "🎧" },
];

function Home() {
  return (
    <>
      {/* Songs Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Songs</h2>
        <div className="grid grid-cols-5 gap-6">
          {songs.map((song) => (
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
                <h3 className="font-semibold">Song {song.id}</h3>
                <p className="text-sm text-gray-400">{song.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Genre Section */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Genre</h2>
        <div className="grid grid-cols-5 gap-6">
          {genres.map((genre) => (
            <div
              key={genre.id}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors cursor-pointer text-center"
            >
              <div className="text-4xl mb-2">{genre.icon}</div>
              <h3 className="font-semibold">{genre.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;