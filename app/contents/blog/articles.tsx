import { Link } from 'remix'

import { styled } from '~/stitches'
import { getDate } from '~/utils'

const ArticlesContainer = styled('div', {})

const ArticleContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
})

const ArticleItem = styled('article', {})

const ArticleCoverImage = styled('img', {
  maxHeight: '300px',
  borderRadius: '$2',
})

export const BlogArticles = ({ articles }: { articles: any }) => (
  <ArticlesContainer>
    {articles.map((article: any) => (
      <ArticleContainer key={article.cuid}>
        <Link to={article.slug}>
          <ArticleItem>
            <h1>{article.title}</h1>
            <time dateTime={article.dateAdded}>
              {getDate(article.dateAdded)}
            </time>
            <p>{article.brief}</p>
            <ArticleCoverImage src={article.coverImage} alt={article.title} />
          </ArticleItem>
        </Link>
      </ArticleContainer>
    ))}
  </ArticlesContainer>
)
