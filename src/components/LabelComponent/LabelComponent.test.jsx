import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { LabelComponent } from ".";

describe("<LabelComponent />", () => {
  it("should render LabelComponent", () => {
    renderTheme(<LabelComponent forId="teste" />);
    const label = screen.getByText(/Teste/i);
    expect(label).toHaveAttribute("for", "teste");
  });

  it("should render LabelComponent with a small id", () => {
    renderTheme(<LabelComponent forId="cep" />);
    const label = screen.getByText(/cep/i);
    expect(label).toHaveAttribute("for", "cep");
  });

  it("should render match snapshot", () => {
    renderTheme(<LabelComponent forId="teste" />);
    const label = screen.getByText(/Teste/i);
    expect(label).toMatchSnapshot();
  });
});
