import type { Metadata } from 'next';
import { AnnouncementBar, Footer, Header } from '@/components/gme/global';
import { BodyContent } from '@/components/layouts';
import { Providers } from '@/providers';
import './globals.css';

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`antialiased`}>
                <Providers>
                    <AnnouncementBar />
                    <Header />
                    <BodyContent>{children}</BodyContent>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
