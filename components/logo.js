import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue, } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  img {
    transition: 200ms ease;
  }

  &:hover img {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const yingPrintImg = `/images/yinyang.png`

  return (
    <Link href="/" scroll={false}>
      <a>
        <LogoBox>
          <Image src={yingPrintImg} width={18} height={18} alt="logo" />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily='M PLUS Rounded 1c", sans-serif'
            fontWeight="bold"
            ml={3}
          >
            Ioritz Eguileor
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo