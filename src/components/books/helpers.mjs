const validateListSortQuery = (query) => {
  let isSortQueryValid = true;
  const validFields = [
    'id',
    'title',
    'date',
    'description',
    'image',
    'author_first_name',
    'author_last_name',
  ];

  query.sort.forEach((sortCriteria) => {
    const isFieldValid = validFields.includes(sortCriteria[0]);

    if (!isFieldValid) {
      isSortQueryValid = false;
    }
  });

  return isSortQueryValid;
};

const validateCreateBody = () => true;

const sortDirectionIdentifier = (direction) => {
  if (!direction) return '';

  const capitalizedDirection = direction.toUpperCase();

  switch (capitalizedDirection) {
    case 'ASC':
      return 'ASC';
    case 'DESC':
      return 'DESC';
    default:
      return '';
  }
};

export { validateListSortQuery, validateCreateBody, sortDirectionIdentifier };
