interface IAudioPlayerProps {
  src: string
}


export default function AudioPlayer({ src }: IAudioPlayerProps) {
  return <audio controls src={src} />
}