import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Ioritz Dashboard">
    <Container>
      <Title>
        Ioritz Dashboard <Badge colorScheme="green">2022-</Badge>
      </Title>
      <P>
          Official Portfolio Remake made with NextJS, ChakraUI and FramerMotion will be updating my projects and progress on this site as well as perhaps add more features later on.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta color="green">Website</Meta>
          <Link href="https://leia-corp.netlify.app" target="_blank">
            https://ioritzeguileorcv.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta color="green">Stack</Meta>
          <span>NextJS, ChakraUI, FramerMotion</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/home.png" alt="Dashboard" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'