import React, { useState } from "react";
import Panel from "./Panel";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState();

  function handleAccordion(index) {
    setActiveIndex(index);
    console.log(activeIndex);
  }

  return (
    <div style={{ border: "2px solid red", margin: "20px" }}>
      <h1> Sharing State Between Components - Lifting state up</h1>
      <Panel
        title={"Paid"}
        isActive={activeIndex === 0 && true}
        onAccordion={() => handleAccordion(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, soluta,
        obcaecati iusto facilis illum, incidunt quas nisi fugit reprehenderit
        impedit laboriosam molestias quibusdam similique. Perspiciatis illo iste
        vel tempore dolores?
      </Panel>
      <Panel
        title={"Free"}
        isActive={activeIndex === 1 && true}
        onAccordion={() => handleAccordion(1)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum obcaecati
        voluptas, totam natus aliquam quam ad accusantium exercitationem
        praesentium hic fugiat, dicta molestiae aut suscipit quas aliquid iste
        vitae provident!
      </Panel>
    </div>
  );
};

export default Accordion;
