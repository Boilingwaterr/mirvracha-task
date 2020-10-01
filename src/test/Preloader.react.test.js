import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import { App } from "../App";
import { store, setFetching } from "../redux/store";

test("render Preloader", () => {
  store.dispatch(setFetching(true));
  const component = renderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(component).toMatchSnapshot(); //expecting to snapshot <Preloader/>
});
