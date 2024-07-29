import { PropTypes } from "prop-types";

export const SmallBookListItem = ({ books }) => {
  const { title, pages } = books;
  return (
    <div>
      <h2>Title: {title}</h2>
      <p>Pages: {pages}</p>
    </div>
  );
};

SmallBookListItem.propTypes = {
  books: PropTypes.shape({
    title: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
  }).isRequired,
};
