import Image from 'next/image';
import Link from 'next/link';
import { type NavLink, getVisibilityClass } from '@/utils/constant';

export default function NavLinks({ navLinks }: { navLinks: NavLink[] }) {
    return (
        <div className='flex items-center gap-3 text-xs lg:mr-15 xl:-ml-4'>
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
