import React, { useState } from "react";
import { initialTravelPlanTwo } from "./Normalized";
import Planets from "./Planets";

const Universe = () => {
  const [data, setData] = useState(initialTravelPlanTwo);
  const root = data[0];

  const handleVisited = (parentId, childId) => {
    const parent = data[parentId];
    console.log(parentId);
    const nextParent = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    console.log(nextParent)

    setData({
      ...data,
      [parentId]: nextParent,
    });
  };

  const planets_ID = root.childIds;
  return (
    <div>
      <h3>
        <u>Normalalized Data</u>
      </h3>
      <ol>
        {planets_ID.map((placeId) => (
          <Planets
            key={placeId}
            id={placeId}
            placeByID={data}
            onVisited={handleVisited}
            parentId={0}
          >
            {" "}
          </Planets>
        ))}
      </ol>
    </div>
  );
};

export default Universe;
