import styled, { css } from "styled-components";

export const Container = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
`;
