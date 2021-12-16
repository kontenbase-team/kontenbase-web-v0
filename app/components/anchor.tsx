import { styled } from '~/stitches'

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
      href={props.href}
      display={props.display}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </AnchorContainer>
  )
}

const AnchorIconContainer = styled('a', {
  svg: { height: '100%' },
  color: '$gray11',
  '&:hover': { color: '$gray12' },
})

export const AnchorIcon = (props: AnchorProps) => {
  return (
    <AnchorIconContainer
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </AnchorIconContainer>
  )
}
