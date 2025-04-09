// cartData.ts
export interface CardItem {
    title: string;
    duration: string;
    points: string[];
}

export const cardData: CardItem[] = [
    {
        title: 'Step 1: Meet with your Gear Expert® & Initial Demo',
        duration: '⏳ 30 - 60 Minute Meeting',
        points: [
            'Review your company and how your current purchasing process works.',
            'Discuss the benefits of GME PRO and how our technological solutions integrate into your daily ops.',
            'See a demo of GME PRO and explore how it suits your needs.',
            'Discuss tools, PPE, and consumables.'
        ]
    },
    {
        title: 'Account Setup',
        duration: '⏳ 1 - 2 Business Days',
        points: [
            'Your Gear Expert® configures your account tailored to your goals.',
            'You provide a list of employees with job titles and access permissions.'
        ]
    },
    {
        title: 'Step 3: Account Demo & Review',
        duration: '⏳ 45 Minute Meeting',
        points: [
            'Schedule a deeper demo of your PRO system.',
            'Ask questions and get comfortable using your account.',
            'Review any changes or additional requests before launch.'
        ]
    },
    {
        title: "Step 4: You're Ready!",
        duration: '💻 Launch Time',
        points: [
            'Account is ready to be used after confirmation.',
            'Users get emails to set passwords and log in.',
            'Post-launch support from your Gear Expert®.'
        ]
    }
];
