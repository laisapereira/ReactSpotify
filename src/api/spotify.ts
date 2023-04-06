import axios from "axios";

const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const authEndpoint = process.env.REACT_APP_SPOTIFY_AUTH_ENDPOINT;
const redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const scopes = ["user-library-read", "playlist-read-private", "streaming", "user-read-email", "user-read-private"];

export const loginEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1",
});

export const setClientToken = (token: string) => {
  apiClient.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};
