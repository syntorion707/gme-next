import { NextResponse } from 'next/server';
import cartJson from './mocks/cart.json';
import productJson from './mocks/products.json';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const scenario = searchParams.get('scenario');

    switch (scenario) {
        case 'getCart':
            await new Promise((resolve) => setTimeout(resolve, 3000));

            return NextResponse.json(cartJson);

        case 'getProducts':
            await new Promise((resolve) => setTimeout(resolve, 3000));

            return NextResponse.json(productJson);

        default:
            return NextResponse.json({ error: 'invalid Request', status: 400 });
    }
}
