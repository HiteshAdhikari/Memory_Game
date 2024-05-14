import "./Header.css";
const Header = (props) => {
  return (
    <div className="sm:flex sm:justify-between block mt-4 mx-2 mb-4">
      <div className="flex flex-col">
        <h1 className="sm:text-6xl sm:text-left text-2xl text-center font-extrabold ">
          Memory Card Game
        </h1>

        <h1 className="sm:text-xl sm:text-left text-center font-thin mt-2 ">
          Click on cards to earn points, but don't click the same card twice!
        </h1>
      </div>

      <div className="sm:text-xl sm:flex-col sm:justify-normal mt-2 text-lg flex justify-evenly font-mono font-semibold mr-4">
        <h2>Current Score: {props.score}</h2>
        <h2>Best Score: {props.best}</h2>
      </div>
    </div>
  );
};
export default Header;
