import { cn } from '@/utils/tw';

const FullWidthLayout = ({
    children,
    bg = 'bg-[#ececec]'
}: Readonly<{
    children: React.ReactNode;
    bg?: string;
}>) => <div className={cn('mx-[-5.5%] w-[calc(100%+11%)] overflow-x-hidden px-[5.6%]', bg)}>{children}</div>;

export default FullWidthLayout;
