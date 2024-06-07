import { Link } from 'react-router-dom';

const ShirtList = ({ shirts, name }) => {
  if (!shirts.length) {
    return <h3>No Shirts Yet</h3>;
  }

  return (
    <div>
      <h3 className="text-primary">{name}</h3>
      <div className="flex-row justify-space-between my-4">
        {shirts &&
          shirts.map((shirt) => (
            <div key={shirt._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {shirt.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    Comes in {shirt.sizes ? shirt.sizes.length : 0}{' '}sizes
                  </span><br/>
                  <span className='text-white' style={{ fontSize: '1rem' }}>
                    {shirt.description}
                  </span>
                </h4>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShirtList;
