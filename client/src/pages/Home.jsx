import { useQuery } from '@apollo/client';

import ShirtList from '../components/ShirtList';

import { QUERY_SHIRTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_SHIRTS);
  const shirts = data?.shirts || [];

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
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
