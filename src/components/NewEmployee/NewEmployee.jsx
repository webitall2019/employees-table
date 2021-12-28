import { useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import "./form.scss";

const NewEmployee = () => {
  const [newEmployee, setNewEmployee] = useState({});
  const [name, setName] = useState("");
  const [tenure, setAge] = useState("");
  const [jobTitle, setJob] = useState("CEO");
  const [gender, setGender] = useState("Male");
  const dispatch = useDispatch();

  useEffect(() => {
    setNewEmployee({
      name,
      tenure,
      jobTitle,
      gender,
    });
  }, [name, tenure, jobTitle, gender]);

  const submithandler = async (e) => {
    e.preventDefault();
    dispatch({ type: "newUser", payload: newEmployee });
  };

  return (
    <div className="form__wrap">
      <h1>Become one of the team</h1>
      <form onSubmit={submithandler}>
        <div className="form__group">
          <input
            data-testid="userName"
            required
            placeholder="your name"
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            data-testid="userAge"
            required
            placeholder="your age"
            type="number"
            name="tenure"
            value={tenure}
            onChange={(e) => setAge(e.target.value)}
          />
          <select
            data-testid="jobTitle"
            name="jobTitle"
            onChange={(e) => setJob(e.target.value)}
            required
          >
            <option value="CEO">CEO</option>
            <option value="Developer">Developer</option>
            <option value="Marketing Specialist">Marketing Specialist</option>
            <option value="CFO">CFO</option>
            <option value="QA">QA</option>
          </select>
          <select
            data-testid="gender"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
};
export default NewEmployee;
