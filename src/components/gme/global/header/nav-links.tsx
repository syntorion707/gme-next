import Image from 'next/image';
import Link from 'next/link';
import { CART, QUOTE, SIGN_IN } from '@/utils/constant';

interface NavLink {
    name: string;
    href: string;
    icon: string;
}

export default function NavLinks({ navLinks }: { navLinks: NavLink[] }) {
    const getVisibilityClass = (name: string) => {
        switch (name) {
            case SIGN_IN:
            case CART:
                return 'flex';
            case QUOTE:
                return 'hidden md:flex';
            default:
                return 'hidden lg:flex';
        }
    };

    return (
        <div className='flex items-center gap-3 overflow-hidden text-xs lg:mr-15 lg:gap-x-3 xl:-ml-4'>
            {navLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.href}
                    className={`${getVisibilityClass(link.name)} flex-col items-center`}>
                    {link.icon && <Image src={link.icon} alt={link.name} width={24} height={24} className='h-6 w-6' />}
                    <span className='mt-1 hidden md:inline'>{link.name}</span>
                </Link>
            ))}
        </div>
    );
}
