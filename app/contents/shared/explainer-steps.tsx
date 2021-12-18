import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Content, Heading, ExplainerSection } from '~/components'
import type { Explainer } from '~/components'

interface ExplainerStepsProps {}

import explainerSteps from './explainer-steps.json'

const ExplainerStepsContainer = styled('div', {
  py: '$10',
  '@tablet': { py: '$16' },
  '@desktop': { py: '$20' },
})

const ExplainerCollection = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '$full',
  mt: '$10',
  gap: '$32',
})

export const ExplainerSteps: FunctionComponent<ExplainerStepsProps> = () => {
  return (
    <ExplainerStepsContainer>
      <Content layout="center-vertical">
        <Heading as="h3" css={{ fontSize: '$9' }}>
          How it works?
        </Heading>
        <ExplainerCollection>
          {(explainerSteps as Explainer[]).map((explainer, index) => {
            return (
              // @ts-ignore
              <ExplainerSection
                key={explainer.slug}
                step={index + 1}
                explainer={explainer}
              />
            )
          })}
        </ExplainerCollection>
      </Content>
    </ExplainerStepsContainer>
  )
}

export default ExplainerSteps
