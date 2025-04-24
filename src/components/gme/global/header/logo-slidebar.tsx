import Link from 'next/link';
import { SHOP_ALL } from '@/utils/constant';

export default function LogoWithSidebarToggle({ toggleSidebar }: { toggleSidebar: () => void }) {
    return (
        <div className='ml-4 flex items-center gap-4 overflow-hidden lg:ml-17 lg:min-w-[160px]'>
            <Link href='/'>
                <img
                    src='https://www.gmesupply.com/images/logos/gme-supply-white-alt.png'
                    alt='GME Supply Logo'
                    className='cursor-pointer object-contain min-[320px]:h-[29px] min-[320px]:w-[118px] min-[375px]:h-[29px] min-[375px]:w-[118px] min-[425px]:h-[29px] min-[425px]:w-[118px] min-[768px]:h-[29px] min-[768px]:w-[118px] min-[1024px]:h-[24px] min-[1024px]:w-[54px] min-[1440px]:h-[24px] min-[1440px]:w-[100px] min-[1920px]:h-[24px] min-[1920px]:w-[250px]'
                />
            </Link>

            <div className='flex flex-col items-start gap-10 space-y-2'>
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
                        {SHOP_ALL}
                    </span>
                </button>
            </div>
        </div>
    );
}
