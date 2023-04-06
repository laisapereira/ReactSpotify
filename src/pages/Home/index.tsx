import { useState, useCallback } from "react";
import { IAlbumSpotify } from "../../Types/albums";
import { HomeContainer } from "./styles";
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

 /*  const navigate = useNavigate();
 /*  const handleAlbumClick = (albumId:string) => {
    navigate(`/albums/${albumId}/tracks`)
  } */ 

  return (
    <HomeContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            delayedSearchAlbum(e.target.value);
          }}
        />
      </form>
      <div className="teste">
        {albums?.albums.items.map((album) => (
          <div key={album.id}>
            <img src={album.images[0].url} alt="" />
            <h2>{album.name}</h2>
            <h3>{album.artists[0].name}</h3>
            <h3>{album.release_date.split("")}</h3>
            <Link to={`/albums/${album.id}/tracks`}><button>Ver faixas</button></Link>
          </div>
        ))}
      </div>
      )
    </HomeContainer>
  );
}
