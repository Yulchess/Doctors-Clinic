import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing[0]} auto;
  max-width: ${({ theme }) => theme.width[17]}px;
`;
