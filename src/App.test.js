import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";
import Modal from "./components/Modal/Modal";
Modal;

describe("<App/> component", () => {
  it("should match snapshot WHEN rendered", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <App>
          <Modal />
        </App>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
