const panelStyle = {
  border: "2px solid black",
  margin: "20px",
  padding: "10px",
};

const Panel = ({ title, children, isActive, onAccordion }) => {
  return (
    <div style={panelStyle}>
      <h3>{title}</h3>

      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onAccordion}>show</button>
      )}
    </div>
  );
};

export default Panel;
