import { get, map, keys } from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { useGetData } from "../../hooks/useGetData";

import "./table.scss";

const Table = () => {
  useGetData("./api/employees.json");
  const users = useSelector((state) => state.users);
  const titles = get(users, [0], []);

  const titlesRender = (titles) => {
    return map(keys(titles), (title) => {
      return (
        <div className="cell" key={title}>
          {title}
        </div>
      );
    });
  };
  return (
    <div className="table">
      <div className="table__header">
        <div className="row" data-testid="titleRender">
          {titlesRender(titles)}
        </div>
      </div>
      <div className="table__body">
        {map(users, (el, index) => {
          const genderLetter = get(el.gender, [0], "");

          return (
            <div className="row" key={`${el}_${index}`}>
              <div className="cell">
                <div className="name">{el.name}</div>
              </div>
              <div className="cell">
                <div className="job">{el.jobTitle}</div>
              </div>
              <div className="cell">
                <div className="tenure">{el.tenure}</div>
              </div>
              <div className="cell">
                <div className="gender">{genderLetter}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Table;
