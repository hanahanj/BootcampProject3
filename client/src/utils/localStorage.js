export const getSavedShirtIds = () => {
  const savedShirtIds = localStorage.getItem('saved_shirts')
    ? JSON.parse(localStorage.getItem('saved_shirts'))
    : [];

  return savedShirtIds;
};

export const saveShirtIds = (shirtIdArr) => {
  if (shirtIdArr.length) {
    localStorage.setItem('saved_shirts', JSON.stringify(shirtIdArr));
  } else {
    localStorage.removeItem('saved_shirts');
  }
};

export const removeShirtId = (shirtId) => {
  const savedShirtIds = localStorage.getItem('saved_shirts')
    ? JSON.parse(localStorage.getItem('saved_shirts'))
    : null;

  if (!savedShirtIds) {
    return false;
  }

  const updatedSavedShirtIds = savedShirtIds?.filter((savedShirtId) => savedShirtId !== shirtId);
  localStorage.setItem('saved_shirts', JSON.stringify(updatedSavedShirtIds));

  return true;
};
