import { useState } from "react";
import { FieldContainer } from "../../components/FieldContainer";
import { HeadingComponent } from "../../components/HeadingComponent";
import * as Styled from "./styles";

export const Home = () => {
  const [data, setData] = useState({});

  const handleIBlur = async (e) => {
    try {
      let inputValue = e.target.value;
      inputValue = inputValue.replace("-", "");

      if (inputValue.length < 8 || inputValue.length > 8) {
        setData({ size: "wrong" });
        return;
      }

      const startUrl = "https://viacep.com.br/ws/";
      const endUrl = "/json/";
      const finalUrl = `${startUrl}${inputValue}${endUrl}`;
      const cepFetch = await fetch(finalUrl);
      const cepData = await cepFetch.json();
      setData(cepData);
    } catch (e) {
      setData(e);
    }
  };

  const logradouro = data.logradouro ? data.logradouro : "";
  const complemento = data.complemento ? data.complemento : "";
  const bairro = data.bairro ? data.bairro : "";
  const localidade = data.localidade ? data.localidade : "";
  const uf = data.uf ? data.uf : "";

  return (
    <Styled.Container>
      {data.erro && (
        <HeadingComponent>CEP NÃO ENCONTRADO NA BASE DE DADOS</HeadingComponent>
      )}
      {data.size && (
        <HeadingComponent>
          TAMANHO DE CEP INVÁLIDO! VERIFIQUE NOVAMENTE
        </HeadingComponent>
      )}
      <FieldContainer forId="cep" onBlur={handleIBlur} />
      <FieldContainer forId="logradouro" value={logradouro} />
      <FieldContainer forId="complemento" value={complemento} />
      <FieldContainer forId="bairro" value={bairro} />
      <FieldContainer forId="localidade" value={localidade} />
      <FieldContainer forId="uf" value={uf} />
    </Styled.Container>
  );
};
