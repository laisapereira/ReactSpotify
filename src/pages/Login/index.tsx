import { SpotifyLogo } from "phosphor-react";
import React from "react";

import { LoginContainer } from "./styles";
import { loginEndpoint } from "../../api/spotify";

export default function Login() {
  return (
    <LoginContainer>
      <SpotifyLogo size={200} color="green" />
      <a href={loginEndpoint}>
        <button>LOG IN</button>
      </a>
    </LoginContainer>
  );
}
