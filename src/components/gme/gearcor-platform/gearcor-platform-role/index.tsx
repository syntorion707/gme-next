import React from 'react';
import { BodyContent, FullWidthLayout } from '@/components/layouts';
import { BenefitsSection } from '../gearcor-platform-benifits-section';
import { FeaturesSection } from './gearcor-platform-feature-section';
import { RolesSection } from './gearcor-role-section';

interface RoleCard {
    title: string;
    description: string;
    imageUrl?: string;
}

interface FeatureCard {
    title: string;
    description: string;
    iconClass?: string;
    link: string;
}

interface GearcorPlatformRoleContent {
    headerText: string;
    description: string;
    roles: RoleCard[];
    features: FeatureCard[];
    benefit: {
        title: string;
        items: string[];
    }[];
}

interface GearcorPlatformRoleProps {
    content: GearcorPlatformRoleContent;
}

const GearcorPlatformRole: React.FC<GearcorPlatformRoleProps> = ({ content }) => {
    const { headerText, description, roles, features, benefit } = content;

    return (
        <FullWidthLayout>
            <div className='flex flex-col items-start gap-4 p-[5%]'>
                {/* Header Section */}
                <div className='mb-4 text-2xl font-bold'>{headerText}</div>
                <div>{description}</div>

                <RolesSection roles={roles} />
                <FeaturesSection features={features} />
            </div>
        </FullWidthLayout>
    );
};

export default GearcorPlatformRole;
