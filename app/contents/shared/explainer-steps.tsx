import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Content, Heading, Explainer } from '~/components'

interface ExplainerStepsProps {}

import explainerSteps from './explainer-steps.json'

const ExplainerStepsContainer = styled('div', {
  py: '$10',
  '@tablet': { py: '$16' },
  '@desktop': { py: '$20' },
})

export const ExplainerSteps: FunctionComponent<ExplainerStepsProps> = () => {
  return (
    <ExplainerStepsContainer>
      <Content layout="center-vertical">
        <Heading as="h1">How it works?</Heading>
        {explainerSteps.map((explainer, index) => {
          return <Explainer explainer={explainer} />
        })}
      </Content>
    </ExplainerStepsContainer>
  )
}

export default ExplainerSteps
