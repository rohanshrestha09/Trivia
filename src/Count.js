const Count = ({ pointsChange, index }) => {
  return (
    <div className="points">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((element) =>
        element % 5 === 0 ? (
          <li
            style={{
              color: index === element - 1 && pointsChange,
            }}
            key={element}
          >
            &#x2015;&#x2015;&nbsp;{element} : {element * 5}p&nbsp;
            &#x2015;&#x2015;
          </li>
        ) : (
          <li
            style={{
              color: index === element - 1 && pointsChange,
            }}
            key={element}
          >
            {element} : {element * 5}p
          </li>
        )
      )}
    </div>
  );
};

export default Count;
