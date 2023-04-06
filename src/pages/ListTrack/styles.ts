import styled from "styled-components";

export const ListTrackContainer = styled.div`
  display: grid;
  padding: 11rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
  gap: 3rem;
`;

export const EachTrack = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding: 1rem;
  min-width: 500px;
  max-width: 700px;
  height: 80px;
  width: 60%;
  background-color: #fff5;
`;
