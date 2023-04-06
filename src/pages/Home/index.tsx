import { useState, useCallback } from "react";
import { IAlbumSpotify } from "../../Types/albums";
import { EachAlbumGallery, HomeContainer, MusicGallery } from "./styles";
import { apiClient } from "../../api/spotify";
import { debounce } from "../../Utils/debounce";
import { Link } from "react-router-dom";

export function Home() {
  const [albums, setAlbums] = useState<IAlbumSpotify | null>();

  const token = window.localStorage.getItem("token");

  const searchAlbum = async (searchKey: string) => {
    if (searchKey === "") return setAlbums(null);

    try {
      const albumResponse = await apiClient.get<IAlbumSpotify>("/search", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "album",
          limit: 10,
        },
      });
      setAlbums(albumResponse.data);
      console.log(albums?.albums);
    } catch (error) {
      console.log(error);
    }
  };

  const delayedSearchAlbum = useCallback(
    debounce((searchKey: string) => searchAlbum(searchKey), 100),
    []
  );

  return (
    <HomeContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Pesquise um álbum ou artista..."
          onChange={(e) => {
            delayedSearchAlbum(e.target.value);
          }}
        />
      </form>
      <MusicGallery>
        {albums?.albums.items.map((album) => (
          <EachAlbumGallery key={album.id}>
            <Link to={`/albums/${album.id}/tracks`}>
              <img src={album.images[0].url} alt="" />
              <h2>{album.name}</h2>
              <h3>{album.artists[0].name}</h3>
              <h4>{album.release_date.split("")}</h4>
            </Link>
          </EachAlbumGallery>
        ))}
      </MusicGallery>
    </HomeContainer>
  );
}
