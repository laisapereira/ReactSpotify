import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  color: white;
  width: 100%;
  padding: 2rem 0;
  max-height: 100%;
  max-width: 100%;

  h1 {
    font-size: clamp(1.5rem, 5vw, 4rem);
  }
`;
