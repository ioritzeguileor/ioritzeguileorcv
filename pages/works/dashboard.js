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
  <Layout title="Dashboard">
    <Container>
      <Title>
        Dashboard <Badge colorScheme="green">2022-</Badge>
      </Title>
      <P>
        A mock business dashboard created to fully wrap my head around the React and Tailwind CSS library as well as to learn how one would approach implementing graphs as well as limited CRUD functionality.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta color="green">Website</Meta>
          <Link href="https://leia-corp.netlify.app" target="_blank">
            https://leia-corp.netlify.app <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta color="green">Stack</Meta>
          <span>React, Tailwind CSS, Syncfusion Library</span>
        </ListItem>
        <ListItem>
          <Meta color="green">Update Post</Meta>
          <Link href="/updates">July 15 2022 Entry<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/dashboard.png" alt="Dashboard" />
      <WorkImage src="/images/works/dashboard2.png" alt="Dashboard" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
