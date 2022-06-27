import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CitiesBox } from '../components/CitiesBox/Index'
import { ContinentInfosBanner } from '../components/ContinentInfosBanner/Index'
import { ContinentInfosTexts } from '../components/ContinentInfosTexts/Index'
import { Header } from '../components/Header/Index'

export function ContinentInfos() {
  const { id } = useParams()
  const [currentContinentID, setCurrentContinentID] = useState<number>(0)
  const continentList = [
    'europa',
    'americanorte',
    'americasul',
    'asia',
    'africa',
    'oceania'
  ]

  useEffect(() => {
    if (id && continentList.includes(id)) {
      const index = continentList.indexOf(id)
      setCurrentContinentID(index)
    }
  })
  return (
    <>
      <Flex flexDir="column" minW="375px">
        <Header />
        <ContinentInfosBanner currentContinentID={currentContinentID} />
        <ContinentInfosTexts currentContinentID={currentContinentID} />

        <CitiesBox currentContinentID={currentContinentID} />
      </Flex>
    </>
  )
}
