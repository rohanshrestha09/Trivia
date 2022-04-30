const Ans = ({
  database,
  index,
  pointsUpdate,
  styleChangeTrue,
  styleChangeFalse,
  colorUpdate,
  pointer,
}) => {
  return (
    <div
      className="ansSection"
      onClick={colorUpdate}
      style={{ pointerEvents: pointer }}
    >
      {database[index].ans.map((element) => (
        <div
          key={element}
          style={{
            backgroundColor:
              element === database[index].correction
                ? styleChangeTrue
                : styleChangeFalse,
          }}
          onClick={element === database[index].correction ? pointsUpdate : null}
        >
          {element}
        </div>
      ))}
    </div>
  );
};

export default Ans;
