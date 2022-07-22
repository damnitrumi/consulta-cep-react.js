import styled, { css } from "styled-components";

export const Container = styled.input`
  ${({ theme }) => css`
    padding: ${theme.spacings.tiny};
    outline-color: #0fccff;
    font-size: ${theme.font.sizes.small};
  `}
`;
