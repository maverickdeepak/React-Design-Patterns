import { PropTypes } from "prop-types";
const SmallAuthorListItems = ({ author }) => {
  const { name, age } = author;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default SmallAuthorListItems;

SmallAuthorListItems.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};
