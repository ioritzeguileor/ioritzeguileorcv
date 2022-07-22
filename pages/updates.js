import { Container, Heading } from '@chakra-ui/react'
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
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
