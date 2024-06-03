import { useState, useEffect } from 'react';
import {
  Container,
  Col,
  Form,
  Button,
  Card,
  Row
} from 'react-bootstrap';

import Auth from '../utils/auth';
import { saveShirt, searchShirts } from '../utils/API';
import { saveShirtIds, getSavedShirtIds } from '../utils/localStorage';

const BrowseShirts = () => {
  // create state for holding returned google api data
  const [searchedShirts, setSearchedShirts] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  const [savedShirtIds, setSavedShirtIds] = useState(getSavedShirtIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveShirtIds(savedShirtIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const response = await searchShirts(searchInput);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { items } = await response.json();

      const shirtData = items.map((shirt) => ({
        shirtId: shirt.id,
        name: shirt.volumeInfo.name,
        style: shirt.volumeInfo.style,
        description: shirt.volumeInfo.description,
        image: shirt.volumeInfo.imageLinks?.thumbnail || '',
        color: shirt.volumeInfo.color
      }));

      setSearchedShirts(shirtData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveShirt = async (shirtId) => {
    // find the book in `searchedBooks` state by the matching id
    const shirtToSave = searchedShirts.find((shirt) => shirt.shirtId === shirtId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveShirt(shirtToSave, token);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      // if book successfully saves to user's account, save book id to state
      setSavedShirtIds([...savedShirtIds, shirtToSave.shirtId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-dark bg-light p-5">
        <Container>
          {/* <h1>Search for Shirts!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a shirt'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form> */}
        </Container>
      </div>

      <Container>
        <h1 className=' text-center pt-5'>
          {searchedShirts.length
            ? `Viewing ${searchedShirts.length} results:`
            : 'ZMJ is the best marketplace for custom clothing'}
        </h1>
        <Row>
          {searchedShirts.map((shirt) => {
            return (
              <Col md="4" key={shirt.shirtId}>
                <Card border='dark'>
                  {shirt.image ? (
                    <Card.Img src={shirt.image} alt={`The cover for ${shirt.name}`} variant='top' />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{shirt.name}</Card.Title>
                    <p className='small'>Style: {shirt.style}</p>
                    <Card.Text>{shirt.description}</Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedShirtIds?.some((savedShirtId) => savedShirtId === shirt.shirtId)}
                        className='btn-block btn-info'
                        onClick={() => handleSaveBook(shirt.shirtId)}>
                        {savedShirtIds?.some((savedShirtId) => savedShirtId === shirt.shirtId)
                          ? 'This shirt has already been saved!'
                          : 'Save this shirt!'}
                      </Button>
                    )}
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

export default BrowseShirts;
