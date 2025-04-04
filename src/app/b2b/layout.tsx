import Sidebar from '@/components/account/sidebar';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='grid grid-cols-[25%_1fr] py-4'>
            <Sidebar />
            {children}
        </main>
    );
}
