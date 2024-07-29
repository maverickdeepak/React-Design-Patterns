import { PropTypes } from "prop-types";
const LargeAuthorListItems = ({ author }) => {
  const { name, age, country, books } = author;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book}</li>
        ))}
      </ul>
    </div>
  );
};

export default LargeAuthorListItems;

LargeAuthorListItems.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
