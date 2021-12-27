type CreateMeta = {
  title: string
  description: string
}

export const createMeta = ({ title, description }: CreateMeta) => {
  return {
    title: title,
    description: description,
    'og:title': title,
    'og:description': description,
  }
}
