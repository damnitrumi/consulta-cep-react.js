import styled, { css } from "styled-components";

export const Container = styled.h1`
  ${({ theme }) => css`
    max-width: auto;
    margin: ${theme.spacings.tiny} 0;
    color: red;
  `}
`;
