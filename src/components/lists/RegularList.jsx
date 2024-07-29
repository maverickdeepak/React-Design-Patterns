import { PropTypes } from "prop-types";
const RegularList = ({ items, sourceName, ItemComponent }) => {
  return (
    <>
      {items.map((item, index) => (
        <ItemComponent key={index} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;

RegularList.propTypes = {
  items: PropTypes.array.isRequired,
  sourceName: PropTypes.string.isRequired,
  ItemComponent: PropTypes.elementType.isRequired,
};
