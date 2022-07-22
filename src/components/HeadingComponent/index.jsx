import * as Styled from "./styles";
import P from "prop-types";

export const HeadingComponent = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

HeadingComponent.propTypes = {
  children: P.string.isRequired,
};
