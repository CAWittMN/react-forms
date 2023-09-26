import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./NewToDoForm.css";

const NewToDoForm = ({ addToDo }) => {
  const INITIAL_STATE = { text: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldFormData) => ({
      ...oldFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  };

  return (
    <form className="NewToDoForm" onSubmit={handleSubmit}>
      <label htmlFor="text">New To Do:</label>
      <input
        id="text"
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
      />
      <button>Add To Do</button>
    </form>
  );
};

export default NewToDoForm;
