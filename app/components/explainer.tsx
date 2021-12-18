import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { AspectRatio } from '~/components'

export type Explainer = {
  slug: string
  title: string
  description: string
  imageUrl: string
  direction: 'left' | 'right' | undefined
}

interface ExplainerProps {
  step: number
  explainer: Explainer
}

const ExplainerSectionContainer = styled('section', {
  width: '$full',
  display: 'flex',
  gap: '$10',
  justifyContent: 'space-between',
  variants: {
    direction: {
      right: { flexDirection: 'row' },
      left: { flexDirection: 'row-reverse' },
    },
  },
})

const ExplainerText = styled('div', {
  maxWidth: '500px',
  minWidth: '300px',
})

const ExplainerMedia = styled('div', {
  border: '0.5rem solid $red3',
  borderRadius: '0.25rem',
  width: 720,
  overflow: 'hidden',
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
    <ExplainerSectionContainer direction={explainer.direction}>
      <ExplainerText>
        <span>Step {step}</span>
        <h1>{explainer.title}</h1>
        <p>{explainer.description}</p>
      </ExplainerText>

      <ExplainerMedia>
        <AspectRatio.Root ratio={16 / 10}>
          <ExplainerImage alt={explainer.title} src={explainer.imageUrl} />
        </AspectRatio.Root>
      </ExplainerMedia>
    </ExplainerSectionContainer>
  )
}

export default ExplainerSection
