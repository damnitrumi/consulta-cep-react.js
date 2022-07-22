import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";
import { InputComponent } from ".";
import userEvent from "@testing-library/user-event";

describe("<InputComponent />", () => {
  it("should render with function and call function", () => {
    const fn = jest.fn();
    renderTheme(<InputComponent onBlur={fn} id="teste" />);

    const input = screen.getByPlaceholderText(/Digite seu CEP/i);
    userEvent.type(input, "00000000");
    userEvent.tab();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should render with function and call function snapshot", () => {
    const fn = jest.fn();
    renderTheme(<InputComponent onBlur={fn} id="teste" />);

    const input = screen.getByPlaceholderText(/Digite seu CEP/i);
    expect(input).toMatchSnapshot();
  });

  it("should render without function", () => {
    renderTheme(<InputComponent id="teste" />);
    const input = screen.getByPlaceholderText(
      "Digite seu CEP no primeiro campo"
    );

    expect(input).toHaveAttribute(
      "placeholder",
      "Digite seu CEP no primeiro campo"
    );
  });

  it("should render without function snapshot", () => {
    renderTheme(<InputComponent id="teste" />);
    const input = screen.getByPlaceholderText(
      "Digite seu CEP no primeiro campo"
    );

    expect(input).toMatchSnapshot();
  });
});
