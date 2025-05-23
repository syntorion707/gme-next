import { DESKTOP, MOBILE } from '@/utils/constant';

interface SearchVariant {
    variant?: string;
}

export default function SearchBar({ variant = DESKTOP }: SearchVariant) {
    const isMobile = variant === MOBILE;

    return (
        <div
            className={
                isMobile ? 'bg-black px-4 py-2 lg:hidden' : 'hidden w-full justify-center overflow-hidden lg:flex'
            }>
            <div className='flex w-full justify-center'>
                {isMobile ? (
                    <div className='relative h-[44px] w-[288px] overflow-hidden border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-500 shadow-sm outline-none min-[375px]:w-[337px] min-[425px]:w-[382px] min-[768px]:w-[545px]'>
                        <div className='absolute top-1/2 left-3 -translate-y-1/2'>
                            <svg className='h-5 w-5 text-blue-600' viewBox='0 0 24 24' fill='currentColor'>
                                <path d='M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z' />
                            </svg>
                        </div>
                        <input
                            type='search'
                            placeholder='Search for products'
                            className='h-full w-full border-none bg-white pr-4 pl-10 text-sm text-gray-700 placeholder-gray-500 outline-none'
                        />
                    </div>
                ) : (
                    <div className='flex items-center'>
                        <div className='xs:w-[337px] h-[44px] overflow-hidden border border-gray-300 bg-white text-sm text-gray-700 placeholder-gray-500 shadow-sm outline-none min-[320px]:w-[288px] sm:w-[383px] md:w-[546px] lg:w-[343px] xl:w-[670px] 2xl:w-[670px]'>
                            <input
                                type='search'
                                placeholder='Search for products'
                                className='h-full w-full px-4 outline-none'
                            />
                        </div>
                        <div className='bg-primary flex h-[44px] w-[50px] items-center justify-center'>
                            <button type='submit'>
                                <svg className='h-6 w-6 text-white' viewBox='0 0 24 24' fill='currentColor'>
                                    <path d='M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
