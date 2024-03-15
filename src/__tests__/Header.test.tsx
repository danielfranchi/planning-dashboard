import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";

describe("Header", () => {
  it("renders the Header and responds to click events", () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <Header />
      </MemoryRouter>
    );

    const header = getByText("Vacation Plan");
    fireEvent.click(header);
  });
});
