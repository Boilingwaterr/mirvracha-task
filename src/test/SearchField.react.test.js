import React from "react";
import renderer from "react-test-renderer";

import { SearchField } from "../components/SearchField";

test("renders countries", () => {
  const component = renderer.create(<SearchField inputValue="France" />);
  const inputValue = component.toJSON().children[0].props.value;

  expect(inputValue).toBe("France");
});
