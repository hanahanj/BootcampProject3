import { useQuery } from '@apollo/client';

import ShirtList from '../components/ShirtList';

import { QUERY_SHIRTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_SHIRTS);
  const shirts = data?.shirts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ShirtList
              shirts={shirts}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
