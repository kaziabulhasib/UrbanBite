// Home.jsx
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Home() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/food`, { withCredentials: true })
      .then((response) => {
        console.log("API response:", response.data);

        // Adjust this based on actual API shape
        // If response looks like { food: [...] }
        const foodArray = response.data?.foodItems || [];

        setVideos(foodArray);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching videos:", err);
        setLoading(false);
        setVideos([]); // safe fallback
      });
  }, [baseUrl]);

  if (loading) {
    return (
      <div className='h-screen flex items-center justify-center bg-black text-white'>
        Loading videos...
      </div>
    );
  }

  return (
    <div className='h-screen w-full overflow-y-scroll snap-y snap-mandatory'>
      {Array.isArray(videos) && videos.length > 0 ? (
        videos.map((video) => (
          <div
            key={video?._id}
            className='relative h-screen w-full flex-shrink-0 snap-start'>
            {/* Background Video */}
            <video
              src={video?.video}
              className='h-full w-full object-cover'
              autoPlay
              loop
              muted
            />

            {/* Overlay for description + button */}
            <div className='absolute bottom-8 left-0 w-full px-4 flex flex-col items-center text-center'>
              <p className='text-white text-lg mb-2 line-clamp-2'>
                {video?.description}
              </p>
              <button className='bg-blue-600 text-white px-6 py-2 rounded-2xl shadow-md hover:bg-blue-700 transition'>
                Visit Store
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className='h-screen flex items-center justify-center text-white bg-black'>
          No videos available
        </div>
      )}
    </div>
  );
}
