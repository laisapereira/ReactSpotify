import { SpotifyLogo } from "phosphor-react";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <SpotifyLogo size={200} color="green" />
      <h1> React Spotify</h1>
    </HeaderContainer>
  );
}
