import { styled } from '~/stitches'

const ArticlesContainer = styled('div', {})

const ArticleItem = styled('article', {})

export const BlogArticles = ({ articles }: { articles: any }) => (
  <ArticlesContainer>
    {articles.map((article: any) => (
      <ArticleItem>{article.title}</ArticleItem>
    ))}
  </ArticlesContainer>
)
