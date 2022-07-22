import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { HeadingComponent } from ".";

describe("<HeadingComponent />", () => {
  it("should render heading component", () => {
    renderTheme(<HeadingComponent>Children</HeadingComponent>);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
