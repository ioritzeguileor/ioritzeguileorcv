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
      <Entry date="July 27 2022">Finished Python Finance and Algorithms for Trading course, uploaded some personal practice as well as brief summary on <Link href="https://github.com/ioritzeguileor/python-finance-course" target="_blank">github.
      </Link></Entry>
      <Entry date="July 28 2022">Finished JP Morgan Chase Virtual Internship Experience on Forage after procrastinating it for a while, it was interesting to see the tools that JP Morgan Chases uses to display their data however, I feel that this Virtual Internship was at times trivial and did not give much room for individual thought and to explore, <Link href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_Zk2GbovwKNSjkEhQ5_1659061965352_completion_certificate.pdf" target="_blank">my certificate</Link>
      </Entry>
       <Entry date="August 1 2022">Began working on my new project. It will be my first Full-Stack website, its purpose will be to serve as a BookClub type of hub where people can add books to a database after loging in and others can review them. Have finished the backend although I need to review it to understand it better, currently working on the frontend
      </Entry>
      <Entry date="August 8 2022">Discontinued the BookClub site for now as I have decided to spend the rest of my summer before fall getting ahead in Calculus 3 as well as begin a course on DeepLearningAI as it is something that interests me and will increase my abilities in programming and different branches of mathematics and statistics.
      </Entry>
     </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
