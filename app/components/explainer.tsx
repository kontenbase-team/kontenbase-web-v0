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

// mobile: '(min-width: 0px)',
//   tablet: '(min-width: 501px)',
//   desktop: '(min-width: 769px)',
//   tv: '(min-width: 1201px)',
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
  fontSize: '$9',
  my: '$5',
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
  overflow: 'hidden',
  maxWidth: '720px',
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
          <AspectRatio.Root ratio={16 / 10}>
            <ExplainerImage alt={explainer.title} src={explainer.imageUrl} />
          </AspectRatio.Root>
        </ExplainerMedia>
      </ExplainerTextMedia>
    </ExplainerSectionContainer>
  )
}

export default ExplainerSection
