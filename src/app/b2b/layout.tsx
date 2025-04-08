import { B2BSidebar } from '@/components/gme/b2b';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='grid min-h-screen grid-cols-1 pt-5 md:gap-16 xl:grid-cols-[250px_1fr]'>
            <B2BSidebar />
            <section className='p-4'>{children}</section>
        </main>
    );
}
