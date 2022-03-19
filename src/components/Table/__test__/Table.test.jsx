import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import Table from "../Table";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";

describe(" <Table/> component", () => {
  it("check redux", async () => {
    render(
      <Provider store={store}>
        <Table />
      </Provider>
    );

    act(async () => {
      await expect(screen.queryByText(/name/i).toBeInTheDocument());
      await expect(screen.queryByText(/jobtitle/i).toBeInTheDocument());
      await expect(screen.queryByText(/tenure/i).toBeInTheDocument());
      await expect(screen.queryByText(/gender/i).toBeInTheDocument());
    });
  });

  it("should match snapshot WHEN rendered", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Table />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
