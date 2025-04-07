import { FullWidthLayout } from '@/components/layouts';
import { FeaturedVideos } from './featured-videos';
import { HeroCarousel } from './hero-carousel';
import { KnowledgeBase } from './knowledge-base';
import { NewProducts } from './new-products';
import { ProductCategories } from './product-categories';
import { TrustedBrands } from './trusted-brands';

interface ImageData {
    src: string;
    alt: string;
    href: string;
}

interface BannerData {
    src: string;
    link: string;
    text: string;
    alt: string;
}

interface Category {
    name: string;
    img: string;
}

interface Video {
    id: string;
}

interface KnowledgeBaseItem {
    title: string;
    link: string;
    img: string;
}

interface Brand {
    img: string;
    alt: string;
}

interface Product {
    title: string;
    code?: string;
    price: string;
    status: string;
    shipping: string;
    delivery?: string;
    availability?: string;
    badge?: string;
    image: string;
    alt: string;
}

const images: ImageData[] = [
    {
        src: 'https://www.gmesupply.com/images/Web_Pages/home/Sliders/Buckingham_03_03_24.jpg',
        alt: 'Buckingham tools and safety equipment promotional banner',
        href: '#'
    },
    {
        src: 'https://www.gmesupply.com/images/Web_Pages/home/Sliders/Tractel_02_17_25.jpg',
        alt: 'Tractel fall protection and lifting equipment banner',
        href: '#'
    },
    {
        src: 'https://www.gmesupply.com/images/Web_Pages/home/Sliders/Milwaukee_02_10_25.jpg',
        alt: 'Milwaukee power tools and equipment promotional banner',
        href: '#'
    },
    {
        src: 'https://www.gmesupply.com/images/Web_Pages/home/Sliders/Blaklader_01_27_25.jpg',
        alt: 'Blaklader workwear and protective clothing banner',
        href: '#'
    }
];

const banners: BannerData[] = [
    {
        src: 'https://www.gmesupply.com/images/Web_Pages/home/Sliders/Milwaukee_08_31_20.jpg',
        link: '#',
        text: 'Shop Milwaukee Tools',
        alt: 'Milwaukee Tools Banner'
    },
    {
        src: 'https://www.gmesupply.com/images/Web_Pages/home/Sliders/GME_03_17_25.jpg',
        link: '#',
        text: 'Kits save cash - Shop Now!',
        alt: 'GME Kits Banner'
    }
];

