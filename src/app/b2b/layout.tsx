import { B2BSidebar } from '@/components/gme/b2b';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='grid grid-cols-[25%_1fr] py-4'>
            <B2BSidebar />
            {children}
        </main>
    );
}
