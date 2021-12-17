import { styled } from '~/stitches'
import { buttonStyles } from '~/components'

/**
 * Anchor
 */

interface AnchorProps {
  href: string
  display?: 'block' | undefined
  children: React.ReactNode
}

const AnchorContainer = styled('a', {
  variants: {
    display: {
      block: {
        display: 'block',
      },
    },
  },
})

export const Anchor = (props: AnchorProps) => {
  return (
    <AnchorContainer
      display={props.display}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}
    </AnchorContainer>
  )
}

/**
 * Anchor Icon
 */

export const AnchorIcon = styled(Anchor, {
  svg: { height: '100%' },
  color: '$gray11',
  '&:hover': { color: '$gray12' },
})
