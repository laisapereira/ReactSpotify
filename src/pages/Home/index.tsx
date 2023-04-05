import { useState } from "react";
import { IAlbumSpotify } from "../../Types/types";

import AlbumGallery from "../../Components/AlbumGallery";
import { HomeContainer } from "./styles";
import { apiClient } from "../../api/spotify";

export function Home() {
  const [albums, setAlbums] = useState<IAlbumSpotify[] | null>();
  const [searchKey, setSearchKey] = useState("");
  const token = window.localStorage.getItem("token");

  function searchAlbum() {
    const dataAlbum = async () => {
      try {
        const albumResponse = await apiClient.get("/search", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: searchKey,
            type: "album",
          },
        });
        setAlbums(albumResponse.data);
        console.log(albumResponse.data.albums.items);
      } catch (error) {
        console.log(error);
      }
    };
    dataAlbum();
  }
  return (
    <HomeContainer>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
        <button onClick={searchAlbum}>Search</button>
      </form>
      <AlbumGallery />
    </HomeContainer>
  );
}
