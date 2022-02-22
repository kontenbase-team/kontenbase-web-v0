import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { FunctionComponent } from 'react'

import { styled } from '~/stitches'
import { getNameColor, getNameInitials } from '~/utils'

const AvatarStyled = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: '$background10',
})

const AvatarImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const AvatarFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

interface AvatarProps {
  src: string
  name: string
}

export const Avatar: FunctionComponent<AvatarProps> = ({ src, name }) => {
  const nameInitials = getNameInitials(name)
  const nameColor = getNameColor(name)

  return (
    <AvatarStyled css={{ backgroundColor: nameColor }}>
      <AvatarImage src={src} alt={name} />
      <AvatarFallback delayMs={600}>{nameInitials}</AvatarFallback>
    </AvatarStyled>
  )
}
