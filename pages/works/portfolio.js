import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
    <Container>
      <Title>
        First Portfolio <Badge>2022</Badge>
      </Title>
      <P>
        Simple portfolio I made mostly to learn the fundamentals of front-end web development before starting to learn more complex libraries. Also learned how to implement a contact form that is conected to an external service.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta color="green">Website</Meta>
          <Link href="https://ioritzeguileorcv.web.app/" target="_blank">https://ioritzeguileorcv.web.app/<ExternalLinkIcon mx="2px" /></Link>
        </ListItem>
        <ListItem>
          <Meta color="green">Stack</Meta>
          <span>HTML,CSS and JS</span>
        </ListItem>
        <ListItem>
          <Meta color="green">Update Post</Meta>
          <Link href="/updates">June 30 2022 Entry<ExternalLinkIcon mx="2px" /></Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/portfolio.png" alt="portfolio" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
