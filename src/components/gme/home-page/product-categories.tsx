import Image from 'next/image';
import Link from 'next/link';

interface Category {
    name: string;
    img: string;
}

interface ProductCategoriesProps {
    categories: Category[];
}

export const ProductCategories: React.FC<ProductCategoriesProps> = ({ categories }) => {
    return (
        <div className=''>
            <div className='bg-white shadow-[0_4px_12px_rgba(0,0,0,0.15),_0_6px_20px_rgba(0,0,0,0.12)] md:p-4'>
                <div className='grid grid-cols-2 gap-2 text-center sm:grid-cols-2 md:gap-4 lg:grid-cols-4'>
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href='#'
                            className='group flex flex-col items-center p-2 no-underline transition-colors duration-200 md:p-4'>
                            <div className='relative mb-2 w-full'>
                                <span className='block pb-2 text-center text-lg font-semibold text-gray-800 transition-colors md:text-3xl'>
                                    {category.name}
                                </span>
                                <span
                                    className='absolute bottom-0 left-1/2 h-0.5 w-11/12 -translate-x-1/2 bg-gradient-to-r from-[rgba(233,148,148,0)] via-[rgba(255,0,0,0.9)] to-[rgba(233,148,148,0)]'
                                    style={{ lineHeight: '1px' }}>
                                    &nbsp;
                                </span>
                            </div>
                            <div className='flex h-full w-full justify-center'>
                                <div className='relative h-[150px] w-full md:h-[300px]'>
                                    <Image
                                        src={category.img}
                                        alt={category.name}
                                        fill
                                        className='object-contain transition-transform duration-200'
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
