import React, { useState } from "react";

const initialState = {
  name: "",
};

export default function FindWilling() {
  const [values, setValues] = useState(initialState);
  const [filter, setFilter] = useState("");

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
          <h2>find willing</h2>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">title</label>
            <input
              value={values.name}
              name="name"
              type="text"
              onChange={handleSubmit}
            />
          </div>
          <div>
            <select name="" id="">
              <option value="">example</option>
            </select>
          </div>
          <div>
            <input
              type="text"
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
