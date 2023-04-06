import { EachTrackContainer } from "./styles";

interface EachTrackProps {

  albumImage?: string;
  children?: React.ReactNode;
}
export function EachTrack({
 
  albumImage = "",
  children
}: EachTrackProps) {
  return (
    <EachTrackContainer>
      {albumImage && (
        <img className="image-each-track" src={albumImage} alt="Album cover" />
      )}
      {children}
    </EachTrackContainer>
  );
}