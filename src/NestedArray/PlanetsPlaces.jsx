import React from "react";

const PlanetsPlaces = ({ place }) => {
  const childPlaces = place.childPlaces;
  console.log(childPlaces);

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlanetsPlaces key={place.id} place={place}></PlanetsPlaces>
          ))}
        </ol>
      )}
    </li>
  );
};

export default PlanetsPlaces;
