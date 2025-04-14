import React from 'react';
import GearcorPlatformBanner from './gearcor-platform-banner';
import { BenefitsSection } from './gearcor-platform-benifits-section';
import FeatureSection2 from './gearcor-platform-feature-2';
import GearcorPlatformNavigationBar from './gearcor-platform-navication-bar';
import GearcorPlatformRole from './gearcor-platform-role';
import SaftyGearsSection from './gearcor-platform-safety-gears';
import SoftwareSolutionsSection from './gearcor-platform-software-solution';
import GearcorPlatformContactUs from './gearcor-platformcontact-us';

const navItems: string[] = [
    'Overview',
    'How It Works',
    'Getting Started',
    'Footwear',
    'Uniforms',
    'Safety Gear',
    'Case Studies'
];

const bannerData = {
    backgroundImage: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/overview.jpg',
    title: 'Welcome to the Gearcor Platform. Simplify Your Uniform, Safety Gear & Footwear Programs',
    subtitle: '',
    titleColor: 'text-block',
    subtitleColor: 'text-block',
    primaryButton: {
        label: 'Schedule A Demo',
        bgColor: 'bg-primary',
        textColor: 'text-white'
    },
    secondaryButton: {
        label: 'Watch Video',
        bgColor: 'bg-[#d3d3d3]',
        textColor: 'text-primary'
    }
};
const gearcorContent = {
    headerText:
        'The Gearcor Platform gives you a private company website that allows your team to easily order FR uniforms, fall protection, safety footwear and PPE + a manager dashboard that puts you in control.',
    description:
        "Gearcor's Managed Marketplace lets you manage your entire safety shoe program, work uniform distribution, PPE, and fall protection needs through a private, easy-to-use web-based platform. Gearcor's software provides you with total program visibility, ensures purchasing and policy consistency across the organization, and gives you complete control over program spend. The Gearcor system is perfect for companies with multiple locations.",
    roles: [
        {
            title: 'Operations',
            description: 'Handles internal workflows and systems.',
            imageUrl: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/operations.jpg'
        },
        {
            title: 'Procurement',
            description: 'Manages purchasing and vendor relations.',
            imageUrl: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/procurement.jpg'
        },
        {
            title: 'EHS / Quality',
            description: 'Ensures compliance with safety standards.',
            imageUrl: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/safety.jpg'
        }
    ],
    features: [
        {
            title: 'How it Works',
            description: 'Our technology and account management practices set us apart.',
            iconClass: 'fas fa-cogs fa-5x store-color pb-4',
            link: '/features/ordering'
        },
        {
            title: 'Getting Started',
            description: 'Gearcor’s five step onboarding process makes implementation easy.',
            iconClass: 'fas fa-laptop fa-5x store-color pb-4',
            link: '/features/budget-control'
        },
        {
            title: 'Schedule A Demo',
            description: 'Receive a demo from your Gear Expert®',
            iconClass: 'far fa-calendar fa-5x store-color pb-4',
            link: '/features/policy'
        }
    ],
    benefit: [
        {
            title: 'Employees benefit from',
            items: [
                'Easy Online Ordering',
                'High Quality Apparel, Footwear, & PPE',
                'Personalized Customer Service',
                'Order History and Documentation',
                'Prompt Delivery',
                'Hassle-Free Returns and Exchanges'
            ]
        },
        {
            title: 'Employers benefit from:',
            items: [
                'Eliminates Time Consuming Paperwork',
                'Simplifies Voucher Program Management',
                'Converts Company Policies into a Digital Infrastructure',
                'Monitors Reimbursement Eligibility',
                'Provides Expense Reports and Budgeting Tools',
                'Consolidates Invoicing and Accounting',
                'Reduces Overall Program Expense',
                'Provides Total Program Visibility'
            ]
        }
    ],
    safetyGears: {
        title: 'Your Total Source for Employee Safety Gear',
        partnerLogos: [
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/vestas.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/baesystems.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/maines.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/internationalpaper.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/barrett.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/kiewit.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/mitsubishi.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/alliantenergy.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/chs.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/dw.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/desilvagates.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/delmonaco.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/fritolay.png',
            'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/customers/williams.png'
        ]
    },
    feature2data: [
        {
            title: 'How it Works',
            description: 'Our technology and account management practices set us apart.',
            iconSrc: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/icon1.png',
            link: '#'
        },
        {
            title: 'Getting Started',
            description: 'Gearcor’s five step onboarding process makes implementation easy.',
            iconSrc: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/icon2.png',
            link: '#'
        },
        {
            title: 'Uniforms',
            description: 'Custom logo printing and embroidery available.',
            iconSrc: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/icon4.png',
            link: '#'
        },
        {
            title: 'Footwear',
            description: 'Designed for specialized and industrial work environments',
            iconSrc: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/icon3.png',
            link: '#'
        }
    ],
    contactUs: {
        title: 'Call us today and ask about our',
        subtitle: 'Corporate Safety Footwear & Uniform Programs',
        phoneNumber: '1-800-517-5970 (Option 1)',
        className: 'custom-class-for-specific-instance',
        buttons: [
            {
                label: 'Schedule a Demo',
                variant: 'primary'
            },
            {
                label: 'Watch Video',
                variant: 'secondary'
            },
            {
                label: 'Read Case Studies',
                variant: 'secondary'
            }
        ]
    },
    softwareSolutionData: {
        title: 'Software solutions that automate and eliminate bottlenecks. Our goal is efficiency!',
        description: [
            "Our software solutions are designed to automate and eliminate bottlenecks in the day to day operation of your business and safety gear administration. We help companies large and small increase efficiency and reduce administrative burden saving you and your employees thousands of wasted hours (and dollars) a year. Implementing systems and processes that streamline your business is the key differentiator in today's economy. Those who waste less time and move faster serve their customers better. Learn how we can bring these principles to your business."
        ],
        imageSrc: 'https://www.gmesupply.com/images/Web_Pages/gearcor_platform/tablet_screen.png',
        imageAlt: 'Software solutions visualization'
    }
};

const GearcorPlatformPage: React.FC = () => {
    return (
        <div>
            <GearcorPlatformBanner bannerData={bannerData} />
            <GearcorPlatformNavigationBar navItems={navItems} />
            <GearcorPlatformRole content={gearcorContent} />
            <BenefitsSection benefits={gearcorContent?.benefit} />
            <SaftyGearsSection
                title={gearcorContent?.safetyGears?.title}
                logos={gearcorContent?.safetyGears?.partnerLogos}
            />
            <SoftwareSolutionsSection softwareSolutionData={gearcorContent?.softwareSolutionData} />
            <FeatureSection2 features={gearcorContent?.feature2data} />
            <GearcorPlatformContactUs contactUs={gearcorContent?.contactUs} />
        </div>
    );
};

export default GearcorPlatformPage;
