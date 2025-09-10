// Home.jsx
import React from "react";

const videos = [
  {
    id: 1,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "This is an amazing product that you will love. Check it out now in our store!",
  },
  {
    id: 2,
    src: "https://www.w3schools.com/html/movie.mp4",
    description:
      "Limited time offer! Grab the best deal available today from our exclusive collection.",
  },
  {
    id: 3,
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    description:
      "Upgrade your lifestyle with this stylish and modern product that suits everyone.",
  },
];

export default function Home() {
  return (
    <div className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'>
      {videos.map((video) => (
        <div
          key={video.id}
          className='relative h-screen w-full flex-shrink-0 snap-start'>
          {/* Background Video */}
          <video
            src={video.src}
            className='h-full w-full object-cover'
            autoPlay
            loop
            muted
          />

          {/* Overlay for description + button */}
          <div className='absolute bottom-8 left-0 w-full px-4 flex flex-col items-center text-center'>
            <p className='text-white text-lg mb-2 line-clamp-2'>
              {video.description}
            </p>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition'>
              Visit Store
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
