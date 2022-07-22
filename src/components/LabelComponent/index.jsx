import * as Styled from "./styles";
import P from "prop-types";

export const LabelComponent = ({ forId }) => {
  const refId =
    forId.toString().length <= 3
      ? forId.toUpperCase()
      : forId.charAt(0).toUpperCase() + forId.slice(1);
  return <Styled.Container htmlFor={forId}>{refId}</Styled.Container>;
};

LabelComponent.propTypes = {
  forId: P.string.isRequired,
};
