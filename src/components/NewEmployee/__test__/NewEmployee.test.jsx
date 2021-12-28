import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewEmployee from "../NewEmployee";
import store from "../../../store/store";
import { Provider } from "react-redux";

describe("<NewEmployee/> component", () => {
  it("input user name", () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <NewEmployee />
      </Provider>
    );

    const inputUserName = screen.getByTestId("userName");
    const inputUserAge = screen.getByTestId("userAge");
    const selectUserjobTitle = screen.getByTestId("jobTitle");
    const selectUserGender = screen.getByTestId("gender");

    fireEvent.change(inputUserName, { target: { value: "Bob" } });
    fireEvent.change(inputUserAge, { target: { value: "25" } });
    fireEvent.change(selectUserjobTitle, { target: { value: "CEO" } });
    fireEvent.change(selectUserGender, { target: { value: "Female" } });

    expect(inputUserName.value).toBe("Bob");
    expect(inputUserAge.value).toBe("25");

    expect(selectUserjobTitle.value).toBe("CEO");
    expect(selectUserGender[0].selected).toBeFalsy();
    expect(selectUserGender[1].selected).toBeTruthy();
  });

  it("should match snapshot WHEN rendered", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <NewEmployee />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
