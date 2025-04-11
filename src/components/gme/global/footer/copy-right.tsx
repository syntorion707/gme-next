import React from 'react';

const footerConfig = {
    copyright: 'Copyright © 2005 - 2025 GME Supply. All Rights Reserved'
};

const CopyRight = () => {
    return (
        <footer className='flex items-center justify-center bg-gray-700 p-4 text-gray-200'>
            <p className='text-md text-center'>{footerConfig.copyright}</p>
        </footer>
    );
};

export default CopyRight;
