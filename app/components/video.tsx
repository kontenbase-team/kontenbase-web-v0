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
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${data.videoEmbedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
