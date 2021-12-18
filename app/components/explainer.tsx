import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Heading, Paragraph, AspectRatio } from '~/components'

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
  fontSize: '$9',
  my: '$8',
})

const StepDescription = styled(Paragraph, {
  fontSize: '$5',
})

/**
 * Media
 */
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
        <StepName>Step {step}</StepName>
        <StepTitle>{explainer.title}</StepTitle>
        <StepDescription>{explainer.description}</StepDescription>
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
