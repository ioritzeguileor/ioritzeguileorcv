import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbDashboard from '../public/images/works/dashboard.png'
import thumbPortfolio from '../public/images/works/portfolio.png'
import thumbCrazy from '../public/images/works/crazybuggz.png'

const Works = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="dashboard" title="Mock-Dashboard" thumbnail={thumbDashboard}>
            A mock proffesional dashboard with various graphical features as well as CRUD functionality.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="portfolio"
            title="First Portfolio"
            thumbnail={thumbPortfolio}
          >
            My first porfolio/full website I made to get acquainted with front-end web dev.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4} variant="section-title">
          General Works
        </Heading>
      </Section>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="crazybuggz" thumbnail={thumbCrazy} title="CrazyBuggz">
            Afilliated Twitch Podcast which a friend I started during the pandemic.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
