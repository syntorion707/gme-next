import React, { useState } from 'react';

interface ReviewTypes {
    id: number;
    rating: number;
    title: string;
    content: string;
    date: string;
    name: string;
    image?: string;
}

type ReviewReaction = {
    id: number;
    likes: number;
    dislikes: number;
};

const ReviewGrid = () => {
    const reviews = [
        {
            id: 1,
            rating: 5,
            title: 'Love these straps.',
            content:
                'That title isn’t just a cliché. I actually love the straps. They are many times better than I had expected them to be. Are use them mainly for climbing poles. The key is to have faith in their ability. And for them not to be too slippery. They need to form a tight grip. And most importantly, I have to feel I trust them with my life. I truly do. And highly recommend them. Detroit Steeplejack.',
            date: '15/03/21',
            name: 'Bryan D.',
            image: 'https://cdn-yotpo-images-production.yotpo.com/Review/238569002/166402342/original.jpg?1615809933&format=webp'
        },
        {
            id: 2,
            rating: 5,
            title: 'slings',
            content: 'related slings for rigging',
            date: '06/02/23',
            name: 'Andrei S.'
        },
        {
            id: 3,
            rating: 5,
            title: 'Quick',
            content: 'Quick, respect, informative, cooperation, support, and professionalism.',
            date: '11/15/22',
            name: 'Kiet T.'
        },
        {
            id: 4,
            rating: 5,
            title: 'Perfect sling',
            content: 'good',
            date: '10/17/22',
            name: 'Ivan K.'
        },
        {
            id: 5,
            rating: 5,
            title: 'Tower climber',
            content: 'Great sling works well for multiple...',
            date: '11/20/21',
            name: 'John D.'
        }
    ];

    const [search, setSearch] = useState('');
    const [withMedia, setWithMedia] = useState(false);
    const [ratingFilter, setRatingFilter] = useState<number | null>(null);
    const [reviewReactions, setReviewReactions] = useState<ReviewReaction[]>([]);

    const filteredReviews = reviews.filter((r) => ratingFilter === null || r.rating === ratingFilter);

    const handleClearFilters = () => {
        setRatingFilter(0);
    };

    const handleLikes = (id: number) => {
        setReviewReactions((prev) => {
            const existing = prev.find((r) => r.id === id);
            if (existing) {
                return prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r));
            } else {
                return [...prev, { id, likes: 1, dislikes: 0 }];
            }
        });
    };

    const handleDisLikes = (id: number) => {
        setReviewReactions((prev) => {
            const existing = prev.find((r) => r.id === id);
            if (existing) {
                return prev.map((r) => (r.id === id ? { ...r, dislikes: r.dislikes + 1 } : r));
            } else {
                return [...prev, { id, likes: 0, dislikes: 1 }];
            }
        });
    };

    const getLikes = (id: number) => {
        const review = reviewReactions.find((r) => r.id === id);

        return review ? review.likes : 0;
    };

    const getDislikes = (id: number) => {
        const review = reviewReactions.find((r) => r.id === id);

        return review ? review.dislikes : 0;
    };

    return (
        <div className='mx-auto max-w-7xl p-4'>
            <div className='Relative mb-6 flex flex-wrap items-center gap-4'>
                <svg
                    className='absolute hidden h-4 w-4 text-gray-400 md:left-50 md:block lg:left-57'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'>
                    <circle cx='11' cy='11' r='8' />
                    <line x1='21' y1='21' x2='16.65' y2='16.65' />
                </svg>
                <input
                    type='text'
                    placeholder='Search reviews'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-40 rounded-full border px-4 py-2'
                />

                <RatingFilterDropdown selectedRating={ratingFilter} onChange={setRatingFilter} />
                <div className='flex w-40 cursor-pointer justify-between rounded-full border px-4 py-2'>
                    <p className='items-center'>With media</p>
                    <input
                        type='checkbox'
                        checked={withMedia}
                        onChange={() => setWithMedia(!withMedia)}
                        className='accent-green-500'
                    />
                </div>
            </div>

            <div>
                {filteredReviews.length > 0 ? (
                    <div className='grid grid-flow-col grid-rows-3 gap-4'>
                        {filteredReviews.map((review, index) => {
                            let gridClasses = '';
                            if (index === 0) gridClasses = 'row-span-3';
                            else if (index === 1) gridClasses = 'col-span-2';
                            else if (index === 2) gridClasses = 'row-span-2 col-span-2';
                            else gridClasses = 'col-span-1 row-span-1';

                            return (
                                <div key={review.id} className={`${gridClasses} rounded-lg bg-gray-100 p-4 shadow-sm`}>
                                    {review.image && (
                                        <img
                                            src={review.image}
                                            alt='review'
                                            className='mb-4 h-64 w-full rounded object-cover'
                                        />
                                    )}

                                    <div className='mb-2 flex items-start justify-between'>
                                        <div className='text-primary text-3xl'>{'★'.repeat(review.rating)}</div>
                                        <div className='text-sm text-gray-600'>{review.date}</div>
                                    </div>

                                    <h3 className='mb-1 text-xl font-semibold'>{review.title}</h3>
                                    <p className='mb-3 text-sm text-gray-700'>{review.content}</p>

                                    <div className='flex items-center gap-2 font-medium text-gray-800'>
                                        <p className='text-sm'>{review.name}</p>
                                        <p className='text-sm'>|</p>
                                        <p className='h-4 w-4 rounded-full bg-black text-center text-xs text-white'>
                                            ✔
                                        </p>
                                        <p className='text-xs'>Verified Buyer</p>
                                    </div>

                                    <div className='mt-3 flex items-center gap-4 text-sm text-gray-600'>
                                        Was this review helpful?
                                        <div key={review.id} className='flex gap-2 text-black'>
                                            <svg
                                                className='h-4 w-4 cursor-pointer text-black'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                stroke-width='2'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                onClick={() => handleLikes(review?.id)}>
                                                <path d='M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3' />
                                            </svg>{' '}
                                            {getLikes(review.id)}
                                            <svg
                                                className='h-4 w-4 cursor-pointer text-black'
                                                viewBox='0 0 24 24'
                                                fill='none'
                                                stroke='currentColor'
                                                stroke-width='2'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                onClick={() => handleDisLikes(review?.id)}>
                                                <path d='M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17' />
                                            </svg>{' '}
                                            {getDislikes(review.id)}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className='py-10'>
                        <div className='text-start'>
                            <p className='mb-2 flex text-sm text-gray-800'>
                                We found <strong className='px-1'> 0 matching reviews.</strong>
                                <button onClick={handleClearFilters} className='font-medium text-black underline'>
                                    Clear filters
                                </button>
                            </p>
                        </div>
                        <div className='text-center'>
                            <div className='mt-16'>
                                <h2 className='mb-2 text-lg font-semibold text-gray-900'>No matching reviews</h2>
                                <p className='mb-6 text-sm text-gray-600'>Try clearing or changing the filters.</p>
                                <button
                                    onClick={handleClearFilters}
                                    className='rounded-full bg-black px-6 py-2 text-sm font-semibold text-white'>
                                    Clear filters
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewGrid;

export const RatingFilterDropdown = ({
    selectedRating,
    onChange
}: {
    selectedRating: number | null;
    onChange: (rating: number | null) => void;
}) => {
    const [open, setOpen] = useState(false);
    const ratingOptions = [5, 4, 3, 2, 1];

    return (
        <div className='relative inline-block text-left'>
            <div
                className='flex w-40 cursor-pointer justify-between rounded-full border px-4 py-2'
                onClick={() => setOpen(!open)}>
                <button className='flex items-center gap-2'>Rating</button>
                {open ? (
                    <svg
                        className='h-6 w-6 cursor-pointer text-black'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'>
                        <polyline points='6 9 12 15 18 9' />
                    </svg>
                ) : (
                    <svg
                        className='h-6 w-6 cursor-pointer text-black'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'>
                        <polyline points='18 15 12 9 6 15' />
                    </svg>
                )}
            </div>
            {open && (
                <div className='absolute z-10 mt-2 w-48 rounded-lg bg-white p-2 shadow-md'>
                    <div
                        onClick={() => {
                            onChange(null);
                            setOpen(false);
                        }}
                        className={`flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-gray-100 ${
                            selectedRating === null ? 'bg-red-100' : ''
                        }`}>
                        <span>All ratings</span>
                        {selectedRating === null && <span className='text-red-500'>✓</span>}
                    </div>

                    {ratingOptions.map((rating) => (
                        <div
                            key={rating}
                            onClick={() => {
                                onChange(rating);
                                setOpen(false);
                            }}
                            className={`flex cursor-pointer items-center justify-between px-3 py-2 hover:bg-red-100 ${selectedRating === rating ? 'bg-red-100' : ''}`}>
                            <div className='text-primary flex'>
                                {Array.from({ length: rating }, (_, i) => (
                                    <svg
                                        key={i}
                                        className='h-5 w-5 text-red-500'
                                        viewBox='0 0 24 24'
                                        fill='currentColor'
                                        stroke='currentColor'
                                        stroke-width='2'
                                        stroke-linecap='round'
                                        stroke-linejoin='round'>
                                        <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                                    </svg>
                                ))}
                            </div>
                            {selectedRating === rating && <span className='text-red-500'>✓</span>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
