import React from "react";

const Planets = ({ id, placeByID, onVisited, parentId }) => {
  const place = placeByID[id];
  const child_ID = place.childIds;

  return (
    <div>
      <li>
        {place.title}{" "}
        <button onClick={() => onVisited(parentId, id)}>Visited</button>
        {child_ID.length > 0 && (
          <ol>
            {child_ID.map((id) => (
              <Planets
                key={id}
                id={id}
                parentId={parentId}
                placeByID={placeByID}
                onVisited={onVisited}
              ></Planets>
            ))}
          </ol>
        )}
      </li>
    </div>
  );
};

export default Planets;
