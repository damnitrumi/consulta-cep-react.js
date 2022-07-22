import * as Styled from "./styles";
import P from "prop-types";
import { LabelComponent } from "../LabelComponent";
import { InputComponent } from "../InputComponent";

export const FieldContainer = ({ forId, onBlur = "", value = "" }) => {
  return (
    <Styled.Container>
      <LabelComponent forId={forId} />
      <InputComponent onBlur={onBlur} id={forId} value={value} />
    </Styled.Container>
  );
};

FieldContainer.propTypes = {
  forId: P.string.isRequired,
  onBlur: P.oneOfType([P.string, P.func]),
  value: P.string,
};
