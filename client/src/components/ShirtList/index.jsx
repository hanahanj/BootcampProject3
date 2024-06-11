import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { ADD_ORDER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const ShirtList = ({ shirts, name, profileId }) => {
  const [addOrder, { error }] = useMutation(ADD_ORDER);
  
  const handleAddShirt = async (shirtName) => {
    try {
      const { data } = await addOrder({
        variables: { profileId, shirt: shirtName },
      });

      if (data) {
        console.log("Shirt added to profile successfully!");
      }
    } catch (err) {
      console.error(err);
    }
  };

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
                  {shirt.name} - {shirt.style} <br />
                  <img src={shirt.image} style={{ width: '100%', background: 'white', padding: '1rem' }}></img>
                  <span className='text-white' style={{ fontSize: '1rem' }}>
                    {shirt.description}
                  </span>
                 
                  <div className = "mt-3">
                  <Button onClick={() => handleAddShirt(shirt.name)}>Add Shirt to Cart</Button>
                  </div>
                  
                  
                </h4>
               
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShirtList;
