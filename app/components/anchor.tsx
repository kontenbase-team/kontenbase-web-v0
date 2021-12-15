interface AnchorProps {
  href: string
  children: React.ReactNode
}

export const Anchor = (props: AnchorProps) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      {props.children}
    </a>
  )
}
