import { Link } from 'remix'

import { Heading } from '~/components'
import { styled } from '~/stitches'
import { getDate } from '~/utils'

const ArticlesContainer = styled('div', {})

const ArticleContainer = styled('div', {
  mt: '$5',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
})

const ArticleItem = styled('article', {
  maxWidth: '820px',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '$5',
})

const ArticleItemGroup = styled('div', {
  flex: '1',
})

const ArticleCoverImage = styled('img', {
  maxWidth: '300px',
  borderRadius: '$2',
})

export const BlogArticles = ({ articles }: { articles: any }) => (
  <ArticlesContainer>
    {articles.map((article: any) => (
      <ArticleContainer key={article.cuid}>
        <Link to={article.slug}>
          <ArticleItem>
            <ArticleItemGroup>
              <Heading as="h3">{article.title}</Heading>
              <time dateTime={article.dateAdded}>
                {getDate(article.dateAdded)}
              </time>
              <p>{article.brief}</p>
            </ArticleItemGroup>
            <ArticleCoverImage src={article.coverImage} alt={article.title} />
          </ArticleItem>
        </Link>
      </ArticleContainer>
    ))}
  </ArticlesContainer>
)
