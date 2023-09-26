import React, { useState } from "react";
import "./ToDo.css";

const ToDo = ({ id, text, removeToDo, updateToDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(text);

  const toggleEdit = () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFormData(value);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    updateToDo(id, formData);
    setIsEditing(false);
  };

  const remove = () => removeToDo(id);

  if (isEditing) {
    return (
      <div>
        <form className="ToDo-edit-form" onSubmit={handleUpdate}>
          <label htmlFor="edit-text">Edit:</label>
          <input
            type="text"
            name="edit-text"
            value={formData}
            onChange={handleChange}
            placeholder="Edit this to do"
          />
          <button>Update</button>
        </form>
      </div>
    );
  }

  return (
    <div className="ToDo">
      <p className="ToDo-text">{text}</p>
      <button className="ToDo-edit" onClick={toggleEdit}>
        Edit
      </button>
      <button className="ToDo-remove" onClick={remove}>
        X
      </button>
    </div>
  );
};

export default ToDo;
