import Link from 'next/link';

export default function LogoWithSidebarToggle({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className='ml-4 flex min-w-[160px] items-center gap-4 lg:ml-20'>
            <Link href='/'>
                <img
                    src='https://www.gmesupply.com/images/logos/gme-supply-white-alt.png'
                    alt='GME Supply Logo'
                    width='60'
                    height='40'
                    className='w-30 cursor-pointer lg:w-100'
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
