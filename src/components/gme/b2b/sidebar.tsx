'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

const Sidebar = () => {
    const router = usePathname();
    const proMenuItems = [
        { href: '/b2b', label: 'My Dashboard', isDashboard: true },
        { href: '/b2b/addresses', label: 'Addresses', isAddress: true },
        { href: '/b2b/orderHistory', label: 'Order History', isOrderHistory: true },
        { href: '/b2b/groupPurchaseHistory', label: 'Group Purchase History', isGroupHistory: true },
        { href: '/b2b/Invoices', label: 'View & Pay Invoices', isView: true },
        { href: '/b2b/recentPayments', label: 'Recent Payments', isRecentPayment: true },
        { href: '/b2b/gearList', label: 'Gear List', isGearList: true },
        { href: '/b2b/marketplace', label: 'Marketplace', isMarketPlace: true },
        { href: '/b2b/recalibration', label: 'Recalibration Tracking', isRecalibration: true },
        { href: '/b2b/reports', label: 'My Reports', isMyReports: true },
        { href: '/b2b/savedCarts', label: 'My saved carts', isMySavedCarts: true },
        { href: '/b2b/quotes', label: 'Quotes', isQuotes: true }
    ];

    const adminMenuItems = [
        { href: '/b2b/manageUser', label: 'Manage User', isManageUser: true },
        { href: '/b2b/alerts', label: 'Alerts', isAlerts: true },
        { href: '/b2b/managePermissions', label: 'Manage Permissions', isManagePermissions: true },
        { href: '/b2b/customerPaymentMethods', label: 'My Payment Methods', isCustomerPaymentMethods: true },
        { href: '/b2b/manageFiles', label: 'Manage Files', isManageFiles: true },
        { href: '/b2b/shippingAccounts', label: 'Shipping Accounts', isShippingAccounts: true },
        { href: '/b2b/groups', label: 'Groups', isGroups: true },
        { href: '/b2b/taxExempt', label: 'Tax Exempt Documents', isTaxExempt: true }
    ];

    return (
        <div className='flex flex-col space-y-6 font-sans md:py-5 xl:py-5'>
            {/* Your Pro Account Menu */}
            <div>
                <input type='checkbox' id='pro-menu-toggle' className='peer/pro-menu hidden' defaultChecked />
                <label
                    htmlFor='pro-menu-toggle'
                    className='relative block cursor-pointer border-t-3 border-red-600 bg-black p-3 text-white'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold'>Your Pro Account Menu</h3>
                    </div>
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 transform text-white md:hidden'>
                        <span className='peer-checked/pro-menu:hidden'>+</span>
                        <span className='hidden peer-checked/pro-menu:inline'>−</span>
                    </div>
                </label>

                <div className='top-full right-0 left-0 z-10 hidden border border-gray-200 bg-[#ededef] p-4 shadow-md peer-checked/pro-menu:block'>
                    <div className='mb-4'>
                        <p className='text-2xl font-bold'>DAN POBST (203121)</p>
                        <img
                            src='https://gmeplay.gearcor.com/logo/gmeplay.jpg'
                            alt='user profile'
                            className='h-16 w-16 rounded-full border-2 border-gray-200 object-contain'
                        />
                    </div>
                    <ul className='space-y-3 text-sm font-normal text-black'>
                        {proMenuItems?.map((proMenuItem, i) => (
                            <li key={i}>
                                <Link
                                    href={proMenuItem?.href}
                                    className={
                                        router === proMenuItem.href
                                            ? `hover:text-primary flex items-center gap-2 font-semibold`
                                            : `hover:text-primary flex items-center gap-2`
                                    }>
                                    {proMenuItem?.label}
                                    {proMenuItem?.isDashboard && (
                                        <span className='bg-primary rounded-full px-2 font-semibold text-white'>3</span>
                                    )}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ADMIN Menu */}
            <div>
                <input type='checkbox' id='admin-menu-toggle' className='peer/admin-menu hidden' defaultChecked />
                <label
                    htmlFor='admin-menu-toggle'
                    className='relative block cursor-pointer border-t-3 border-red-600 bg-black p-3 text-white'>
                    <div className='flex justify-center'>
                        <h3 className='font-bold'>ADMIN</h3>
                    </div>
                    <div className='absolute top-1/2 right-3 -translate-y-1/2 transform text-white md:hidden'>
                        <span className='peer-checked/admin-menu:hidden'>+</span>
                        <span className='hidden peer-checked/admin-menu:inline'>−</span>
                    </div>
                </label>

                <div className='hidden border border-gray-200 bg-[#ededef] p-4 peer-checked/admin-menu:block'>
                    <ul className='space-y-3 text-sm font-normal'>
                        {adminMenuItems?.map((adminMenuItem, i) => (
                            <li key={i}>
                                <Link
                                    href={adminMenuItem?.href}
                                    className={
                                        router === adminMenuItem.href
                                            ? `hover:text-primary flex items-center gap-2 font-semibold`
                                            : `hover:text-primary flex items-center gap-2`
                                    }>
                                    {adminMenuItem?.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
