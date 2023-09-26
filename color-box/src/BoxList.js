import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { useState } from "react";
import "./BoxList.css";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  const boxComponents = boxes.map((box) => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      backgroundColor={box.backgroundColor}
      removeBox={removeBox}
    />
  ));

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox} />
      {boxComponents}
    </div>
  );
};

export default BoxList;
