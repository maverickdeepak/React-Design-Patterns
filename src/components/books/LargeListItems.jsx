import { PropTypes } from "prop-types";
export const LargeBookListItem = ({ books }) => {
  const { title, price, year, author } = books;

  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{year}</p>
      <p>{author}</p>
    </div>
  );
};

LargeBookListItem.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};
