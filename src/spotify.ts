const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "5553994935574a0d9f4cdf2baa2250a7";
const redirect_uri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
