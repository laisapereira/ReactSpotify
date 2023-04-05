import { CardAlbumContainer, Image } from "../styles";
import { IAlbumSpotify } from "../../../Types/types";

export default function CardAlbum() {

  return (
    <CardAlbumContainer>
      <Image>160X160</Image>
      <h1>Album Name</h1>
      <h2>Artist Name</h2>
      
    </CardAlbumContainer>
  );
}
