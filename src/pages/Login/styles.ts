import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #1f1f1f;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a {
    text-decoration: none;
  }
  button {
    border: 2px solid var(--primary);
    width: clamp(16vw, 14vw, 12vw);
    position:absolute;
    left: 42%;
    right: 50%;
    top: 65%;
    border-radius: 1.5rem;
    height: max-content;
    padding: 1.5rem;
    margin: 0 auto;
    color: black;
    font-weight: 700;
    font-size: 1rem;
    background-color: white;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.7;

    &:hover {
      transform: scale(1.1);
      cursor: pointer;
      opacity: 0.9;
    }
  }
`;
