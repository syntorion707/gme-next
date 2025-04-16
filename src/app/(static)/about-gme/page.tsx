import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutUs = () => {
    const youtubeThumbnailStyle = {
        backgroundImage: 'url("https://i.ytimg.com/vi_webp/Z9EY2p-YoCE/maxresdefault.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    };

    const gmeLogoImageStyle = {
        backgroundImage: `url("https://yt3.ggpht.com/oM5jtrJhgg5HpCQfXtisEfrv-xT7Thqe0Ik7cjpdyLT5Q5vmasbMshVSFImGOtE7MgNz0L49Eg=s68-c-k-c0x00ffffff-no-rj")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '36px',
        height: '36px',
        display: 'inline-block',
        borderRadius: '9999px'
    };

    return (
        <>
            <div className='body-content w-full p-5'>
                <div className='heading text-center'>
                    <h1 className='text-primary mb-2 text-center text-3xl font-bold'>ABOUT US: THE GME SUPPLY STORY</h1>
                    <p className='mb-4 text-xl font-bold'>
                        North America's premier outfitter of fall protection, safety equipment, power tools, and gear
                        for men and women of industry.
                    </p>
                </div>
                <div className='u-tube flex justify-center p-2'>
                    <div
                        style={youtubeThumbnailStyle}
                        className='relative mt-3.5 h-32 w-55 overflow-hidden pr-3.5 pl-3.5 sm:h-48 sm:w-72 md:h-78 md:w-[600px] lg:h-[400px] lg:w-[800px]'>
                        <button className='text-primary absolute top-1/2 left-1/2 flex h-9 w-25 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-white sm:h-12 sm:w-28 md:h-14'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                                <path
                                    fill='#ff0000'
                                    d='M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z'
                                />
                            </svg>
                        </button>
                        <div className='absolute top-3 left-3 flex items-center gap-2'>
                            <Link href='' style={gmeLogoImageStyle}></Link>
                            <span className='text-sm font-medium text-white sm:text-base md:text-lg'>About Us</span>
                        </div>
                    </div>
                </div>
            </div>
            <OurMission />
            <FoundingBanner />
            <OurHistory />
            <Future />
            <GearExperts />
            <hr className='bg-primary mt-12 mb-12 block h-1 border-none' />
            <ProudMembers />
            <hr className='bg-primary mt-12 mb-12 block h-1 border-none' />
            <TrustedBrands />
            <GeneralInfo />
            <Locations />
        </>
    );
};

export default AboutUs;

interface ContentSectionProps {
    imageUrl: string;
    title: string;
    paragraphs: string[];
    imageAlt?: string;
}

const ContentSection = ({ imageUrl, title, paragraphs, imageAlt = 'Image' }: ContentSectionProps) => {
    return (
        <div className='max-w-full'>
            <hr className='bg-primary mt-12 mb-12 block h-1 border-none' />
            <div className='flex w-full flex-col gap-4 p-5 lg:flex-row lg:gap-10 lg:p-2'>
                <Image
                    src={imageUrl}
                    width={700}
                    height={700}
                    quality={100}
                    alt={imageAlt}
                    className='object-contain lg:w-[400px] xl:w-[500px] 2xl:w-[50%]'
                />
                <div className='lg:pt-auto pt-12'>
                    <h4 className='text-2xl font-bold'>{title}</h4>
                    {paragraphs.map((text, index) => (
                        <p key={index} className='mb-4 text-left text-[0.9em] font-normal md:text-[1.1rem]'>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

interface BannerSectionProps {
    imageUrl: string;
    title: string;
    paragraphs: string[];
    imageAlt?: string;
    withOverlay?: boolean;
}

const BannerSection = ({ imageUrl, title, paragraphs, imageAlt = 'Image', withOverlay }: BannerSectionProps) => {
    const encodedUrl = imageUrl.replace(/'/g, '%27');
    const backgroundImage = withOverlay
        ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${encodedUrl}')`
        : `url('${encodedUrl}')`;

    console.log('Image URL:', imageUrl);

    return (
        <div
            style={{
                backgroundImage: backgroundImage
            }}
            className='mt-16 mb-16 flex h-[600px] min-h-[500px] w-full items-center justify-center bg-cover bg-center bg-no-repeat sm:h-[400px] md:h-[500px] 2xl:bg-top'>
            <div className='text-center text-white'>
                <h4 className='mb-24 text-[40px] font-semibold' style={{ textShadow: '1px 1px black' }}>
                    {title}
                </h4>
                <div className='mx-auto w-[78%] rounded-2xl bg-black/50 p-5'>
                    {paragraphs.map((text, index) => (
                        <p className='mb-4 text-center text-[0.9rem]' key={index}>
                            {text}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

const OurMission = () => {
    const imageUrl = 'https://www.gmesupply.com/images/Web_Pages/About_Us/Word%20Graph.jpg';

    return (
        <ContentSection
            imageUrl={imageUrl}
            title='Our Mission & Values'
            imageAlt='Honest Image'
            paragraphs={[
                'Our mission is to keep workers safe and productive on the job, by offering customers timely service and expertise.',
                "This word cloud is given to each employee and featured on a wall in each of our locations. It's a symbol of the values we use as we strive each and every day to embody our mission."
            ]}
        />
    );
};

const FoundingBanner = () => {
    const imageUrl = 'https://www.gmesupply.com/images/Web_Pages/About_Us/Our%20Founding.jpg';

    return (
        <BannerSection
            imageUrl={imageUrl}
            title='Our Founding'
            paragraphs={[
                'GME Supply was founded in 2005 in Brooklyn, NY.',
                'In 2012 - after a little over 6 years of being in business, in order to better serve North America, we centralized our operations by relocating our headquarters to Columbia, MO.'
            ]}
            imageAlt='Our Founding'
        />
    );
};

const OurHistory = () => {
    return (
        <div className='flex flex-col pr-3.5 pl-3.5 lg:flex-row'>
            <div className='lg:max-w-[30%]'>
                <Image
                    src={'https://www.gmesupply.com/images/Web_Pages/About_Us/GME-Timeline.jpg'}
                    alt='GME Timeline'
                    width={700}
                    height={800}
                    className='max-w-full lg:w-[75%]'
                />
            </div>
            <div className='mt-14 w-full text-left lg:mt-0 lg:max-w-[65%]'>
                <h4 className='mb-4 text-2xl font-bold'>Early Growth</h4>
                <p className='mb-4'>
                    In 2012 we expanded our headquarters to a new location that provided a public showroom and
                    additional office space.
                </p>
                <p className='mb-4'>
                    By 2013 we had already outgrown the new building which necessitated another move. We expanded our
                    showroom, added more desk space, and increased our warehouse capacity. There, we also constructed a
                    state-of-the-art photo and video production studio to create custom educational content.
                    Additionally, the headquarters featured a 30+ seat training center to host free to the public safety
                    seminars.
                </p>
                <p className='mb-4'>
                    In 2014 we were featured on the Inc. 5000 list as one of America's fastest growing companies. That
                    same year we were also named "Exporter of the Year" by the Small Business Association. We also
                    upgraded to a state-of-the-art inventory management system.
                </p>
                <p className='mb-4'>
                    In 2015, as part of our commitment to provide unparalleled customer service, we opened a second
                    storefront and distribution center in Atlanta, GA. This state-of-the-art facility features a
                    showroom, office space, a training center with 30-foot training towers, and additional warehouse
                    space.
                </p>
                <p className='mb-4'>
                    In 2016 we continued to add additional staff, requiring a remodel of our headquarters' office space
                    to allow for more desks, as well as a video conference room. That same year, we were named
                    "Distributor of the Year" by Affiliated Distributors.
                </p>
                <p className='mb-4'>
                    In 2017 our growth forced us to relocate to a larger headquarters again. Our new facility features a
                    larger showroom and a warehouse with over 10 times the capacity of the previous building. Our office
                    space features custom art, a quiet "nap room", and free food and beverages for our employees. We
                    also increased the size of and updated our production studio to continue creating high-quality
                    custom educational content. Our training center also grew to accommodate more people in our free to
                    the public seminars. Also, we've added two 30-foot training towers.
                </p>
                <p className='mb-4'>
                    2017 was a big year for us. Not only because we moved...again, but because we were named "Ones to
                    Watch" by Industrial Distributors Magazine.
                </p>
                <p className='mb-4'>
                    2018 provided another opportunity to better serve our customers. We opened a new distribution center
                    in Dallas, TX. Located at 1075 S. Beltline Rd. Ste 200, Coppell, TX 75019.
                </p>
                <p className='mb-4'>
                    In 2019 we were selected as 1 of 300 of the best workplaces by INC Magazine. Out of thousands of
                    possible companies, our Gear Experts came out on top.
                </p>
                <p className='mb-4'>
                    2020 had it's challenges. But, our Gear Experts® met the pandemic head on and pushed through to
                    continue to get the front line workers we serve the gear they needed when and where they needed it
                    the most. In early 2020 we opened a new 36,000 sq/ft fulfillment center in Los Angeles, CA. Located
                    just out side of LA in Corona, CA, this new facility allowed us to offer our west coast customers
                    faster shipping times and a local store to attend trainings and more. In mid 2020 we proudly
                    acquired Custom Tool Supply. Custom Tool Supply allowed us to add some stellar people to our team of
                    Gear Experts®
                </p>
                <p className='mb-4'>
                    2021 brought even more challenges - like a continuing pandemic and supply chain constraints. But,
                    our Gear Experts showed their tenacity and pushed through to keep America's workers safe. With a
                    continued focus on our mission we expanded again and in early 2021, GME acquired Gearcor. We didn't
                    stop at Gearcor, though. Later that year GME also acquired Safety LMS. Offering a full line of
                    in-person and online training services for tower climbers, Safety LMS gave us the tools we needed
                    further our mission to keep workers safe and productive on the job.
                </p>
                <p className='mb-4'>
                    In 2022 we continued to look for ways to further our mission of keeping North America's workers safe
                    and productive on the job. So, our Gear Experts® set their sites on our neighbors up north. That's
                    right, we took a trip (many trips, actually) to Canada. In February, we acquired Team-1 Academy
                    located in Burlington, Ontario, Canada. Team-1 added additional training rescources and a
                    distribution warehouse in Canada - we were officially international! In addition to growing our
                    team, we looked at the best ways for us to serve our customers. In May we offically merged Custom
                    Tool Supply into GME Supply.
                </p>
                <p className='mb-4'>
                    2023 was turbulant, but just as we did in prior years, we continued to push through adversity in
                    order to pursue our mission of keeping America's workers safe and productive on the job. We started
                    2023 off strong by adding another group of top-notch Gear Experts® to our family. In January, we
                    officially acquired Farwest Line Specialties. The addition of Farwest to the GME family allowed us
                    to expand our Gear Expertise into the utility sector. With extensive knowledge in at-height and
                    industrial work, plus a national distribution network, we were able to team up with Farwest to serve
                    lineman across the country more effeciently than ever.
                </p>
            </div>
        </div>
    );
};

const Future = () => {
    const ImageUrl = 'https://www.gmesupply.com/images/Web_Pages/About_Us/Staff-10_12_01_17.jpg';

    return (
        <BannerSection
            imageUrl={ImageUrl}
            title='The Future'
            paragraphs={[
                'Over the past 15 years, we have had the pleasure of keeping workers safe and productive on the job and we have no plans to slow down anytime soon.',
                "Over the coming years, we will continue to be North America's premier outfitter of fall protection, safety equipment, and gear for at-height workers, industry, and construction."
            ]}
            withOverlay={true}
        />
    );
};

const GearExperts = () => {
    const imageUrl = 'https://www.gmesupply.com/images/Web_Pages/About_Us/Climb%20Higher.jpg';

    return (
        <ContentSection
            imageUrl={imageUrl}
            title='Gear Experts®'
            imageAlt='GME Supply'
            paragraphs={[
                'Our Gear Experts® pride themselves on providing unmatched customer service, prompt delivery, and continued innovation.',
                "We're always here to help you find exactly what you're looking for. We combine industry knowledge with professional experience - all to understand your needs and provide solutions."
            ]}
        />
    );
};

const ProudMembers = () => {
    const membersImages = [
        { name: 'NATE', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/NATE_logo.png' },
        { name: 'AWEA', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/AWEA_Logo.jpg' },
        { name: 'STAC', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/STAC_Logo.jpg' },
        { name: 'SPRAT', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/SPRAT_Logo.png' },
        { name: 'SEAA', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/SEAA_Logo.png' },
        { name: 'ANSI', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/ANSI_Logo.png' }
    ];

    return (
        <div className='-mr-4 -ml-4 flex flex-wrap'>
            <div className='w-full max-w-full pr-4 pl-4'>
                <h4 className='mb-12 text-center text-2xl font-bold'>Proud Members of</h4>
            </div>
            <div className='-mx-4 flex flex-wrap'>
                {membersImages.map((member, index) => (
                    <div
                        className='basic-[8.333%] relative m-auto flex w-full max-w-[8%] pr-[15px] pl-[15px] lg:max-w-[16%]'
                        key={index}>
                        <Image
                            src={member.src}
                            width={500}
                            height={500}
                            alt={member.name}
                            className='h-auto w-full max-w-[100%]'></Image>
                    </div>
                ))}
            </div>
        </div>
    );
};

const TrustedBrands = () => {
    const firstRowImages = [
        { name: 'elkriver', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/elk-river-2.jpg' },
        { name: 'fieldsense', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/fieldsense-2.jpg' },
        { name: 'petzl', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/petzl-3.jpg' },
        { name: 'skylotec', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/skylotec-2.jpg' },
        { name: 'Sterling', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/Sterling-2.jpg' },
        { name: 'westfall', src: 'https://www.gmesupply.com/images/Web_Pages/About_Us/westfall-pro-2.jpg' }
    ];

    const secondRowImages = [
        { name: 'CablePrepLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/CablePrepLogo.png' },
        { name: 'InnoLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/InnoLogo.png' },
        { name: 'JamesonLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/JamesonLogo.png' },
        { name: 'JonardLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/JonardLogo.png' },
        { name: 'KleinLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/KleinLogo.png' }
    ];

    const thirdRowImages = [
        { name: 'MilwaukeeLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/MilwaukeeLogo.png' },
        { name: 'PPCLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/PPCLogo.png' },
        { name: 'RadiansLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/RadiansLogo.png' },
        {
            name: 'SunsetLaddersLogo',
            src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/SunsetLaddersLogo.png'
        },
        { name: 'ViaviLogo', src: 'https://www.gmesupply.com/images/Web_Pages/cts_about/ViaviLogo.png' }
    ];

    return (
        <div className='-mr-3.5 -ml-3.5 flex flex-wrap'>
            <div className='w-full max-w-full pr-3.5 pl-3.5'>
                <h4 className='mb-12 text-center text-2xl font-bold'>Trusted Brands</h4>
            </div>
            <div className='-mr-3.5 -ml-3.5 flex flex-wrap pt-12 pb-12'>
                {firstRowImages.map((brand, index) => (
                    <div key={index} className='m-auto w-full max-w-full pr-[15px] pl-[15px] lg:max-w-[16%]'>
                        <Image src={brand.src} width={500} height={500} alt={brand.name} />
                    </div>
                ))}
            </div>
            <div className='-mr-3.5 -ml-3.5 flex flex-wrap pt-12 pb-12'>
                {secondRowImages.map((brand, index) => (
                    <div key={index} className='m-auto w-full max-w-full pr-4 pl-4 md:flex md:grow-1 md:basis-0'>
                        <Image src={brand.src} width={500} height={500} alt={brand.name} />
                    </div>
                ))}
            </div>
            <div className='-mr-3.5 -ml-3.5 flex flex-wrap pt-12 pb-12'>
                {thirdRowImages.map((brand, index) => (
                    <div key={index} className='m-auto w-full max-w-full pr-4 pl-4 md:flex md:grow-1 md:basis-0'>
                        <Image src={brand.src} width={500} height={500} alt={brand.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const GeneralInfo = () => {
    return (
        <>
            <div className='mt-12 w-full max-w-full pr-4 pl-4'>
                <h2 className='border-primary mb-2 border border-t-[3px] bg-[#262626] p-2 text-[22px] font-medium text-white uppercase'>
                    Genral Information
                </h2>
            </div>
            <div className='w-full max-w-full pr-[15px] pl-[15px]'>
                <div className='-mr-[15px] -ml-[15px] flex flex-col lg:flex-row'>
                    <div className='m-auto w-full max-w-full pr-[15px] pl-[15px]'>
                        <p className='mt-0 mb-4 font-bold'>Phone:</p>
                        <p className='mt-0 mb-4'>
                            USA:
                            <Link href='tel:1-800-940-4520' className='text-primary'>
                                {' '}
                                (800) 940-6762
                            </Link>
                            <br />
                            INTL:
                            <Link href='tel:1-573-446-1444' className='text-primary'>
                                {' '}
                                (718) 210-3913
                            </Link>
                        </p>
                        <p className='mt-0 mb-4 font-bold'>Email:</p>
                        <p className='mt-0 mb-4'>
                            <Link href='info@gmesupply.com' className='primary'>
                                info@gmesupply.com
                            </Link>
                        </p>
                        <p className='mt-0 mb-4 font-bold'>Fax:</p>
                        <p className='mt-0 mb-4'>
                            <Link href='fax:888 511-0457' className='primary'>
                                (888) 511-0457
                            </Link>
                        </p>
                        <p className='mt-0 mb-4 font-bold'>Hours:</p>
                        <p className='mb-4'>
                            Monday - Friday
                            <br />
                            8am - 8pm (EST)
                            <br />
                            7am - 7pm (CST)
                            <br />
                            5am - 5pm (PST)
                            <br />
                        </p>
                    </div>
                    <div className='flex w-full max-w-full shrink-0 grow-0 basis-[100%] pr-[15px] pl-[15px] lg:max-w-[67%]'>
                        <Image
                            src='https://www.gmesupply.com/images/Web_Pages/About_Us/distribution-map.jpg'
                            width={900}
                            height={800}
                            alt='Distribution Map'
                            className='w-full'
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

interface Location {
    id: number;
    title: string;
    address: string[];
    phone: string;
    hours: string | null;
    image: string;
    alt: string;
    imageFirst: boolean;
}

const Locations = () => {
    const locations: Location[] = [
        {
            id: 1,
            title: 'Global Flagship Store (Missouri)',
            address: ['1391 E Boone Industrial Blvd', 'Columbia, MO 65202'],
            phone: '(718) 210-3913',
            hours: '8am - 4pm Mon - Fri',
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/columbia-mo.jpg',
            alt: 'Columbia, MO',
            imageFirst: true
        },
        {
            id: 2,
            title: 'Storefront & Distribution Center (California)',
            address: ['830 E. Parkridge Ave.', 'Corona, CA 92879'],
            phone: '(951) 450-7000',
            hours: '8am - 5pm Mon - Fri',
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/corona-ca.jpg',
            alt: 'corona-ca',
            imageFirst: false
        },
        {
            id: 3,
            title: 'Storefront & Distribution Center (Georgia)',
            address: ['4720 Robinson Dr. SW', 'Atlanta, GA 30336'],
            phone: '(404) 458-7000',
            hours: '8am - 5pm Mon - Fri',
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/atlanta-ga.jpg',
            alt: 'atlanta-ga',
            imageFirst: true
        },
        {
            id: 4,
            title: 'Storefront & Distribution Center (Texas)',
            address: ['1075 S. Beltline Rd. Ste 200', 'Coppell, TX 75019'],
            phone: '(972) 895-7000',
            hours: '8am - 5pm Mon - Fri',
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/dallas-tx.jpg',
            alt: 'dallas-tx',
            imageFirst: true
        },
        {
            id: 5,
            title: 'Safety LMS Training Center (Texas)',
            address: ['1075 S. Beltline Rd. Ste 200', 'Coppell, TX 75019'],
            phone: '(512) 710-5000',
            hours: '8am - 5pm Mon - Fri',
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/austin-tx.jpg',
            alt: 'austin-tx',
            imageFirst: false
        },
        {
            id: 6,
            title: 'Training Center (Ontario, Canada)',
            address: ['1040 Sutton Dr, #2', 'Burlington, ON L7L 6B8', 'Canada'],
            phone: '(905) 827-0007',
            hours: '8am - 4pm Mon - Fri',
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/burlington-on.jpg',
            alt: 'burlington-on',
            imageFirst: true
        },
        {
            id: 7,
            title: 'New York Office',
            address: ['519 Columbia Drive Ste B', 'Johnson City, NY 13790'],
            phone: '(800) 517-5970',
            hours: null,
            image: 'https://www.gmesupply.com/images/Web_Pages/About_Us/gearcor.png',
            alt: 'gearcor',
            imageFirst: false
        }
    ];

    const LocationCard = ({ location }: { location: Location }) => {
        return (
            <>
                <div className='mt-12 -mr-[15px] -ml-[15px] flex flex-col lg:flex-row'>
                    {location.imageFirst && (
                        <div className='w-full max-w-full pr-[15px] pl-[15px]'>
                            <Image src={location.image} width={700} height={700} quality={100} alt={location.alt} />
                        </div>
                    )}
                    <div className='m-auto w-full max-w-full pr-[15px] pl-[15px]'>
                        <h4 className='text-[1.4rem] font-bold'>{location.title}</h4>
                        <p className='mb-4'>
                            {location.address.map((line, index) => (
                                <span key={index}>
                                    {line}
                                    <br />
                                </span>
                            ))}
                            <Link href={location.phone} className='text-primary'>
                                {location.phone}
                            </Link>
                            <br />
                            {location.hours && (
                                <>
                                    <strong>Storefront Hours:</strong> {location.hours}
                                    <br />
                                </>
                            )}
                            <Link href='Get Directions' className='text-primary'>
                                Get Directions
                            </Link>
                        </p>
                    </div>
                    {!location.imageFirst && (
                        <div className='w-full max-w-full pr-[15px] pl-[15px]'>
                            <Image src={location.image} width={700} height={700} quality={100} alt={location.alt} />
                        </div>
                    )}
                </div>
                {location.id !== locations.length && <hr className='bg-primary mt-12 mb-12 block h-1 border-none' />}
            </>
        );
    };

    return (
        <div>
            <div className='mt-12 w-full max-w-full pr-4 pl-4'>
                <h2 className='border-primary mb-2 border border-t-[3px] bg-[#262626] p-2 text-[22px] font-medium text-white uppercase'>
                    Locations
                </h2>
            </div>
            <div className='mb-12 max-w-full pr-4 pl-4'>
                {locations.map((location) => (
                    <LocationCard key={location.id} location={location} />
                ))}
            </div>
        </div>
    );
};
