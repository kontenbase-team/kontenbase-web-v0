import path from 'path'
import fs from 'fs/promises'
import parseFrontMatter from 'front-matter'
import invariant from 'tiny-invariant'
import { marked } from 'marked'

export type Post = {
  slug: string
  title: string
}

export type Posts = Post[]

export type PostMarkdownAttributes = {
  title: string
}

// Relative to the server output, not the source!
const postsPath = path.join(__dirname, '..', 'posts')

// console.log({ postsPath })

function isValidPostAttributes(
  attributes: any
): attributes is PostMarkdownAttributes {
  return attributes?.title
}

export async function getPosts() {
  const dir = await fs.readdir(postsPath)

  return Promise.all(
    dir.map(async (filename) => {
      const file = await fs.readFile(path.join(postsPath, filename))
      const { attributes } = parseFrontMatter(file.toString())
      invariant(
        isValidPostAttributes(attributes),
        `${filename} has bad meta data!`
      )
      return {
        title: attributes.title,
        slug: filename.replace(/\.mdx$/, ''),
      }
    })
  )
}

export async function getPost(slug: string) {
  const filepath = path.join(postsPath, slug + '.mdx')
  const file = await fs.readFile(filepath)

  const { attributes, body } = parseFrontMatter(file.toString())

  invariant(
    isValidPostAttributes(attributes),
    `Post ${filepath} is missing attributes`
  )

  const html = marked(body)

  return {
    slug,
    title: attributes.title,
    html,
  }
}
