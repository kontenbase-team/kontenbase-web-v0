import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { Explainer } from '~/components'

interface ExplainerStepsProps {}

import explainerSteps from './explainer-steps.json'

const ExplainerStepsContainer = styled('div', {})

export const ExplainerSteps: FunctionComponent<ExplainerStepsProps> = () => {
  return (
    <ExplainerStepsContainer>
      <h1>How it works?</h1>
      {explainerSteps.map((explainer, index) => {
        return <Explainer explainer={explainer} />
      })}
    </ExplainerStepsContainer>
  )
}

export default ExplainerSteps
