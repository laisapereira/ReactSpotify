import React, { useEffect, useState } from "react";
import { EachTrack, ListTrackContainer } from "./styles";
import { ITrackSpotify } from "../../Types/tracks";
import { apiClient } from "../../api/spotify";
import { useParams } from "react-router-dom";
import AudioPlayer from "./PlayerAudio";
import { ArrowFatLineLeft } from "phosphor-react";

// colocar player de audio
// passar variáveis de ambiente para process.env
// criar botão de logout

export default function ListTrack() {
  const { albumId } = useParams<{ albumId: string }>();
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);
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

  return (
    <>

      <ListTrackContainer>
        {tracks?.items.map((track) => (
          <EachTrack key={track.id}>
            <h2>{track.name}</h2>
            <h3>{track.artists[0].name}</h3>
            <h3>Faixa {track.track_number}</h3>
            {track.preview_url ? (
              <AudioPlayer src={track.preview_url} />
            ) : (
              <a
                href={track.external_urls.spotify}
                onClick={() => setSelectedTrack(track.id)}
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
