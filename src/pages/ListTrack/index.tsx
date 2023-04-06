import React, { useEffect, useState } from "react";
import { EachTrack, ListTrackContainer } from "./styles";
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
      } catch (error) {}
    };
    if (albumId !== undefined) {
      fetchTracks(albumId);
    }
  }, [albumId]);

  if (albumId === undefined) {
    return null;
  }

  return (
    <ListTrackContainer>
      {tracks?.items.map((track) => (
        <EachTrack key={track.id}>
          <h2>{track.name}</h2>
          <h3>{track.artists[0].name}</h3>
          <h3>{track.track_number}</h3>
          <h3>{track.href}</h3>
        </EachTrack>
      ))}
    </ListTrackContainer>
  );
}
