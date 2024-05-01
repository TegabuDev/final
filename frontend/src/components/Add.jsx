import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  title: "",
  city: "",
  description: "",
};

export default function Add() {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div className="add-container">
      <div className="add-card">
        <div>
          <h2>add page</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">title</label>
            <input
              value={values.title}
              name="title"
              type="text"
              onChange={handleSubmit}
            />
          </div>
          <div>
            <label htmlFor="">City</label>
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleSubmit}
            />
          </div>
          <div>
            <label htmlFor="">Description</label>
            <input
              type="text"
              maxLength={200}
              required
              name="description"
              value={values.description}
              onChange={handleSubmit}
            />
          </div>
          <div>
            <button onClick={() => navigate("/")}>add</button>
          </div>
        </form>
      </div>
    </div>
  );
}
