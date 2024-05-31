// route to get logged in user's info (needs the token)
export const getMe = (token) => {
  return fetch('/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch('/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
};

// save shirt data for a logged in user
export const saveShirt = (shirtData, token) => {
  return fetch('/api/users', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(shirtData),
  });
};

// remove saved shirt data for a logged in user
export const deleteShirt = (shirtId, token) => {
  return fetch(`/api/users/shirts/${shirtId}`, {
    method: 'DELETE',
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
};

// make a search in seeds
export const searchShirts = (query) => {


  // return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
};
