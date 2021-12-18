import { FunctionComponent } from 'react'

import { styled } from '~/stitches'

type Explainer = {
  slug: string
  title: string
  description: string
  direction: string
  imageUrl: string
}

interface ExplainerProps {
  explainer: Explainer
}

const ExplainerContainer = styled('div', {
  width: '$full',
})

export const Explainer: FunctionComponent<ExplainerProps> = (props) => {
  return (
    <ExplainerContainer>
      <pre>{JSON.stringify(props.explainer, null, 2)}</pre>
    </ExplainerContainer>
  )
}

export default Explainer
