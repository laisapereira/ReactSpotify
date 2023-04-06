import { SpotifyLogo } from "phosphor-react";
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <a href="/">
        <SpotifyLogo size={"clamp:(8vw, 8rem, 10vw)"} color="white" />
      </a>
      <h1> ReactSpotify</h1>
    </HeaderContainer>
  );
}
