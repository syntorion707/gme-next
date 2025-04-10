import CopyRight from './copy-right';
import FooterNavigationWrapper from './footer-navigationwrapper';
import Newsletter from './news-letter';

const Footer = () => {
    return (
        <footer className='flex-col'>
            <Newsletter />
            <FooterNavigationWrapper />
            <CopyRight />
        </footer>
    );
};

export default Footer;
