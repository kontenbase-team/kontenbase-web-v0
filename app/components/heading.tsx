import { styled } from '~/stitches'

interface HeadingProps {
  as?: string
  children: React.ReactNode
}

const H1 = styled('h1', { color: '$text1', fontSize: '3rem' })
const H2 = styled('h2', { color: '$text2', fontSize: '2rem' })
const H3 = styled('h3', { color: '$text3', fontSize: '1.75rem' })
const H4 = styled('h4', { color: '$text4', fontSize: '1.5rem' })
const H5 = styled('h5', { color: '$text5', fontSize: '1.25rem' })
const H6 = styled('h6', { color: '$text6', fontSize: '1rem' })

export const Heading = ({ as = 'h1', children }: HeadingProps) => {
  switch (as) {
    case 'h1':
      return <H1>{children}</H1>
    case 'h2':
      return <H2>{children}</H2>
    case 'h3':
      return <H3>{children}</H3>
    case 'h4':
      return <H4>{children}</H4>
    case 'h5':
      return <H5>{children}</H5>
    case 'h6':
      return <H6>{children}</H6>
    default:
      return <H1>{children}</H1>
  }
}
