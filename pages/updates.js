import { Container, Heading,Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Entry from '../components/journalentry'

const Posts = () => (
  <Layout title="Updates">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Updates
      </Heading>
      <Entry date="June 30 2022">First portfolio website, started and completed :)</Entry>
      <Entry date="July 15 2022">Began working on React Dashboard Project</Entry>
      <Entry date="July 21 2022">Finishing website up then will continue to review code</Entry>
      <Entry date="July 24 2022">1/3rd of the way through <Link href="https://www.udemy.com/course/python-for-finance-and-trading-algorithms/">Udemy Python for Financial Analysis </Link>course.
      Learned how to use pynum as well as pandas and now will get into how to use matplotlib for visual analysis.
      </Entry>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
