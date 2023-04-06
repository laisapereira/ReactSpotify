import styled from "styled-components";

export const ListTrackContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 0;
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
  gap: 3rem;

  h2 {
    color: white;
  }

  .title-album {
    font-size: clamp(2rem, 3rem, 2.5vw);
  }
`;

export const EachTrackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem;
  min-width: 500px;
  max-width: 54%;
  border-radius: 1rem;
  height: 80px;
  width: 90%;
  background-color: #fff5;

  .image-each-track {
    width: 90px;
    height: 80px;
    max-width: 150px;
  }

  @media screen and (min-width: 300px) and (max-width: 649px) {
    flex-direction: column;
    min-width: 200px;
    max-width: 70%;
    height: 40rem;
    gap: 0;

    .image-each-track {
      max-width: 17rem;
      width: 15rem;
      height: 15rem;
    }
  }

  @media screen and (min-width: 650px) and (max-width: 950px) {
    max-width: 80%;
  }
`;
