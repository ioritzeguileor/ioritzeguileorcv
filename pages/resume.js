import {Heading,Container,Box} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import {Document,Page, pdfjs} from 'react-pdf'
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume=()=>{

    const [numPage,setNumPages] = useState(null)
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess({numPage}){
        setNumPages(numPage);
        setPageNumber(pageNumber);
    } 

    return(
        <Layout title="Resume">
            <Container>
                <Heading as="h3" variant="section-title" fontSize={20}>Resume</Heading>
                    <p>This is a mock resume not my actual one as it is not yet completed.</p>
                <Box>
                <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                    <Page height="900" pageNumber={pageNumber}/>
                </Document>
                </Box>
            </Container>
        </Layout>
    )
}

export default Resume
export { getServerSideProps } from '../components/chakra'
