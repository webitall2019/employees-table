import React, { useState } from "react";
import "./app.scss";
import BarChart from "./components/BarChart/BarChart";
import PieChart from "./components/PieChart/PieChart";
import Modal from "./components/Modal/Modal";
import Table from "./components/Table/Table";
import NewEmployee from "./components/NewEmployee/NewEmployee";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandler = () => setIsOpen(prevState => !prevState);
  
  return (
    <div className="app">
      <div className="container">
        <button onClick={modalHandler} className="app__add-user">
          Add new Employee
        </button>
        <Table />
        <div className="charts">
          <PieChart />
          <BarChart />
        </div>
        {isOpen && (
          <Modal modalHandler={modalHandler}>
            <NewEmployee />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default App;

