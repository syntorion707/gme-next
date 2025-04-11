import Link from 'next/link';

export default function LogoWithSidebarToggle({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className='ml-4 flex items-center gap-4 overflow-hidden lg:ml-17 lg:min-w-[160px]'>
            <Link href='/'>
                <img
                    src='https://www.gmesupply.com/images/logos/gme-supply-white-alt.png'
                    alt='GME Supply Logo'
                    className='h-[60px] w-[160px] cursor-pointer object-contain sm:h-[30px] sm:w-[120px] md:h-[30px] md:w-[120px] lg:h-[15px] lg:w-[54px] xl:h-[25px] xl:w-[100px] 2xl:h-[60px] 2xl:w-[250px]'
                />
            </Link>
            <div className='ml-3 flex flex-col items-start space-y-2 md:ml-4'>
                <button
                    className='flex flex-col items-center text-white focus:outline-none'
                    role='link'
                    aria-haspopup='dialog'
                    aria-controls='gmeCategoriesMenu'
                    id='iconBar'
                    tabIndex={0}
                    onClick={(e) => {
                        e.preventDefault();
                        toggleSidebar();
                    }}>
                    <i className='fas fa-bars text-[22px] md:text-[25px]' />
                    <span className='hidden text-sm font-bold tracking-wider whitespace-nowrap md:inline'>
                        Shop All
                    </span>
                </button>
            </div>
        </div>
    );
}
