import "./Box.css";

const Box = ({ id, width, height, backgroundColor, removeBox }) => {
  const remove = () => removeBox(id);

  return (
    <div className="Box">
      <div
        className="Box-box"
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor,
        }}
      ></div>
      <button onClick={remove}>X</button>
    </div>
  );
};

export default Box;
