import React from "react";
import { act, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";
import Modal from "../Modal";
import NewEmployee from "../../NewEmployee/NewEmployee";

describe("<Modal/> component ", () => {
  it("check to be in document", () => {
    const { getByTestId } = render(<Modal />);
    const modal = screen.getByTestId("modalTestId");
    expect(modal).toBeInTheDocument();
  });
  it("should match snapshot WHEN rendered", async () => {
    const modalHandler = jest.fn();
    const { asFragment } = render(
      <Modal modalHandler={modalHandler}>
        <Provider store={store}>
          <NewEmployee />
        </Provider>
      </Modal>
    );
    act(async () => await expect(asFragment()).toMatchSnapshot());
  });
});
