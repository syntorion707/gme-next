import { ISearchParams } from '@/types/common';

interface BrandParams {
    params: Promise<{ brand: string[] }>;
    searchParams: ISearchParams;
}

const Brand = async ({ params, searchParams }: BrandParams) => {
    const { brand } = await params;
    const queryParams = await searchParams;

    return (
        <>
            Brand Page of {brand}
            <div>
                <p>Search Query Params</p>
                {JSON.stringify(queryParams, null, 2)}
            </div>
        </>
    );
};

export default Brand;
