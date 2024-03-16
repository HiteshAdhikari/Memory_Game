const MainCard = (props) => {
  const image = props.image;
  const value = props.value;
  return (
    <img
      onClick={(e) => {
        props.Click(value);
      }}
      src={image}
      alt={image}
      key={value}
      className="w-auto cursor-pointer"
    />
  );
};
export default MainCard;
