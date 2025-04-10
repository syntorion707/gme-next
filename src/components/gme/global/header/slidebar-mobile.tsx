import Image from 'next/image';
import Link from 'next/link';

const categories = [
    {
        name: 'Tower Climbing Gear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90005_A.jpg',
        href: '/tower-climbing-gear'
    },
    {
        name: 'Utility',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/376450_cat_lading_img.jpg',
        href: '/utility'
    },
    {
        name: 'Solar Industry Gear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90025_A_A.jpg',
        href: '/solar-industry-gear'
    },
    {
        name: 'Wind Technician Gear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90025_A_A.jpg',
        href: '/wind-technician-gear'
    },
    {
        name: 'Fiber',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-90020.jpg',
        href: '/fiber'
    },
    {
        name: 'Cable & Satellite',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19200_cat_lading_img.jpg',
        href: '/cable-satellite'
    },
    {
        name: 'Construction (Aerial & Burial)',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19150_cat_lading_img.jpg',
        href: '/construction'
    },
    {
        name: 'Telco & Structured Wiring',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19300_cat_lading_img.jpg',
        href: '/telco'
    },
    {
        name: 'Fall Protection',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/19350_cat_lading_img.jpg',
        href: '/fall-protection'
    },
    {
        name: 'PPE & Work Wear',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/12540_cat_lading_img.jpg',
        href: '/ppe-workwear'
    },
    {
        name: 'Rope',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/12473_cat_lading_img.jpg',
        href: '/rope'
    },
    {
        name: 'Rescue',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-9025_A.jpg',
        href: '/rescue'
    },
    {
        name: 'Lifting & Rigging',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/C-HB-THERNKITS_A.jpg',
        href: '/lifting-rigging'
    },
    {
        name: 'Installation Materials & Consumables',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/63716_cat_lading_img_A.jpg',
        href: '/installation-materials'
    },
    {
        name: 'Tools',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/495-2998-23_A_A.jpg',
        href: '/tools'
    },
    {
        name: 'Ladders',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/ladders.jpg',
        href: '/ladders'
    },
    {
        name: 'Bags, Buckets, & Storage',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-5105_A.jpg',
        href: '/bags-storage'
    },
    {
        name: 'Power and Light',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/495-2144-20.jpg',
        href: '/power-light'
    },
    {
        name: 'Device & Testing',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/FS-FS60_A_A.jpg',
        href: '/device-testing'
    },
    {
        name: 'Signage',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/GM-2000_A.jpg',
        href: '/signage'
    },
    {
        name: 'Safety & First Aid',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/ED-13418.jpg',
        href: '/safety-first-aid'
    },
    {
        name: 'Tree Care',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/PZ-C069AA00.jpg',
        href: '/tree-care'
    },
    {
        name: 'Deal Zone',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/Deal-Zone-Graphic.jpg',
        href: '/deal-zone'
    },
    {
        name: 'More',
        img: 'https://www.gmesupply.com/images/shop_by_category/Category_Buttons/13610_cat_lading_img.jpg',
        href: '/more'
    }
];

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
    return (
        <>
            <div
                className={`fixed top-0 left-0 z-50 h-full w-[350px] transform overflow-y-auto bg-white px-4 pt-6 pb-10 shadow-lg transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}>
                <div className='mb-4 border-b-2 border-red-600 pb-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-4'>
                            <h2 className='text-[16px] font-semibold text-gray-800'>Shop All Categories</h2>
                        </div>
                        <button onClick={toggleSidebar} className='text-lg text-gray-600'>
                            ✖
                        </button>
                    </div>
                </div>

                <ul className='flex flex-col gap-[6px]'>
                    {categories.map((cat, idx) => (
                        <li key={idx}>
                            <Link
                                href={cat.href}
                                className='group flex items-center justify-between rounded px-2 py-[6px] transition-all duration-200'>
                                <div className='flex items-center gap-3'>
                                    <Image
                                        src={cat.img}
                                        alt={cat.name}
                                        width={40}
                                        height={40}
                                        className='rounded-sm object-contain'
                                    />
                                    <span className='text-[14px] font-medium text-black group-hover:text-red-600'>
                                        {cat.name}
                                    </span>
                                </div>
                                <span className='text-[16px] text-gray-500 group-hover:text-red-600'>&#10140;</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
