import PropTypes from 'prop-types'

import { styled } from '~/stitches'

const IFrameContainer = styled('iframe', {
  left: '0',
  top: '0',
  height: '100%',
  width: '100%',
  position: 'absolute',
})

export const VideoYouTube = ({ data }: any) => {
  return (
    <IFrameContainer
      title={data.title}
      src={`https://www.youtube.com/embed/${data.videoEmbedId}?controls=0`}
      width="1280"
      height="720"
      frameBorder="0"
      allowFullScreen
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  )
}
