const GameCard = () => {
  return (
    <div id="gameCardContainer" className="flex flex-column">
      <div id="gameImgContainer">
        <img></img>
      </div>
      <div id="gameContentContainer">
        <div className="flex flex-row justify-between" id="gameDetails">
          <div id="gamePlatforms"></div>
          <div id="gameScore"></div>
        </div>
        <h1>GameTitle</h1>
        <img></img>
      </div>
    </div>
  );
};
