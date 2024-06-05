import { Link } from 'react-router-dom';

const ShirtList = ({
  shirts,
  name,
  showName = true,
}) => {
  if (!shirts.length) {
    return <h3>No Shirts Yet</h3>;
  }

  return (
    <div>
      {showName && <h3>{name}</h3>}
      {shirts &&
        shirts.map((shirt) => (
          <div key={shirt._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
            <Link
              to={`/shirts/${shirt._id}`}
            >
              {name}
            </Link>
            </h4>
            <div className="card-body bg-light p-2">
              <Image
                src={shirt.image} alt='Shirt Image'
              >
              </Image>
              <h5 className='text-dark p-2 m-0'>{shirt.style}</h5>
              <p>{shirt.description}</p>
              <p>Available in {shirt.sizes} sizes and {shirt.colors} colors</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShirtList;
