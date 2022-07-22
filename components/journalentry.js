import {Box,Divider,Container, useColorModeValue} from '@chakra-ui/react'
import {Meta} from './work'

const Entry=({date,children})=>{
    return(
        <Container>
        <Box borderRadius="lg" mb={1} p={3} textAlign="center" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} css={{ backdropFilter: 'blur(10px)' }}>
            {children}
        </Box>
        <Meta color="blue">{date}</Meta>
        <Divider my={2}/>
        </Container>
    )
}

export default Entry