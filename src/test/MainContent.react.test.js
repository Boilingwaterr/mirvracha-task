import React from "react";
import renderer from "react-test-renderer";

import { MainContent } from "../components/MainContent";

const list = [
  {
    name: "France",
  },
  {
    name: "Russian Federation",
  },
  {
    name: "The United States of America",
  },
];

const listSize = 10;

test("renders countries", () => {
  const component = renderer.create(
    <MainContent list={list} listSize={listSize} />
  );

  expect(component).toMatchSnapshot();
});
