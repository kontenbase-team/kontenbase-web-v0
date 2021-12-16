import { styled } from '~/stitches'

interface AnchorProps {
  href: string
  children: React.ReactNode
}

const AnchorContainer = styled('a', {})

export const Anchor = (props: AnchorProps) => {
  return (
    <AnchorContainer
      href={props.href}
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
