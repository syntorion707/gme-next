import { serverFetcher } from '@/lib/api-hub';

export default async function Home() {
    const res = await serverFetcher('https://jsonplaceholder.typicode.com/posts/1');
    console.log(res);

    return <div>Homepage</div>;
}
