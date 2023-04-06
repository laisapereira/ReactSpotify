import { SpotifyLogo } from "phosphor-react";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <SpotifyLogo size={200} color="white" />
      </a>
      <h1> ReactSpotify</h1>
    </HeaderContainer>
  );
}
