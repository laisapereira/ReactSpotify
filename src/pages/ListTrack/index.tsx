import React, { useEffect, useState } from "react";
import { ListTrackContainer } from "./styles";
import { ITrackSpotify } from "../../Types/tracks";
import { apiClient } from "../../api/spotify";
import { useLocation, useParams } from "react-router-dom";
import AudioPlayer from "./PlayerAudio";
import { EachTrack } from "./EachTrack";

export default function ListTrack() {
  const { albumId } = useParams<{ albumId: string }>();
  const location = useLocation();
  const albumImage = new URLSearchParams(location.search).get("albumImage");
  const [tracks, setTracks] = useState<ITrackSpotify>();

  useEffect(() => {
    const fetchTracks = async (albumId: string) => {
      try {
        const trackResponse = await apiClient.get<ITrackSpotify>(
          `/albums/${albumId}/tracks`
        );
        setTracks(trackResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    if (albumId !== undefined) {
      fetchTracks(albumId);
    }
  }, [albumId]);

  if (albumId === undefined) {
    return null;
  }

  function convertTime(time: number) {
    const minutes = Math.floor(time / 60000);
    const seconds = ((time % 60000) / 1000).toFixed(0);
    return `${minutes}:${Number(seconds) < 10 ? "0" : ""}${seconds}`;
  }
  return (
    <>
      <ListTrackContainer>
        {tracks?.items.map((track) => (
          <EachTrack key={track.id} albumImage={albumImage as string}>
            <h2>{track.name}</h2>
            <h3>Artista: {track.artists[0].name}</h3>
            <h3>Faixa {track.track_number}</h3>
            <h3>{convertTime(track.duration_ms)}</h3>
            {track.preview_url ? (
              <AudioPlayer src={track.preview_url} />
            ) : (
              <a
                href={track.external_urls.spotify}
                target="_blank"
                rel="noreferrer"
              >
                Ouça a demo
              </a>
            )}
          </EachTrack>
        ))}
      </ListTrackContainer>
    </>
  );
}
