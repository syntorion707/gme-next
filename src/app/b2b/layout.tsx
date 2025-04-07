import Sidebar from '@/components/account/sidebar';

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className='grid min-h-screen grid-cols-1 gap-16 pt-5 xl:grid-cols-[250px_1fr]'>
            <Sidebar />
            <section className='p-4'>{children}</section>
        </main>
    );
}