const categories: Category[] = [
    { name: 'Tower', img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Tower.jpg' },
    { name: 'Wind', img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Wind.jpg' },
    { name: 'Solar', img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Solar-Kit.png' },
    { name: 'Fiber', img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Fusion-Splicers-Accessories.png' },
    {
        name: 'Cable & Satellite',
        img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Preparation-Compression.png'
    },
    {
        name: 'Aerial & Burial Construction',
        img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Rodder-Underground.png'
    },
    {
        name: 'Telco & Structured Wiring',
        img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Butt-Sets-Accessories.png'
    },
    { name: 'Utility', img: 'https://www.gmesupply.com/images/shop_by_industry/buttons/Utility.jpg' }
];

const videoData: Video[] = [{ id: 'aeZIKp2lJ_0' }, { id: 'RsD9SubzQZ8' }, { id: 'aeZIKp2lJ_0' }];

const knowledgeBaseItems: KnowledgeBaseItem[] = [
    {
        title: 'ABCDs of Fall Protection',
        link: '#',
        img: 'https://www.gmesupply.com/images/Web_Pages/home/Knowledge_Base/ABCDs-Fall-Protection.png'
    },
    {
        title: 'SRL, SRD, PFL 101',
        link: '#',
        img: 'https://www.gmesupply.com/images/Web_Pages/home/Knowledge_Base/SRL-101.png'
    },
    {
        title: 'Safety Helmets 101',
        link: '#',
        img: 'https://www.gmesupply.com/images/Web_Pages/home/Knowledge_Base/ABCDs-Fall-Protection.png'
    },
    {
        title: 'ASME B30 Compliance',
        link: '#',
        img: 'https://www.gmesupply.com/images/Web_Pages/home/Knowledge_Base/ASME-B30.png'
    }
];

const trustedBrands: Brand[] = [
    { img: 'https://www.gmesupply.com/images/Web_Pages/home/Trusted_Brands/Westfall.jpg', alt: 'Milwaukee' },
    { img: 'https://www.gmesupply.com/images/Web_Pages/home/Trusted_Brands/Westfall.jpg', alt: '3M' },
    { img: 'https://www.gmesupply.com/images/Web_Pages/home/Trusted_Brands/Sterling-Rope.jpg', alt: 'DeWalt' },
    { img: 'https://www.gmesupply.com/images/Web_Pages/home/Trusted_Brands/Petzl.jpg', alt: 'Klein Tools' },
    { img: 'https://www.gmesupply.com/images/Web_Pages/home/Trusted_Brands/Multiwave-Alt.jpg', alt: 'Buckingham' },
    { img: 'https://www.gmesupply.com/images/Web_Pages/home/Trusted_Brands/Kenwood.jpg', alt: 'Ergodyne' }
];

const newProducts = [
    {
        title: 'Klein Tools 1684-5C Chicago Grip',
        code: '7100253525',
        price: '$581.99',
        status: 'QUICK SHIP',
        shipping: 'This item ships FREE',
        delivery: 'Get It By Apr 09',
        image: 'https://www.gmesupply.com/c/320//media/product-images/05612.jpg',
        alt: 'Klein Tools 1684-5C Chicago Grip for Guy Wire'
    },
    {
        title: 'Klein Tools KN1500PEX Web-Strap Ratchet Aerial Hoist',
        price: '$558.99',
        status: 'QUICK SHIP',
        shipping: 'This item ships FREE',
        delivery: 'Get It By Apr 08',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/g/m/gm-90030%20(77).png',
        alt: 'Klein Tools KN1500PEX Web-Strap Ratchet Aerial Hoist',
        code: '7100253526'
    },
    {
        title: '3M Disk Marker',
        price: '$1,633,477.99',
        status: 'ON BACKORDER',
        shipping: 'This item ships FREE',
        availability: 'Call for availability',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/g/m/gm-90030%20(75).png',
        alt: '3M Disk Marker',
        code: '7100253527'
    },
    {
        title: '3M Extended Range Ball Marker',
        price: '$605.99',
        status: 'QUICK SHIP',
        delivery: 'Get It By Apr 07',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/g/m/gm-90030%20(72).png',
        alt: '3M Extended Range Ball Marker',
        code: '7100253528'
    },
    {
        title: '3M 7100213428 Dynatel Locator',
        code: '7573X EMS',
        price: '$10,565.99',
        status: 'ON BACKORDER',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/1/0/10020495.jpg',
        alt: '3m_dynatel_locator_7573x.jpg'
    },
    {
        title: '3M 7100253533 Dynatel Locator',
        code: '7550X-ID',
        price: '$10,564.99',
        status: 'QUICK SHIP',
        delivery: 'Get It By Apr 04',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/g/m/gm-90030%20(68).png',
        alt: '3m_dynatel_locator_7550x.jpg'
    },
    {
        title: '3M 7100253525 2573X C12 Dynatel Locator',
        price: '$11,195.99',
        status: 'ON BACKORDER',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/y/t/yt-1424-60sse-g.png',
        alt: '3M 7100253525 2573X C12 Dynatel Locator',
        code: '7100253529'
    },
    {
        title: 'Milwaukee M18 Fuel Drill Kit',
        price: '$399.99',
        status: 'ON BACKORDER',
        badge: 'HOT',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/k/t/kt-1613-40_6.jpg',
        alt: 'Milwaukee M18 Fuel Drill Kit',
        code: '7100253589'
    },
    {
        title: 'DeWalt 20V Max XR Impact Driver',
        price: '$229.99',
        status: 'QUICK SHIP',
        delivery: 'Get It By Apr 06',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/1/6/16845c_photo.jpg',
        alt: 'DeWalt 20V Max XR Impact Driver',
        code: '7100253590'
    },
    {
        title: 'Klein Tools Digital Multimeter',
        price: '$89.99',
        status: 'ON BACKORDER',
        delivery: 'Get It By Apr 10',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/g/m/gm-90030%20(68).png',
        alt: 'Klein Tools Digital Multimeter',
        code: '7100253595'
    },
    {
        title: 'Ergodyne Gloves Pro Series',
        price: '$24.99',
        status: 'QUICK SHIP',
        delivery: 'Get It By Apr 12',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/product-images/05612.jpg',
        alt: 'Ergodyne Gloves Pro Series',
        code: '7100253578'
    },
    {
        title: "Buckingham Climber's Harness",
        price: '$345.99',
        status: 'ON BACKORDER',
        shipping: 'This item ships FREE',
        image: 'https://www.gmesupply.com/c/320//media/catalog/product/g/m/gm-90030%20(79).png',
        alt: "Buckingham Climber's Harness",
        code: '71002535675'
    }
];

const HomePage = () => {
    return (
        <div>
            <HeroCarousel images={images} banners={banners} />
            <ProductCategories categories={categories} />
            <FeaturedVideos videos={videoData} />
            <FullWidthLayout>
                <KnowledgeBase items={knowledgeBaseItems} link='#' />
            </FullWidthLayout>
            <TrustedBrands brands={trustedBrands} />
            <FullWidthLayout>
                <NewProducts products={newProducts} />
            </FullWidthLayout>
        </div>
    );
};

export default HomePage;
