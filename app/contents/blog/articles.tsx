import { Link } from 'remix'

import { Heading } from '~/components'
import { styled } from '~/stitches'
import { getDate } from '~/utils'

const ArticlesContainer = styled('div', {})

const ArticleContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  mb: '$20',
  '@desktop': { mb: '$10' },
})

const ArticleItem = styled('article', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$5',
  maxWidth: '520px',
  flexDirection: 'column',
  '@desktop': {
    maxWidth: '820px',
    flexDirection: 'row',
  },
})

const ArticleItemGroup = styled('div', {
  flex: '1',
})

const ArticleCoverImage = styled('img', {
  width: '100%',
  borderRadius: '$2',
  '@desktop': {
    maxWidth: '360px',
  },
})

export const BlogArticles = ({ articles }: { articles: any }) => (
  <ArticlesContainer>
    {articles.map((article: any) => (
      <ArticleContainer key={article.cuid}>
        <Link to={article.slug} prefetch="intent">
          <ArticleItem>
            <ArticleCoverImage src={article.coverImage} alt={article.title} />
            <ArticleItemGroup>
              <Heading as="h3">{article.title}</Heading>
              <time dateTime={article.dateAdded}>
                {getDate(article.dateAdded)}
              </time>
              <p>{article.brief}</p>
            </ArticleItemGroup>
          </ArticleItem>
        </Link>
      </ArticleContainer>
    ))}
  </ArticlesContainer>
)
