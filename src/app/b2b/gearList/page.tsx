import { GearList } from '@/components/gme/b2b';
import { getGearList } from '@/lib/api-hub/server-actions';

const GearListPage = async () => {
    const gearList = await getGearList();
    
return <GearList data={gearList} />;
};

export default GearListPage;
