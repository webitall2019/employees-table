import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";
import BarChart from "../BarChart";

describe("<BarChart/> component ", () => {
  it("check to be in the document", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BarChart />
      </Provider>
    );
    const barChartComponent = screen.getByTestId("barChart");
    expect(barChartComponent).toBeInTheDocument();
  });
  it("should match snapshot WHEN rendered", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BarChart />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
