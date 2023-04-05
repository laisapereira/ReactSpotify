import React from "react";

import { AlbumGalleryContainer, CardAlbumContainer, Image } from "./styles";


export default function AlbumGallery() {
  return (
    <AlbumGalleryContainer>
      <CardAlbumContainer>
        <Image>160X160</Image>
         <h1>Album Name</h1>
         <h2>Artist Name</h2>
      </CardAlbumContainer>
    </AlbumGalleryContainer>
  );
}
