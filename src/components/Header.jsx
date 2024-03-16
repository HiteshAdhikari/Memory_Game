const Header = (props) => {
  return (
    <div className="flex justify-between mt-4 mx-2 mb-4">
      <div className="flex flex-col">
        <h1 className="text-5xl font-extrabold ">Memory Card Game</h1>
        <h1 className="text-xl font-thin mt-2 ">
          Click on cards to earn points, but don't click the same card twice!
        </h1>
      </div>

      <div className="text-xl font-mono font-semibold mr-4">
        <h2>Current Score: {props.score}</h2>
        <h2>Best Score: {props.best}</h2>
      </div>
    </div>
  );
};
export default Header;
