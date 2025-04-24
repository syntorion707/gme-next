import { NextResponse } from 'next/server';
import cartJson from './mocks/cart.json';
import gearList from './mocks/gearList.json';
import productJson from './mocks/product.json';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const scenario = searchParams.get('scenario');

    switch (scenario) {
        case 'getCart':
            await new Promise((resolve) => setTimeout(resolve, 3000));

            return NextResponse.json(cartJson);
        case 'getGearList':
            await new Promise((resolve) => setTimeout(resolve, 400));
            
return NextResponse.json(gearList);

        case 'getProduct':
            await new Promise((resolve) => setTimeout(resolve, 3000));

            return NextResponse.json(productJson);

        default:
            return NextResponse.json({ error: 'invalid Request', status: 400 });
    }
}
