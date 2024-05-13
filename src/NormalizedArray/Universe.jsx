import React, { useState } from "react";
import { initialTravelPlanTwo } from "./Normalized";
import Planets from "./Planets";

const Universe = () => {
  const [data, setData] = useState(initialTravelPlanTwo);
  const root = data[0];

  const planets_ID = root.childIds;
  return (
    <div>
      <h3>
        <u>Normalalized Data</u>
      </h3>
      <ol>
        {planets_ID.map((placeId) => (
          <Planets key={placeId} id={placeId} placeByID={data}>
            {" "}
          </Planets>
        ))}
      </ol>
    </div>
  );
};

export default Universe;
