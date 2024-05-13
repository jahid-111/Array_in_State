import React from "react";

const Planets = ({ id, placeByID }) => {
  const place = placeByID[id];
  const child_ID = place.childIds;

  return (
    <div>
      <li>
        {place.title}
        {child_ID.length > 0 && (
          <ol>
            {child_ID.map((id) => (
              <Planets key={id} id={id} placeByID={placeByID}></Planets>
            ))}
          </ol>
        )}
      </li>
    </div>
  );
};

export default Planets;
