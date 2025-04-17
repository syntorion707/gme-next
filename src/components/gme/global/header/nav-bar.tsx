const Navbar = () => {
    const menuItems = [
        { name: 'Featured Brands', href: '/featured-brands' },
        { name: 'Fall Protection', href: '/fall-protection' },
        { name: 'PPE & Work Wear', href: '/ppe-workwear' },
        { name: 'Lifting & Rigging', href: '/lifting-rigging' },
        { name: 'Rope', href: '/rope' },
        { name: 'Rescue', href: '/rescue' },
        { name: 'First Aid', href: '/first-aid' },
        { name: 'Tools', href: '/tools' },
        { name: 'Bags, Buckets, & Storage', href: '/storage' },
        { name: 'Devices & Testing', href: '/devices-testing' }
    ];

    return (
        <nav className='w-full overflow-hidden border-t-2 border-red-700 bg-black'>
            <div className='mr-20 ml-20'>
                <ul className='hidden min-w-0 flex-1 items-center justify-between overflow-x-auto px-6 py-2 md:flex'>
                    {menuItems.map((item, index) => (
                        <li key={index} className='whitespace-nowrap'>
                            <a
                                href={item.href}
                                className={`${
                                    index === 0 ? 'font-semibold text-red-700' : 'text-white'
                                } transition-colors duration-200 hover:text-red-500`}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
