import Image from 'next/image';
import Link from 'next/link';

interface NavLink {
    name: string;
    href: string;
    icon: string;
}

export default function NavLinks({ navLinks, isMobile = false }: { navLinks: NavLink[]; isMobile?: boolean }) {
    const filteredLinks = isMobile
        ? navLinks.filter((link) => link.name === 'Sign in' || link.name === 'Cart' || link.name === 'Quotes')
        : navLinks;

    return (
        <div
            className={`items-center ${isMobile ? 'flex gap-6 lg:hidden' : 'mr-20 hidden min-w-[180px] justify-end text-sm lg:flex'}`}>
            {filteredLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={isMobile ? 'flex items-center' : 'mr-4 flex flex-col items-center'}>
                    {link.icon && (
                        <Image
                            src={link.icon}
                            alt={link.name}
                            width={25}
                            height={25}
                            className='h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7'
                        />
                    )}
                    {!isMobile && <span>{link.name}</span>}
                </Link>
            ))}
        </div>
    );
}
