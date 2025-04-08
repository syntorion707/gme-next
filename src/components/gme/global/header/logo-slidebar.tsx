import Link from 'next/link';

export default function LogoWithSidebarToggle({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className='ml-20 flex min-w-[160px] items-center gap-4'>
            <Link href='/'>
                <img
                    src='https://www.gmesupply.com/images/logos/gme-web-white-alt.png'
                    alt='GME Supply Logo'
                    width='60'
                    height='40'
                    className='w-28 cursor-pointer md:w-60'
                />
            </Link>

            <div className='ml-4 flex flex-col items-start space-y-2'>
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
                    <i className='fas fa-bars text-[25px]' />
                    <span className='hidden text-sm font-bold tracking-wider whitespace-nowrap md:inline'>
                        Shop All
                    </span>
                </button>
            </div>
        </div>
    );
}
