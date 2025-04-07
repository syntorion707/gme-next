import Image from 'next/image';

interface Brand {
    img: string;
    alt: string;
}

interface TrustedBrandsProps {
    brands: Brand[];
}

export const TrustedBrands: React.FC<TrustedBrandsProps> = ({ brands }) => {
    const randomBrands = [...brands].sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <div className='mt-8 flex flex-col items-center bg-white py-4 md:mt-10 md:py-6'>
            <span className='mb-4 w-full border-b-2 border-[#ce181e] p-2 text-center text-2xl font-bold uppercase md:mb-8 md:text-3xl'>
                Trusted <span className='text-[#ce181e]'>Brands</span>
            </span>

            <div className='w-full'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6'>
                    {randomBrands.map((brand, index) => (
                        <div
                            key={index}
                            className='aspect-video w-full overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-xl'>
                            <div className='relative h-full w-full'>
                                <Image
                                    src={brand.img}
                                    alt={brand.alt}
                                    fill
                                    className='object-cover'
                                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
