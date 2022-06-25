import { Flex } from '@chakra-ui/react'
import { Header } from '../components/Header/Index'
import { HomeBanner } from '../components/HomeBanner/Index'
import { SwipperBox } from '../components/SwipperBox/Index'
import { TravelTypesBox } from '../components/TravelTypesBox/Index'

function Home() {
  return (
    <Flex as="main" flexDir="column">
      <Header />
      <HomeBanner />
      <TravelTypesBox />
      <SwipperBox />
    </Flex>
  )
}

export default Home
