import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container,Image } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { route } from 'next/dist/server/router'



const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ioritz's home" />
        <meta name="author" content="Ioritz Eguileor" />
        <meta name="author" content="Ioritz Eguileor" />
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="og:title" content="Ioritz Eguileor" />
        <title>Ioritz Eguileor - Home</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <Image src="https://i.pinimg.com/originals/bd/8d/b6/bd8db6e6d336033e654188d56812e779.jpg" alt="samurai picture" loading="lazy" borderRadius="lg" mb={4} boxShadow/>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
