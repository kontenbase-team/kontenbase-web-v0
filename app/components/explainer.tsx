import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Paragraph, AspectRatio, VideoYouTube } from '~/components'

export type Explainer = {
  slug: string
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
  videoEmbedId?: string
  direction: 'left' | 'right' | undefined
}

interface ExplainerProps {
  step: number
  explainer: Explainer
}

const ExplainerSectionContainer = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  '@tv': { justifyContent: 'flex-start' },
})

const ExplainerTextMedia = styled('div', {
  gap: '$10',
  width: '$full',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '720px',
  '@tv': { maxWidth: '100%' },
  variants: {
    direction: {
      right: {
        flexDirection: 'column',
        '@tv': { flexDirection: 'row' },
      },
      left: {
        flexDirection: 'column',
        '@tv': { flexDirection: 'row-reverse' },
      },
    },
  },
})

/**
 * Text
 */
const ExplainerText = styled('div', {
  maxWidth: '500px',
  minWidth: '300px',
})

const StepName = styled('span', {
  textTransform: 'uppercase',
  fontWeight: '$bold',
  fontSize: '$6',
  color: '$brand11',
})

const StepTitle = styled('h4', {
  my: '$5',
  fontSize: '$8',
  '@tablet': { fontSize: '$9' },
  '@desktop': { fontSize: '$10' },
})

const StepDescription = styled(Paragraph, {
  fontSize: '$5',
})

/**
 * Media
 */
const ExplainerMedia = styled('div', {
  borderRadius: '0.25rem',
  border: '0.5rem solid $red3',
  overflow: 'hidden',
  maxWidth: '800px',
  width: '100%',
})

const ExplainerImage = styled('img', {
  borderRadius: '0.25rem',
  objectFit: 'cover',
  width: '100%',
  height: '100%',
})

export const ExplainerSection: FunctionComponent<ExplainerProps> = ({
  step,
  explainer,
}) => {
  return (
    <ExplainerSectionContainer>
      <ExplainerTextMedia direction={explainer.direction}>
        <ExplainerText>
          <StepName>Step {step}</StepName>
          <StepTitle>{explainer.title}</StepTitle>
          <StepDescription>{explainer.description}</StepDescription>
        </ExplainerText>

        <ExplainerMedia>
          <AspectRatio.Root ratio={16 / 9}>
            {explainer.videoUrl && explainer.videoEmbedId ? (
              <ExplainerVideo explainer={explainer} />
            ) : (
              <ExplainerImage alt={explainer.title} src={explainer.imageUrl} />
            )}
          </AspectRatio.Root>
        </ExplainerMedia>
      </ExplainerTextMedia>
    </ExplainerSectionContainer>
  )
}

interface ExplainerVideoProps {
  explainer: Explainer
}

export const ExplainerVideo: FunctionComponent<ExplainerVideoProps> = ({
  explainer,
}) => {
  return <VideoYouTube data={explainer} />
}
