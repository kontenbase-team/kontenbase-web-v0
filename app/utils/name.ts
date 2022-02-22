import stringToColor from 'string-to-color'

export const getNameInitials = (name: string) => {
  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join(' ')

  return initials
}

export const getNameColor = (name: string) => {
  const color = stringToColor(name)

  return color
}
