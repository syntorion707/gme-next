// cartData.ts
export interface CardItem {
    title: string;
    duration: string;
    points: string[];
    button: boolean;
}

export const cardData: CardItem[] = [
    {
        title: 'Step 1: Meet with your Gear Expert® & Initial Demo',
        duration: '⏳ 30 - 60 Minute Meeting',
        points: [
            'Review of your company and how your current purchasing process works.',
            'Discuss the benefits of GME PRO and how our innovative technological solutions provide the customization and freedom you need to seamlessly integrate into your day-to-day operations, saving your organization time and money.',
            'See a Demo of GME PRO and discuss how you can utilize it to suit your needs.',
            'Discuss the tools, PPE, and consumables your company uses.'
        ],
        button: true
    },
    {
        title: 'Account Setup',
        duration: '⏳ 1 - 2 Business Days',
        points: [
            'Our Gear Experts® will begin configuring your account to ensure that the system is tailored to your specific goals and requirements.',
            'You provide your Gear Expert® with a list of all employees that will need access along with their job titles and levels of permissions that each employee should have.'
        ],
        button: false
    },
    {
        title: 'Step 3: Account Demo & Review',
        duration: '⏳ 45 Minute Meeting',
        points: [
            'Your Gear Expert will schedule a time with you (and anyone else on your team) to provide a more in-depth demo of your PRO system.',
            'Ask questions. Your Gear Expert is here to help - so ask as many questions as you need to feel comfortable utilizing your PRO account.',
            'This is also a good time to go over any additional requests or changes you might have before your PRO account is launched.'
        ],
        button: false
    },
    {
        title: "Step 4: You're Ready!",
        duration: '💻 Launch Time',
        points: [
            'Once your account has been created and you’re comfortable with using it, your account is ready to be used.',
            'All users will receive emails to confirm their email address and create their unique passwords for their accounts.',
            'Your Gear Expert will be available to assist with any post-launch questions you might have.'
        ],
        button: false
    }
];
