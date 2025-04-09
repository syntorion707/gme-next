'use client';

import React, { useEffect, useRef } from 'react';

type VideoModalProps = {
    showVideoModel: boolean;
    setShowVideoModel: (value: boolean) => void;
};

const VideoModal = ({ showVideoModel, setShowVideoModel }: VideoModalProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setShowVideoModel(false);
            }
        }

        if (showVideoModel) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showVideoModel]);

    if (!showVideoModel) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-brightness-90'>
            <div
                ref={modalRef}
                className='relative h-[450px] w-[800px] overflow-hidden rounded-lg border-4 border-amber-50 bg-white shadow-xl'>
                {/* CLOSE BUTTON */}
                <button
                    onClick={() => setShowVideoModel(false)}
                    className='absolute top-2 right-2 z-10 text-2xl font-bold text-gray-600 hover:text-black'
                    aria-label='Close'>
                    &times;
                </button>

                {/* VIDEO EMBED */}
                <iframe
                    className='h-full w-full'
                    src='https://www.youtube.com/embed/NpMcxtvHwlM'
                    title='YouTube Video'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            </div>
        </div>
    );
};

export default VideoModal;
