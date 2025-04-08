import React from 'react';

interface Video {
    id: string;
}

interface FeaturedVideosProps {
    videos: Video[];
}

export const FeaturedVideos: React.FC<FeaturedVideosProps> = ({ videos }) => {
    return (
        <div className='mt-8 flex flex-col items-center px-2 py-4 md:mt-10 md:px-4 md:py-6'>
            <span className='mb-4 w-full border-b-2 border-[#ce181e] p-2 text-center text-2xl font-bold uppercase md:mb-8 md:text-3xl'>
                Featured <span className='text-[#ce181e]'>Videos</span>
            </span>
            <div className='grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3'>
                {videos.map((video, index) => (
                    <div key={index} className='aspect-video w-full'>
                        <iframe
                            className='h-full w-full shadow-lg'
                            src={`https://www.youtube.com/embed/${video.id}`}
                            title={`YouTube video ${index + 1}`}
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
