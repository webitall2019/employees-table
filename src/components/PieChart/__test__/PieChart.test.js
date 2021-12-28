import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";
import PieChart from "../PieChart";

describe("<PieChart/> component ", () => {
  it("check to be in the document", () => {
    render(
      <Provider store={store}>
        <PieChart />
      </Provider>
    );
    const pieChartComponent = screen.getByTestId("pieChart");
    expect(pieChartComponent).toBeInTheDocument();
    
  });
  it("should match snapshot WHEN rendered", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <PieChart />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
