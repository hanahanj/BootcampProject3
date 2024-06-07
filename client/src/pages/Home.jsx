import { useQuery } from '@apollo/client';

import ShirtList from '../components/ShirtList';
import ProfileList from '../components/ProfileList';

import { QUERY_SHIRTS } from '../utils/queries';
import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_SHIRTS) || useQuery(QUERY_PROFILES);
  const shirts = data?.shirts || [];
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ShirtList
              shirts={shirts}
              title="Here's the current roster of friends..."
            />
          ) },
          { (
            <ProfileList
              profiles={profiles}
              title="Here are all the profiles"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
