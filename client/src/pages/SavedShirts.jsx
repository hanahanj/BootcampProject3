import { useState, useEffect } from 'react';
import {
  Container,
  Card,
  Button,
  Row,
  Col
} from 'react-bootstrap';
import Auth from '../utils/auth';


const SavedShirts = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteShirt = async (shirtId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await deleteShirt(shirtId, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser);
      // upon success, remove shirts's id from localStorage
      removeShirtId(shirtId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved Shirts!</h1>
        </Container>
      </div>
      <Container>
        <h2 className='pt-5'>
          {userData.savedShirts.length
            ? `Viewing ${userData.savedShirts.length} saved ${userData.savedShirts.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved Shirts!'}
        </h2>
        <Row>
          {userData.savedShirts.map((shirt) => {
            return (
              <Col md="4">
                <Card key={shirt.shirtId} border='dark'>
                  {shirt.image ? <Card.Img src={shirt.image} alt={`The cover for ${shirt.title}`} variant='top' /> : null}
                  <Card.Body>
                    <Card.Title>{shirt.title}</Card.Title>
                    {/* <p className='small'>Authors: {book.authors}</p> */}
                    <Card.Text>{shirt.description}</Card.Text>
                    <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(shirt.shirtId)}>
                      Delete this Shirt!
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedShirts;
