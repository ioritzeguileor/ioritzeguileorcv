import NextLink from 'next/link'
import { LinkItem } from '../components/navbar'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoLinkedin, IoMail, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'
import {Meta} from '/components/work'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('white', 'whiteAlpha.200')}
        borderColor={useColorModeValue('black',undefined)}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m a Basque computer science student at UF! 
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
             Ioritz Eguileor-
          </Heading>
          <p>Aspiring SWE ( Developer / Graphic Designer / Gym Trainer )</p>
          <p>七転び八起き - &quot;Fall Seven Times and Stand Up Eight&quot;</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/ioritz.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Self
        </Heading>
        <Paragraph>
          Currently a Computer Science student at the Univeristy of Florida under the College of Engineering. I look forward to competing in Hackathons during my 4 years here as well as being a leading member in the Computer Science Clubs. At the moment I am trying to become very profficient at{''}<LinkItem href="https://nextjs.org/" target="_blank">
          <Link>Next/React</Link></LinkItem>
               as well as trying to work towards a full-stack application during the rest of summer break before my computer science classes start.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Skills</Heading>
        <Box>
        <Meta color="blue">Programming Languages</Meta>
        <span>Python, Java, JavaScript</span>
        </Box>
        <Box>
        <Meta color="red">Frameworks/Other</Meta>
        <span>ReactJS, Tailwind CSS, ChakraUI, NextJS, HTML, CSS</span>
        </Box>
        <Meta color="green">Languages</Meta>
        <span>English (Native), Spanish (Native), French (Fluent)</span>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2004</BioYear>
          Born in Bilbao, Spain.
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Moved to Dubai.
        </BioSection>
        <BioSection>
          <BioYear>2016</BioYear>
          Moved to Florida.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated from Cypress Bay Highschool, started Bachelor of Engineering while studying CS.
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Hobbies and Passions
        </Heading>
        <Box>
          <Meta color="blue">Mind</Meta>
          <span>Software-Development, {''}<Link href="https://www.goodreads.com/user/show/90688924-ioritz-eguileor" target="_blank">Reading</Link>, Stoicism</span>
        </Box>
        <Box>
          <Meta color="red">Physical</Meta>
          <span>Rugby, Powerlifting, Olympic Weightlifting</span>
        </Box>
        <Box>
          <Meta color="green">Creative</Meta>
          <span>Graphic-Design, {''}<Link href="https://twitch.tv/crazybuggz" target="_blank">Streaming</Link>, Drawing</span>
        </Box>
        <p>
        </p>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Contact Me :)
        </Heading>
        <List>
          <ListItem>
            <Link href="www.linkedin.com/in/ioritzeguileor" target="_blank">
              <Button
                color={useColorModeValue('#0d0d0d', undefined)}
                variant="ghost"
                colorScheme={useColorModeValue('blue', undefined)}
                leftIcon={<IoLogoLinkedin />}
              >
                @ioritzeguileor
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: ioritzeguileor@gmail.com" target="_blank">
              <Button
                color={useColorModeValue('#0d0d0d', undefined)}
                variant="ghost"
                colorScheme={useColorModeValue('blue', undefined)}
                leftIcon={<IoMail/>}
              >
                ioritzeguileor@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/ioritzeguileor" target="_blank">
              <Button
                color={useColorModeValue('#0d0d0d', undefined)}
                variant="ghost"
                colorScheme={useColorModeValue('blue', undefined)}
                leftIcon={<IoLogoGithub />}
              >
                @ioritzeguileor
              </Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <NextLink href="/updates" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="gray">
              Updates / Journal
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
