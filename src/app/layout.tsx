import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import AnnouncementBar from '@/components/announcement-bar';
import CopyRight from '@/components/footer/copy-right';
import FooterNavigationWrapper from '@/components/footer/footer-navigation';
import Newsletter from '@/components/footer/news-letter';
import Header from '@/components/header';
import { BodyContent } from '@/components/layouts';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

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
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AnnouncementBar />
                <Header />
                <BodyContent>{children}</BodyContent>
                <footer className='flex-col'>
                    <Newsletter />
                    <FooterNavigationWrapper />
                    <CopyRight />
                </footer>
            </body>
        </html>
    );
}
