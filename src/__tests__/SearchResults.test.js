import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";


describe("Search Results", () => {
    const { asFragment } = render(<SearchResults />);
  
    it("renders correctly", () => {
      expect(asFragment()).toMatchSnapshot();
    });
  });