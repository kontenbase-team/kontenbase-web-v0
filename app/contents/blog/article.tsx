import { styled } from '~/stitches'

const ArticleContainer = styled('article', {})

const ArticleSection = styled('section', {})

export const BlogArticle = ({ article }: { article: any }) => (
  <ArticleContainer>
    <ArticleSection>
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </ArticleSection>
  </ArticleContainer>
)
