import styled from "styled-components";

export const HomeContainer = styled.div`
  padding: 10rem;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  form {
    display: flex;
    width: 55%;
    height: 3.3125rem;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  input {
    border: 0px;
    border-bottom: 2px solid white;
    width: 100%;
    font-size: clamp(2vw, 3vw, 3.5vw);
    line-height: 4vw;
    height: 2.5rem;
    margin: 0 auto;
    padding: 5px 10px;
    color: white;
    font-weight: normal;
    background-color: transparent;
    outline: 0;
    @media (max-width: 560px) {
      padding: 2px 10px 0px;
      margin-bottom: 5px;
    }
    &:placeholder {
      color: white;
      font-weight: normal;
    }
  }
`;

export const MusicGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem 3rem;
  max-width: 90%;
  margin: 0 auto;
`;

export const EachAlbumGallery = styled.div`
  max-width: 100%;
  max-height: 100%;
  border-radius: 1rem;
  background-color: rgb(48, 48, 48);

  a {
    text-decoration: none;
    color: black;
  }
  img {
    width: 24rem;
    height: 380px;
    max-width: 30rem;
    max-height: 90%;
    padding: 1rem;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    background-color: rgba(70, 68, 68, 1)
  }

  h2 {
    color: white;

  }

  h3, h4 {
    color:#c9c9c9;
  }
`;
