import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

interface VideoYouTubeProps {
  data: {
    title: string
    videoEmbedId: string
  }
}

const IFrameContainer = styled('iframe', {
  left: '0',
  top: '0',
  height: '100%',
  width: '100%',
  position: 'absolute',
})

export const VideoYouTube: FunctionComponent<VideoYouTubeProps> = ({
  data,
}) => {
  return (
    <div>
      <IFrameContainer
        title={data.title}
        src={`https://www.youtube-nocookie.com/embed/${data.videoEmbedId}?playlist=${data.videoEmbedId}&autoplay=1&loop=1&controls=1&modestbranding=1&rel=0&disablekb=1&mute=1&muted=1`}
        width="1280"
        height="720"
        frameBorder="0"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      />
    </div>
  )
}
