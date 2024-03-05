'use client';

import { useState } from 'react';

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <>
      {bannerOpen && (
        <div className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-50">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-4 md:rounded-lg shadow-lg flex justify-between items-center">
            <div className="flex flex-col md:flex-row md:items-center">
              <strong className="text-lg md:text-xl">Join us on the journey!</strong>
              <div className="mt-2 md:mt-0 md:ml-4 text-sm md:text-base">
                Follow us on <a href="https://tiktok.com/@yourusername" target="_blank" rel="noreferrer" className="font-bold underline">TikTok</a> and <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer" className="font-bold underline text-yellow-300">Instagram</a> for the latest updates!
              </div>
            </div>
            <button onClick={() => setBannerOpen(false)} className="ml-3 rounded-md p-1.5 bg-white bg-opacity-20 hover:bg-opacity-30">
              <span className="sr-only">Close banner</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
