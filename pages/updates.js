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
      <Entry date="July 28 2022">Finished Python Finance and Algorithms for Trading course, developed my first simple trading algorithm using ballinger bands, as well as learned how to use Quantopian, and QuantConnect for algorithm research and simulations. Course overall made me much more comfortable with using python for analysis and I feel able of representing multiple different types of datas graphically now thanks to new skills in matplotlib, pandas and etc.
      </Entry>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
