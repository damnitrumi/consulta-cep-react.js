import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.tiny};
    margin-bottom: ${theme.spacings.medium};
  `}
`;
