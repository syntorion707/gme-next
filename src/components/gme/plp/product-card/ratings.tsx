import React from 'react';

interface ratingsProps {
    product: ProductType;
}

const Ratings: React.FC<ratingsProps> = ({ product }) => {
    return (
        <div className='flex items-center gap-1'>
            {[...Array(5)].map((_, i) => {
                const rating = product.rating || 0;
                const starValue = i + 1;

                return (
                    <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='12'
                        height='12'
                        fill='currentColor'
                        className={`bi bi-star-fill ${
                            starValue <= rating
                                ? 'text-primary'
                                : starValue - 0.5 <= rating
                                  ? 'text-primary'
                                  : 'text-secondary'
                        }`}
                        viewBox='0 0 16 16'>
                        {starValue - 0.5 <= rating && starValue > rating ? (
                            <path d='M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z' />
                        ) : (
                            <path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z' />
                        )}
                    </svg>
                );
            })}
            <p className='text-secondary text-xs'>(5)</p>
        </div>
    );
};

export default Ratings;
