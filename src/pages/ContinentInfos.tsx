import { Flex } from '@chakra-ui/react'
import { CitiesBox } from '../components/CitiesBox/Index'
import { ContinentInfosBanner } from '../components/ContinentInfosBanner/Index'
import { ContinentInfosTexts } from '../components/ContinentInfosTexts/Index'
import { Header } from '../components/Header/Index'

export function ContinentInfos() {
  return (
    <Flex as="main" flexDir="column" justify="center">
      <Header />
      <ContinentInfosBanner />
      <ContinentInfosTexts />
      <CitiesBox />
    </Flex>
  )
}
