import { renderTheme } from "../../styles/render-theme";
import { FieldContainer } from ".";

describe("<FieldContainer />", () => {
  it("should render", () => {
    const { container } = renderTheme(<FieldContainer forId="teste" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
