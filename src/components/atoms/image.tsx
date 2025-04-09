'use client';

import NextImage, { ImageProps } from 'next/image';

export default function Image({
    src,
    alt = '',
    width = 800,
    height = 600,
    loader = ({ src }) => src,
    placeholder = 'blur',
    blurDataURL = '/placeholder.png',
    ...props
}: ImageProps) {
    if (props?.fill) {
        return (
            <NextImage
                src={src}
                alt={alt}
                loader={loader}
                placeholder={placeholder}
                blurDataURL={blurDataURL}
                {...props}
            />
        );
    }

    return (
        <NextImage
            src={src}
            alt={alt}
            width={width}
            height={height}
            loader={loader}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            {...props}
        />
    );
}
