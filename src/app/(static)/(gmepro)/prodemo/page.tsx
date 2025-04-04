// import dynamic from 'next/dynamic';
import ProDemoOverview from './components/overview';

// const ProdemoPage = dynamic(() => import('./components/overview'), {
//   loading: () => <div>Loading Prodemo...</div>
// });

export default function Page() {
    return <ProDemoOverview />;
}
