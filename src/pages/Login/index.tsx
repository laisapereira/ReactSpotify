import React from "react";

import { LoginContainer } from "./styles";
import { loginEndpoint } from "../../api/spotify";

export default function Login() {
  return (
    <LoginContainer>
      <a href={loginEndpoint}>
        <button>LOG IN</button>
      </a>
    </LoginContainer>
  );
}
