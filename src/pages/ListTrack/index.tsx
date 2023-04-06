import React, { useEffect, useState } from "react";
import { ListTrackContainer } from "./styles";
import { ITrackSpotify } from "../../Types/tracks";
import { apiClient } from "../../api/spotify";
import { useParams } from "react-router-dom";

export default function ListTrack() {
  const { albumId } = useParams<{ albumId: string }>();
  const [tracks, setTracks] = useState<ITrackSpotify>();

  useEffect(() => {
    const fetchTracks = async (albumId: string) => {
      try {
        const trackResponse = await apiClient.get<ITrackSpotify>(
          `/albums/${albumId}/tracks`
        );
        setTracks(trackResponse.data);
        console.log(albumId);
      } catch (error) {}
    };

    fetchTracks(albumId as string);
  }, [albumId]);

  return (
    <ListTrackContainer>
      {tracks?.items.map((track) => (
        <div key={track.id}>
          <h2>{track.name}</h2>
          <h3>{track.artists[0].name}</h3>
          <h3>{track.duration_ms}</h3>
        </div>
      ))}
    </ListTrackContainer>
  );
}
