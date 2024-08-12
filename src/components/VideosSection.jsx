import React, { useState } from 'react';

const VideosSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    { id: 1, youtubeId: '3zhx4gLiOAw', title: 'Local Law 152 Requirements' },
    { id: 2, youtubeId: 'fj5m4qRf8xs', title: 'Fire Pump Performance Test'},
    { id: 3, youtubeId: 'K0V0F_7zvSY', title: 'Fix Dirty Brown Water' },
    { id: 4, youtubeId: 'EF8jwvLz7A8', title: 'Different way to Cut Steel and Cast Large Iron Piping' },
  ];

  const getYouTubeThumbnail = (youtubeId) => {
    return `https://img.youtube.com/vi/${youtubeId}/0.jpg`;
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Main Video */}
          <div className="md:col-span-2 aspect-video bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer relative" onClick={() => openVideoModal(videos[0])}>
            <img src={getYouTubeThumbnail(videos[0].youtubeId)} alt={videos[0].title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
              </div>
            </div>
          </div>

          {/* Secondary Videos */}
          <div className="md:col-span-1 grid grid-rows-3 gap-4">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="aspect-video bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer relative" onClick={() => openVideoModal(video)}>
                <img src={getYouTubeThumbnail(video.youtubeId)} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-white border-b-6 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Text Box */}
          <div className="md:col-span-3 bg-gray-800 rounded-lg shadow-lg p-6 flex items-center justify-center">
            <p className="text-lg text-center font-semibold">
              Watch our videos to learn more about our expert services and home maintenance tips!
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl aspect-video">
            <button 
              onClick={closeVideoModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 w-8 h-8"
            >
              <span className="sr-only">Close</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <iframe 
              src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1`}
              title={selectedVideo.title}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideosSection;