import { GearList } from '@/components/gme/b2b';
import { getGearList } from '@/lib/api-hub/server-actions';

const GearListPage = async () => {
    const res = await getGearList();

    return <GearList data={res} />;
};

export default GearListPage;
