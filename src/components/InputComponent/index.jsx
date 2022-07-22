import * as Styled from "./styles";
import P from "prop-types";

//Colocar prop value no componente sem função pois assim que vamos receber os valores da API

export const InputComponent = ({ onBlur = "", id, value = "" }) => {
  if (typeof onBlur === "function") {
    return (
      <Styled.Container
        onBlur={onBlur}
        type="text"
        id={id}
        placeholder="Digite seu CEP (ex: 00000-000) e pressione a tecla 'tab' ou clique fora do campo de pesquisa"
      />
    );
  }

  return (
    <Styled.Container
      type="text"
      id={id}
      placeholder="Digite seu CEP no primeiro campo"
      value={value}
      readOnly
    />
  );
};

InputComponent.propTypes = {
  onBlur: P.oneOfType([P.string, P.func]),
  id: P.string.isRequired,
  value: P.string,
};
