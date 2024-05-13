import React, { useState } from "react";
import { initialTravelPlan } from "./arrray";
import PlanetsPlaces from "./PlanetsPlaces";

const TravalUniverse = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <div>
      <h3>Places Of Universe</h3>
      <ol>
        {planets.map((place) => (
          <PlanetsPlaces key={place.id} place={place}>
            {" "}
          </PlanetsPlaces>
        ))}
      </ol>
    </div>
  );
};

export default TravalUniverse;
