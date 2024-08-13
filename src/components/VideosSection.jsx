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

  const VideoThumbnail = ({ video, isMain }) => (
    <div 
      className={`${isMain ? 'md:col-span-2' : ''} aspect-video bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer relative group`}
      onClick={() => openVideoModal(video)}
    >
      <img src={getYouTubeThumbnail(video.youtubeId)} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex flex-col items-center justify-center">
        {/* Centered play button */}
        <div className={`${isMain ? 'w-20 h-20' : 'w-16 h-16'} bg-white bg-opacity-80 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
          </svg>
        </div>
        <p className="text-white font-semibold text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {video.title}
        </p>
      </div>
    </div>
  );

  return (
    <section className="py-12 px-4 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center brand-color">Featured Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Main Video */}
          <VideoThumbnail video={videos[0]} isMain={true} />

          {/* Secondary Videos */}
          <div className="md:col-span-1 grid grid-rows-3 gap-4">
            {videos.slice(1).map((video) => (
              <VideoThumbnail key={video.id} video={video} isMain={false} />
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