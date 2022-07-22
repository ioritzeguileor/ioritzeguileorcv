import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="CrazyBuggz">
    <Container>
      <Title>
        CrazyBuggz Podcast <Badge colorScheme="green">2022</Badge>
      </Title>
      <P>
        A community focused podcast that my friend and I started since he moved away to Switzerland. This podcast was made during the pandemic and consisted of one new person from our community being interviewed everyday. This created discussions on topic such as the gym, programming, pop-culture, rapping, school drama and etc.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta color="green">Website</Meta>
          <span>
            <Link href="https://twitch.tv/crazybuggz" target="_blank">
            https://www.twitch.tv/crazybuggz <ExternalLinkIcon mx="2px" />
            </Link>
          </span>
        </ListItem>
        <ListItem>
          <Meta color="green">Stats</Meta>
          <span>Max Viewers: 120, Status: Affiliated by Twitch, Revenue: $100+</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/crazybuggz.png" alt="crazypodcast" />

      <AspectRatio maxW="640px" ratio={1.7} my={4}>
        <iframe
          src="https://www.youtube.com/embed/u7ZPj-OnrrU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
